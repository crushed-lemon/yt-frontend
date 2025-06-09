import { Link } from 'react-router-dom';
import { getRelativeTime } from '../../utils/date';
import './VideoCard.css';

export interface IVideoCardProps {
    id : number;
    thumbnail : string;
    title : string;
    uploadTime : number;
    channel : string;
    views : number;
    likes : number;
    dislikes : number;
}

export function VideoCard (props: IVideoCardProps) {
    return (
        <Link to={`/videos/${props.id}`}>
            <div className="container" >
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
        </Link>
    );
}
