
export interface IVideoPlayerProps {
    videoId : string,
}

export function VideoPlayer (props: IVideoPlayerProps) {
  return (

    <div className="w-full max-w-5xl mx-auto aspect-[3/2] rounded-lg shadow">
        {
            <video className="w-full h-full object-cover" controls>
                <source src={`http://localhost:8000/videos/${props.videoId}`} type="video/mp4" />
            </video>
        }
    </div>
  );
}
