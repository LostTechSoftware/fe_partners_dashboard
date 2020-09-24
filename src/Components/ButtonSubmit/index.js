import React from 'react';
import { Button } from '@material-ui/core';

import './styles.css'

export default function ButtonSubmit({ children, onClick }) {
  return (
    <Button className='submitButton' onClick={onClick}>
      {children}
    </Button>
  )
}
