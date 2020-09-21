import React from 'react';
import { Button } from '@material-ui/core';
import {
  PlayCircleFilledRounded,
  PauseCircleFilledRounded,
} from '@material-ui/icons';


function SellingStateControllerButton({ sellingState }) {

  function Play() {
    return (
      <Button> 
        <PlayCircleFilledRounded />
        <p>Retomar vendas</p>
      </Button>
    )
  }
  function Pause () {
    return (
      <Button> 
        <PauseCircleFilledRounded />
        <p>Pausar vendas</p>
      </Button>
    )
}
  return (
    sellingState ?
      Pause()
      :
      Play()
  )    
}

export default SellingStateControllerButton;
