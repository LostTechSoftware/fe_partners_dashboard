import React from 'react';
import './styles.css';

export default function RejectionReason({ reason, setReason }) {
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
    </div>
  )
}
