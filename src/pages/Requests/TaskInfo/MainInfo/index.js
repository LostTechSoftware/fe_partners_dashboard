import React, { useState} from 'react';
import NumberFormat from 'react-number-format';
import {
  Button,
  Popover,
} from '@material-ui/core';
import moment from 'moment'
import 'moment/locale/pt-br'

import Messages from '../../../../Components/Messages';
import './styles.css';

export default function MainInfo ({
  taskId,
  address,
  createdAt,
  userName,
  userPhone,
}) {
  const [ modalOpen, setModalOpen ] = useState(null);
  const [ coordinates, ] = useState(JSON.parse(sessionStorage.getItem('restaurantLocation')))
  
  return (
    <section className='mainInfo' >
      <h2>Informações do Pedido</h2>
      
      <div className='content'>
        <div className='sideLine' />
        <section className='address'>
          {address ?
            <a target="blank" href={`https://www.google.com/maps/dir/${coordinates[1]},${coordinates[0]}/${address.location.coordinates[1]},${address.location.coordinates[0]}`}>
              <span className='label'>Endereço</span>
              <p className='result'>
                {`${address.street},
                  ${address.Number},
                  ${address.neighborhood},
                  ${address.complement ? `${address.complement},` : ''}
                  ${address.reference}`}
              </p>
            </a>
            :
            <>
              <span className='label'>Retirada</span>
              <p className='result'>Não necessita entregar</p>
            </>
          }
        </section>
        
        <main>
          <div className='sideLine' />
          <section className='preparingTime'>
            <span className='label'>Tempo de preparo</span>
            <p className='result'>{moment(createdAt).fromNow()}</p>
          </section>
  
          <div className='sideLine' />
          <section className='contact'>
            <div>
              <span className='label'>{userName}</span>
              <p>
              
              <Button
                className='button'
                fullWidth
                onClick={event => setModalOpen(event.currentTarget)}
              >
                <p> Contato </p>
              </Button>
              </p>
            </div>
          </section>
  
          <div className='sideLine' />
        </main>
      </div>
      
      <Popover
        className='contactPopoverRoot'
        open={Boolean(modalOpen)}
        anchorEl={modalOpen}
        onClose={event => setModalOpen(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <NumberFormat
          className='result'
          value={userPhone}
          displayType={'text'}
          format='(##) ##### - ####'
        />
        <Messages requestId={taskId} />
      </Popover>
    </section>
  );
}
