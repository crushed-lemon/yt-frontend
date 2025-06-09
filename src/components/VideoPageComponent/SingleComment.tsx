import {getRelativeTime} from '../../utils/date.tsx';

export interface ISingleCommentProps {
    author : string,
    commentText : string,
    timestamp : number,
}

export function SingleComment (props: ISingleCommentProps) {
  return (
    <div className='p-4 border-b'>
      <div className='font-bold'>{ props.author }</div>
      <div className='text-medium text-sm'>{ getRelativeTime(props.timestamp) }</div>
      <div className=''>{ props.commentText }</div>
    </div>
  );
}
