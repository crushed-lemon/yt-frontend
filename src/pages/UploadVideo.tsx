import { useEffect, useState } from 'react';
import { PendingUploadComponent } from '../components/UploadVideoPageComponents/PendingUploadComponent';
import axios from 'axios';
import { useUser } from '../providers/UserProvider';

const BACKEND_ENDPOINT = import.meta.env.VITE_UPLOAD_VIDEO_SERVICE_ENDPOINT;

export interface PendingUpload {
    upload_id : string,
    video_name : string,
    percentage_uploaded : number,
    timestamp : number
}

const UploadVideo = () => {

    const user = useUser();

    const [pendingUploads, setPendingUploads] = useState([{"upload_id" : "abc", "video_name" : "video_abc", "percentage_uploaded" : 12, "timestamp" : 1234}]);

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

    return (
        <>
            <div className="px-12 py-12">

            {pendingUploads.length !== 0 && (
                <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    You can resume uploading these videos :
                </div>
            )}

            {
                pendingUploads.map(pe => {
                    return <PendingUploadComponent pendingUpload={pe}></PendingUploadComponent>
                })
            }
                <div>
                    <label htmlFor="video_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name your video (you can change this later)</label>
                    <input type="text" id="video_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96" placeholder="My Awesome Video" required />
                </div>
                <button type="button" className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed</button>
            </div>
        </>
    );
}

export default UploadVideo;