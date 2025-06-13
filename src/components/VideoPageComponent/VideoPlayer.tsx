
// export interface IVideoPlayerProps {
//     videoId : string,
// }

// export function VideoPlayer (props: IVideoPlayerProps) {
//   return (

//     <div className="w-full max-w-5xl mx-auto aspect-[3/2] rounded-lg shadow">
//         {
//             <video className="w-full h-full object-cover" controls>
//                 <source src={`http://localhost:8000/videos/${props.videoId}`} type="video/mp4" />
//             </video>
//         }
//     </div>
//   );
// }

import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const hls = new Hls();

      hls.loadSource(`http://localhost:8000/video/${videoId}/manifest`);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [videoId]);

  return (
    <div className="w-full max-w-5xl mx-auto aspect-[3/2] rounded-lg shadow">
      <video
        ref={videoRef}
        controls
        className="w-full h-full object-cover"
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
