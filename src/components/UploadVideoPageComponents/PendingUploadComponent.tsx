import * as React from 'react';
import type { PendingUpload } from '../../pages/UploadVideo';
import { Link } from 'react-router-dom';

export interface IPendingUploadComponentProps {
  pendingUpload : PendingUpload
}

export function PendingUploadComponent (props : IPendingUploadComponentProps) {
  return (
    <div className='flex items-center justify-left py-4'>
      <Link to={`${props.pendingUpload.upload_id}`} className='w-24 mx-4 border-r text-blue-700'> {props.pendingUpload.upload_id} </Link>
      <Link to={`${props.pendingUpload.upload_id}`} className='w-48 mx-4 border-r'> {props.pendingUpload.video_name} </Link>
      <p className='w-48 mx-4 border-r'> {props.pendingUpload.percentage_uploaded}% uploaded </p>
      <p className=' mx-4 '> Last uploaded at {props.pendingUpload.timestamp} </p>
    </div>
  );
}
