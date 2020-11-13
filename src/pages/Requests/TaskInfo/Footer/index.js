import React, { useState, useEffect } from 'react';
import { Dialog } from '@material-ui/core';

import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';
import PaymentMethod from '../../../../Components/PaymentMethod';
import { toast } from 'react-toastify';

import RejectionReason from './RejectionReason';
import './styles.css';

export default function Footer({
  realPrice,
  taskId,
  payment_method,
  approved,
  onTheWay,
  toDelivery,
}) {
  const [ openRejectionModal, setOpenRejectionModal ] = useState(false);
  const [loading, setLoading] = useState('')

  async function acceptOrder() {
    setLoading('accept')
    const response = await api.post(`/approve/order/${taskId}`)
      .catch(error => toast.error(error.response.data));
    setLoading('')
  }

  async function deliveryOrder() {
    setLoading('delivery')
    const response = await api.post(`/onTheWay/order/${taskId}`)
      .catch(error => toast.error(error.response.data))
    setLoading('')
  }

  async function cancelOrder() {
    setLoading('cancel')
    const response = await api.post(`/restaurant/cancel/${taskId}`)
      .catch(error => toast.error(error.response.data));
    setLoading('')
  }

  useEffect(() => {
    console.log('up');
  }, []);

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
          <span>Forma de pagamento</span>

          <div className='method'>
            <PaymentMethod>
              {payment_method}
            </PaymentMethod>
          </div>

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
          taskId={taskId}
          closeModal={() => setOpenRejectionModal(false)}
        />
      </Dialog>
    </footer>
  );
}
