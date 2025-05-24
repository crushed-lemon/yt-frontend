import * as React from 'react';
import { useParams } from 'react-router-dom';

const Video: React.FunctionComponent = () => {

    const param = useParams();

    return (
        <div> Video is {param.videoId} </div>
    );
};

export default Video;
