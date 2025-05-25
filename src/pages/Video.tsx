import * as React from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPageComponent/VideoPlayer';
import { RecommendedVideosSection } from '../components/VideoPageComponent/RecommendedVideosSection';
import { AddCommentSection } from '../components/VideoPageComponent/AddCommentSection';
import { Comments } from '../components/VideoPageComponent/Comments';
import { DescriptionSection } from '../components/VideoPageComponent/DescriptionSection';

const Video: React.FunctionComponent = () => {

    const param = useParams();

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col border w-full p-8'>
                <VideoPlayer videoId = {Number(param.videoId)} />
                <DescriptionSection videoId = {Number(param.videoId)} />
                <AddCommentSection />
                <Comments />
            </div>
            <div className='flex flex-col min-w-48 max-w-72 border p-4'>
                <RecommendedVideosSection />
            </div>
            
        </div>
    );
};

export default Video;
