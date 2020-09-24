import React, { useEffect, useState } from 'react';
import './styles.css'

export default function TaskIcon({ checkedStatus = null, taskId, price, name, createdAt }) {
  const [ checkedState, setCheckedState ] = useState('')
  
  useEffect(() => {
    if(checkedStatus) {
      setCheckedState('Checked');
    } else {
      setCheckedState('NOT checked');
    }

  }, [checkedStatus]);

  return (
    <div className={`taskIcon taskIcon${checkedState}`}>
      <section className='info'>
        <p className='headline'> {name} #{taskId} </p>
        <span className='coment'> Feito as {createdAt} </span>
      </section>

      <p className='price'>{price.toLocaleString('pt-br',{style:'currency', currency:'brl'})}</p>
    </div> 
  );
}
