import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function LoadingTask() {
  return (
    <div>
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' height={160} />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' height={220} />
      <Skeleton animation='wave' />
    </div>
  )
}
