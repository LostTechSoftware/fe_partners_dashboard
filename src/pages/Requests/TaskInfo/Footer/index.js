import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';

import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';
import PaymentMethod from '../../../../Components/PaymentMethod';

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

  async function acceptOrder() {
    const response = await api.post(`/approve/order/${taskId}`);
  }

  //"despachar pedido" ou "pedir pra retirar" no texto do button
  async function deliveryOrder() {
    const response = await api.post(`/onTheWay/order/${taskId}`);
  }

  async function cancelOrder() {
    const response = await api.post(`/restaurant/cancel/${taskId}`);
  }

// taskInfos.expiresIn

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

          <MainButton onClick={ acceptOrder } boxId='acceptOrder' >
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
              <MainButton onClick={ cancelOrder } boxId='cancelOrder' >
                Cancelar
              </MainButton>

              <MainButton onClick={ deliveryOrder } boxId='deliveryOrder' >
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
        <RejectionReason taskId={taskId} />
      </Dialog>
    </footer>
  );
}
