import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import {
  PlayCircleFilledRounded,
  PauseCircleFilledRounded,
} from '@material-ui/icons';

import api from '../../../services/api';

export default function SellingStateControllerButton({ sellingState, productId }) {
  const [ state, setState ] = useState(sellingState)

  async function changeProductAvailability() {
    const response = await api.post(`/product/pause/${ productId }`);
    setState(state ? false : true)
  }

  return (
    <Button onClick={changeProductAvailability} >
      {
        !state ?
          <>
            <PauseCircleFilledRounded />
            <p>Pausar vendas</p>
          </>
        :
          <>
            <PlayCircleFilledRounded />
            <p>Retomar vendas</p>
          </>
      }
    </Button>
  )
};
