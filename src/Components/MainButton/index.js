import React from 'react';
import { Button } from '@material-ui/core';

import './styles.css'

export default function MainButton({ children, onClick, type, boxId }) {
  return (
    <div className='mainButton' id={boxId} >
      <Button onClick={onClick} type={type} >
        {children}
      </Button>
    </div>
  )
}
