import React from 'react';
import { Button } from '@material-ui/core';

import './styles.css'

export default function ButtonSubmit({ children, onClick }) {
  return (
    <div className='submitButton'>
      <Button onClick={onClick}>
        {children}
      </Button>
    </div>
  )
}
