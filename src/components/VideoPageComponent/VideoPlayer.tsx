import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const BACKEND_ENDPOINT = import.meta.env.VITE_VIEW_VIDEO_SERVICE_ENDPOINT;

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const hls = new Hls();

      hls.loadSource(`${BACKEND_ENDPOINT}/video/${videoId}/manifest`);
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
