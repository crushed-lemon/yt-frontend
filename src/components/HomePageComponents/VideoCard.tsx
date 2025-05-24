import { getRelativeTime } from '../../utils/date';
import './VideoCard.css';

export interface IVideoCardProps {
    id : Number;
    thumbnail : String;
    title : String;
    uploadTime : number;
    channel : String;
    views : Number;
    likes : Number;
    dislikes : Number;
}

export function VideoCard (props: IVideoCardProps) {
    return (
        <div className="container">
            <div className="thumbnail-container">
                <div id="thumbnail" className="thumbnail">
                    <div className="bg-gray-200 w-full h-full rounded shadow animate-pulse"></div>
                </div>
            </div>
            <p className='video-title'> {props.title} </p>
            <div className="upload-info">
                <p> {props.channel} </p>
                <p>{getRelativeTime(props.uploadTime)}</p>
            </div>
            <div className="view-info">
                <p className=''> {`${props.views} views`} </p>
                <p className='text-green-700'> {`${props.likes} likes`} </p>
                <p className='text-red-700'> {`${props.dislikes} dislikes`} </p>
            </div>
        </div>
    );
}
