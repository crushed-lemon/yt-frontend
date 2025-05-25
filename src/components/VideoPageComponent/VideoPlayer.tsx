
export interface IVideoPlayerProps {
    videoId : number,
    videoLink : string
}

export function VideoPlayer (props: IVideoPlayerProps) {
  return (

    <div className="w-full max-w-5xl mx-auto aspect-[3/2] rounded-lg shadow">
        {
            <video className="w-full h-full object-cover" controls>
                <source src={`${props.videoLink}`} type="video/mp4" />
            </video>
        }
    </div>
  );
}
