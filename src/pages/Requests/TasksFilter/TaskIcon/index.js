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
    <h2> {checkedState} </h2>
  );
}
