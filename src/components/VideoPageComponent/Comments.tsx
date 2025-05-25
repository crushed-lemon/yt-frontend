import { useState } from 'react';
import { SingleComment } from './SingleComment';

export interface ICommentsProps {
}

function hardCodedComments() {
  return [
    {
      author : 'monkeyboy',
      commentText : 'Best video ever',
      timestamp : 1739867211000
    },
    {
      author : 'zebraboy',
      commentText : 'Worst video ever',
      timestamp : 1745867211000
    }
  ];
}

export function Comments (props: ICommentsProps) {

  const [comments, setComments] = useState(hardCodedComments());

  if (!comments || comments.length === 0) {
    return <div>No comments yet</div>
  }

  return (
    <div>
      {
        comments.map((c) => {
          return <SingleComment {...c} />
        })
      }
    </div>
  );
}
