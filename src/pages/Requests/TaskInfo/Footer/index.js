import React, { useState, useEffect } from 'react';
import { Dialog, IconButton } from '@material-ui/core';
import { toast } from 'react-toastify';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';

import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';
import PaymentMethod from '../../../../Components/PaymentMethod';

import RejectionReason from './RejectionReason';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css'

export default function Footer({
  realPrice,
  taskId,
  payment_method,
  approved,
  onTheWay,
  toDelivery,
  change,
  reloadTask,
  loadRequests
}) {
  const [ openRejectionModal, setOpenRejectionModal ] = useState(false);
  const [loading, setLoading] = useState('')

  async function acceptOrder() {
    setLoading('accept')
    const response = await api.post(`/approve/order/${taskId}`)
      .catch(error => toast.error(error.response.data))
      .then(response => toast.success('Pedido aceito!'))
    setLoading('')
    reloadTask()
    loadRequests()
  }

  async function deliveryOrder() {
    setLoading('delivery')
    const response = await api.post(`/onTheWay/order/${taskId}`)
      .catch(error => toast.error(error.response.data))
      .then(response => toast.success('Pedido enviado!'))
    setLoading('')
    reloadTask()
    loadRequests()
  }

  async function cancelOrder() {
    setLoading('cancel')
    const response = await api.post(`/restaurant/cancel/${taskId}`)
      .catch(error => toast.error(error.response.data))
      .then(response => toast.warning('Pedido aguardando ser cancelado!'))
    setLoading('')
    reloadTask()
    loadRequests()
  }

  return (
    <footer>
      <h2 className='finalPrice'>
        {realPrice.toLocaleString(
          'pt-br',
          {style:'currency', currency:'brl'}
        )}
      </h2>

      {approved === 'Aguardando aprovação' ?
        <div className='orderActions'>
          <MainButton
            boxId='rejectOrder'
            onClick={ () => setOpenRejectionModal(true) }
          >
            Rejeitar pedido
          </MainButton>

          <MainButton
            loading={loading === 'accept'}
            onClick={ acceptOrder }
            boxId='acceptOrder'
          >
            Aceitar pedido
          </MainButton>
        </div>
        :
        <div className='paymentMethodBox' >
          <section className='infos'>
            <IconButton onClick={() => window.print()}>
              <PrintRoundedIcon />
            </IconButton>

            <div className='text'>
              <span>Forma de pagamento</span>

              <div className='method'>
                <PaymentMethod>
                  {payment_method}
                </PaymentMethod>
                {!! change
                  && <span>Troco para: {change.toLocaleString('pt-br', {currency:'brl',style:'currency'})}</span>
                }
              </div>
            </div>
          </section>

          <section className='orderButtons'>
            {approved === 'Aceito' && !onTheWay ?
              <>
              <MainButton 
              loading={loading === 'cancel'}
              onClick={ cancelOrder } 
              boxId='cancelOrder' 
              >
                Cancelar
              </MainButton>

              <MainButton
                loading={loading === 'delivery'}
                onClick={ deliveryOrder }
                boxId='deliveryOrder'
              >
                {toDelivery ? 'Entregar pedido' : 'Pedir pra retirar'}
              </MainButton>
              </>
            : null }
          </section>
        </div> 
      } : {null}

      <Dialog
        fullWidth
        maxWidth='xl'
        open={openRejectionModal}
        onClose={() => setOpenRejectionModal(false)}
      >
        <RejectionReason
          loadRequests={loadRequests}
          taskId={taskId}
          reloadTask={reloadTask}
          closeModal={() => setOpenRejectionModal(false)}
        />
      </Dialog>
    </footer>
  );
}
