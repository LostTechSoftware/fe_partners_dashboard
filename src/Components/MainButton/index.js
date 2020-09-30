import React from 'react';
import { Button } from '@material-ui/core';

import './styles.css'

export default function MainButton({ children, onClick }) {
  return (
    <div className='mainButton'>
      <Button onClick={onClick}>
        {children}
      </Button>
    </div>
  )
}
