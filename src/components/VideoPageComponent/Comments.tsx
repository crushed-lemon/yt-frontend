import { useState } from 'react';
import { SingleComment } from './SingleComment';

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

export function Comments () {

  const [comments] = useState(hardCodedComments());

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
