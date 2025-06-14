import axios from "axios";
import type { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const BACKEND_ENDPOINT = import.meta.env.VITE_UPLOAD_VIDEO_SERVICE_ENDPOINT;

export default function UploadVideoMetadata () {

    const param = useParams();

    function submitForm(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const description = formData.get("description");
        const uploadId = param.uploadId;

        const uri = BACKEND_ENDPOINT + "/upload/metadata/" + uploadId;

        axios.post(uri, {
            description
        }).then(() => {
            toast.success("The video is uploaded! We will notify you when it is visible on the site. It may take upto 5 minutes.");
        });
    }

    return (
        <div className="mx-8 my-8">
            <ToastContainer position="bottom-center" autoClose={15000} />
            <p>
                Your file is uploaded successfully. Fill in the metdata here and click submit to finish the upload. (Your video won't be visible until this step is done).
            </p>
            <form className="flex flex-col my-8" onSubmit={submitForm}>
                <p>Description</p>
                <textarea id="description" name="description" className="border-black-200 border-2" rows={5}/>
                <button type="submit" className='my-4 text-white bg-blue-700 hover:bg-blue-800 p-4 rounded-full w-48'>Submit</button>
            </form>
        </div>
    );
}
