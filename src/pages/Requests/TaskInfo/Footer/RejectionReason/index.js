import React, { useState } from 'react';
import { DialogActions } from '@material-ui/core';

import api from '../../../../../services/api';
import MainButton from '../../../../../Components/MainButton';
import './styles.css';

export default function RejectionReason({ taskId }) {
  const [ reason, setReason ] = useState('');

  async function rejectOrder() {
    const response = await api.post(`/reject/order/${taskId}`, {
      reason: reason,
    });
  }

  return (
    <div className='rejectionReason'>
      <label htmlFor='reason'>
        <h2>
          Por que o pedido foi rejeitado?
        </h2>
      </label>
      
      <textarea
        type='text'
        id='reason'
        value={reason}
        onChange={event => setReason(event.target.value)}
      />

      <DialogActions>
        <MainButton onClick={rejectOrder}>
          Enviar
        </MainButton>
      </DialogActions>
    </div>
  )
}
