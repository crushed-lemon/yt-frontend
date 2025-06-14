import axios from 'axios';
import * as React from 'react';
import { useNavigate, useParams, type NavigateFunction } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const BACKEND_ENDPOINT = import.meta.env.VITE_UPLOAD_VIDEO_SERVICE_ENDPOINT;

export default function UploadVideoFile () {

    const param = useParams();
    const navigate = useNavigate();

    function submitFile(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const fileToUpload = formData.get('fileToUpload') as File | null;

        if(!fileToUpload) {
            toast.error("No file selected");
        }

        uploadFileInChunks(param.uploadId! ,fileToUpload!, navigate);
    }

  return (
    <div className='px-8 py-8'>
        <ToastContainer position='bottom-center' autoClose={5000} ></ToastContainer>
        <form onSubmit={submitFile}>
            <input type='file' id='fileToUpload' name='fileToUpload'></input>
            <button className='my-4 text-white bg-blue-700 hover:bg-blue-800 p-4 rounded-full'> Upload! </button>
        </form>
    </div>
  );
}

const uploadFileInChunks = async(uploadId : string, fileToUpload : File, navigate : NavigateFunction) => {

    const [file_size, chunk_size, chunks] = getChunkDetails(fileToUpload);

    uploadFileDetails(uploadId, file_size, chunk_size, chunks)
    .then(response => {
        if (response.data.status === "OK") {
            uploadChunks(uploadId, fileToUpload, file_size, chunk_size, chunks)
            .then(() => {
                navigate("metadata");
                toast.success("Video file uploaded successfully!");
            })
            .catch(e => {
                console.log(e);
                toast.error("Video could not be uploaded!");
            })
        } else {
            console.log(response);
            toast.error("Video could not be uploaded, some server side error happened");
        }
    })
    .catch(e => {
        console.log(e);
        toast.error("Video could not be uploaded!");
    })
}

const uploadFileDetails = async(uploadId : string, file_size : number, chunk_size : number, chunks : number) => {
    const detailsUri = BACKEND_ENDPOINT + "/upload/fileDetails/" + uploadId;
    return axios.post(detailsUri, {
        "file_size" : file_size,
        "chunk_size" : chunk_size,
        "chunks" : chunks
    });
}

const uploadChunks = async(uploadId: string, fileToUpload: File, file_size: number, chunk_size: number, chunks: number) => {
    let nextIndex = 0;

    const worker = async() => {
        while (nextIndex < chunks) {
            const i = nextIndex++;
            await uploadChunk(uploadId, fileToUpload, file_size, chunk_size, i);
        }
    };

    Promise.all(Array.from({ length: 5 }, () => worker()));
}

const uploadChunk = async(uploadId: string, fileToUpload: File, file_size: number, chunk_size: number, chunkId: number) => {

    const start = chunkId * chunk_size;
    const end = Math.min(start + chunk_size - 1, file_size);
    const chunk = fileToUpload.slice(start, end + 1);

    const uri = BACKEND_ENDPOINT + "/upload/chunk/" + uploadId;

    let attempt = 1;
    const maxAttempts = 5;

    while (attempt < maxAttempts) {
        try {
            console.log("Uploading chunk #" + chunkId + " (attempt#" + attempt + ")");
            const response = await fetch(uri, {
                method : "POST",
                headers : {
                    'Content-Range': `bytes ${start}-${end}/${file_size}`,
                    'Content-Type': 'application/octet-stream',
                },
                body : chunk
            });
            if (!response.ok) {
                throw new Error("Response not okay, retry with backoff");
            }
            return;
        } catch (e) {
            console.log(e);
            attempt++;
            const wait = Math.pow(2, attempt) * 100;
            await new Promise(res => setTimeout(res, wait));
        }
    }

    toast.error("Failed to upload chunk#" + chunkId);
}

function getChunkDetails(fileToUpload: File): [number, number, number] {
    const file_size = fileToUpload.size;
    let chunk_size = 2 * 1024 * 1024;
    let chunks = Math.ceil(file_size / chunk_size);

    if (chunks > 100) {
        chunk_size = 5 * 1024 * 1024;
        chunks = Math.ceil(file_size / chunk_size);
    }

    return [file_size, chunk_size, chunks];
}

