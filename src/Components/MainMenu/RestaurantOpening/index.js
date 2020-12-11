import React, { useState, useEffect } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import { CheckCircleRounded, SendRounded } from '@material-ui/icons'

import MainButton from '../../../Components/MainButton';
import api from '../../../services/api';
import './styles.css';
import Skeleton from '@material-ui/lab/Skeleton';
import 'react-toastify/dist/ReactToastify.css'

export default function RestaurantOpening() {
  const [loading, setLoading] = useState(true);
  const [ restaurantIsOpen, setRestaurantIsOpen ] = useState(false);
  const [ expectedDeliveryTime, setExpectedDeliveryTime ] = useState(sessionStorage.getItem('delay'));

  async function closeRestaurant() {
    setLoading(true)
    const response = await api.post('/close');
    setRestaurantIsOpen(response.data.open);
    setLoading(false)
  }

  async function openRestaurant() {
    setLoading(true)
    const response = await api.post('/open');
    setRestaurantIsOpen(response.data.open);
    setLoading(false)
  }

  function controlRestaurantOpening() {
    if (restaurantIsOpen)
      closeRestaurant();
    else
      openRestaurant();
  }

  useEffect(() => {
    async function getOpenState() {
      setLoading(true)
      const response = await api.get('/opened');
      setRestaurantIsOpen(response.data)
      setLoading(false)
    }
    getOpenState()
  }, []);
  
  return (
    <div className='restaurantOpeningBox'>
      <section className='restaurantOpening'>
        {loading
        ? <Skeleton animation='wave' width='200px' height='50px'/>
        : <MainButton onClick={ controlRestaurantOpening } >
            { restaurantIsOpen === true ? 'Fechar agora' : 'Abrir agora' }
          </MainButton>
        }
        <div className='line' />

        <div className='info'>
          {loading ?
            <Skeleton animation='wave' variant='text' width='200px' height='50px'/>
            : <h2>
              {restaurantIsOpen === true
                ?
                'Restaurante aberto'
                :
                'Restaurante fechado'
              }
              </h2>
          }
          <div style={loading ? {marginLeft:'10%'} : {}}>
            {loading ?
              <Skeleton animation='wave' variant='circle' width='40px' height='40px'/>
              : 
              <CheckCircleRounded
                className={ restaurantIsOpen === true ? 'open' : 'closed' }
              />
            }
          </div>
        </div>
      </section>

      <section className='expectedDeliveryTime'>
        <label htmlFor='expectedTime'>
          Tempo de entrega estimado
        </label>
        /
        <div className='actions'>
          <TextField
            id='expectedTime'
            type='number'
            label='Em minutos'
            value={ expectedDeliveryTime }
            onChange={ event => event.target.value >= 0 ? 
              setExpectedDeliveryTime(event.target.value)
            : null }
          />

          <IconButton onClick={ async () => {
            const delay = Number(expectedDeliveryTime)
            if (delay > 0) {
              const response = await api.put('/change/delay', {
                delay
              }).catch(error => {
                if (error)
                  toast.error('Erro ao mudar tempo de entrega!')
              })

              sessionStorage.setItem('delay', response.data.delay)
              toast.success('Tempo de entrega mudado!')
            }
          }}>
            <SendRounded/>
          </IconButton>
        </div>
      </section>
    </div>
  );
}
