import axios from 'axios';
import { useEffect, useState, type ChangeEvent } from 'react';
import { PendingUploadComponent } from '../components/UploadVideoPageComponents/PendingUploadComponent';
import { useUser } from '../providers/UseUser';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BACKEND_ENDPOINT = import.meta.env.VITE_UPLOAD_VIDEO_SERVICE_ENDPOINT;

export interface PendingUpload {
    upload_id : string,
    video_name : string,
    percentage_uploaded : number,
    timestamp : number
}

const UploadVideoName = () => {

    const user = useUser();

    const navigate = useNavigate();

    const [pendingUploads, setPendingUploads] = useState<PendingUpload[]>([]);

    const [newVideoName, setNewVideoName] = useState<string | null>();

    useEffect(() => {
        if (!user.user) {
            return;
        }

        const url = BACKEND_ENDPOINT + "/upload/getPendingUploads/" + user.user?.username;
        axios.get(url)
        .then(response => {
            setPendingUploads(response.data);
        }).catch(exception => {
            console.log(exception);
        });
    }, [user]);

    if (!user.user) {
        return <div className="px-12 py-12">Please log in.</div>
    }

    function newVideoChanged(event: ChangeEvent<HTMLInputElement>): void {
        setNewVideoName(event.target.value);
    }

    function submitNewVideo(): void {
        const url = BACKEND_ENDPOINT + "/upload/newVideo"
        axios.post(url, {"video_name" : newVideoName})
        .then(response => {
            navigate(response.data.url);
        }).catch(exception => {
            console.log(exception);
            toast.error("The video cannot be uploaded");
        })
    }

    return (
        <>
            <ToastContainer position='bottom-center' autoClose={5000} />
            <div className="px-12 py-12">

            {pendingUploads.length !== 0 && (
                <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    You can resume uploading these videos :
                </div>
            )}

            {
                pendingUploads.map(pe => {
                    return <PendingUploadComponent key={pe.upload_id} pendingUpload={pe}></PendingUploadComponent>
                })
            }
                <div>
                    <label htmlFor="video_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name your video (you can change this later)</label>
                    <input type="text" onChange={newVideoChanged} id="video_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96" placeholder="My Awesome Video" required />
                </div>
                <button type="button" onClick={submitNewVideo} className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed</button>
            </div>
        </>
    );
}

export default UploadVideoName;