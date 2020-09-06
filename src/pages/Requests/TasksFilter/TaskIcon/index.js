import React, { useEffect, useState } from 'react';
import './styles.css'

export default function TaskIcon({ checked }) {
  const [ checkedState, setCheckedState ] = useState('')
  useEffect(() => {
    if(checked) {
      setCheckedState('this was checked');
    } else {
      setCheckedState('NOT checked');
    }

  }, [checked]);
  return (
    <div className='taskIcon'>
      <section className='info'>
        <p className='headline'> Task #00350 </p>
        <span className='coment'> As soon as </span>
      </section>

      <p className='price'>€120,21</p>
    </div> 
  );
}
