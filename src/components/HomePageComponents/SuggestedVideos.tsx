import * as React from 'react';
import { VideoCard, type IVideoCardProps } from './VideoCard';
import './SuggestedVideos.css';

function hardCodedVideos() : IVideoCardProps[] {
  return [
    {
      id: 32,
      thumbnail: "",
      title: "The first video",
      uploadTime: 1748088099000,
      channel: "Lemon chilli",
      views: 191,
      likes: 32,
      dislikes: 60
    },
    {
      id: 482,
      thumbnail: "",
      title: "Best video",
      uploadTime: 1748088099000,
      channel: "Lemon chilli",
      views: 270,
      likes: 70,
      dislikes: 11
    },
    {
      id: 621,
      thumbnail: "",
      title: "Dont go to the park",
      uploadTime: 1748087099000,
      channel: "Citrus boy",
      views: 8,
      likes: 0,
      dislikes: 0
    },
    {
      id: 552,
      thumbnail: "",
      title: "Mosters inc explained",
      uploadTime: 117287349000,
      channel: "Sour movies",
      views: 190,
      likes: 161,
      dislikes: 2
    },
    {
      id: 553,
      thumbnail: "",
      title: "Looney Tunes explained",
      uploadTime: 117247349000,
      channel: "Sour movies",
      views: 190,
      likes: 161,
      dislikes: 2
    },
    {
      id: 554,
      thumbnail: "",
      title: "Brave explained",
      uploadTime: 117287349000,
      channel: "Sour movies",
      views: 190,
      likes: 161,
      dislikes: 2
    },
    {
      id: 555,
      thumbnail: "",
      title: "CSK vs KKR",
      uploadTime: 117287349000,
      channel: "IPL official",
      views: 1900000,
      likes: 161098,
      dislikes: 2676
    },
    {
      id: 582,
      thumbnail: "",
      title: "How to make sour candy",
      uploadTime: 117287349000,
      channel: "Sour movies",
      views: 164,
      likes: 161,
      dislikes: 2
    }
  ];
}

export function SuggestedVideos () {
  
  const [videos] = React.useState(hardCodedVideos());

  if (!videos || videos.length === 0) {
      return (
        <div>Loading</div>
      );
  }

  return (
    <div className='videos-grid'>
      {
        videos.map(
          (video) => {
            return <VideoCard {...video} />
          }
        )
      }
    </div>
  );
}
