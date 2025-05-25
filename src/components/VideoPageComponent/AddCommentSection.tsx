import TextareaAutosize from 'react-textarea-autosize';

function submitComment(e : Event) {
  e.preventDefault();
  console.log(e);
}

export function AddCommentSection () {
  return (
    <form className='flex justify-between space-x-4' onSubmit={(e) => submitComment(e)}>
      <TextareaAutosize
        placeholder='Add a comment' 
        className='border p-2 max-h-24 w-full overflow-hidden resize-none'
      />
      <button type='submit' className='bg-blue-500 p-2 h-10 items-center text-white rounded-md hover:border-2 hover:border-white'>^</button>
    </form>
  );
}
