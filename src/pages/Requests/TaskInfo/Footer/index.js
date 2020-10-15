import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';

import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';

import RejectionReason from './RejectionReason';
import './styles.css';

export default function Footer({ realPrice, approved, taskId }) {
//onTheWay/order/:id
//"despachar pedido" ou "pedir pra retirar" no texto do button
  const [ openRejectionModal, setOpenRejectionModal ] = useState(false);

  async function acceptOrder() {
    const response = await api.post(`/approve/order/${taskId}`);
  }

  async function deliveryOrder() {
    const response = await api.post(`/onTheWay/order/${taskId}`);
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
        <div className='paymentMethod' >
          <main>
            <span>Formas de pagamentos </span>

            <div className='method'>
              <p>Pago no cartão de credito</p>
            </div>
          </main>

          {approved === 'Aceito' ? 
            <MainButton onClick={ deliveryOrder } boxId='deliveryOrder' >
              Entregar pedido
            </MainButton>
          : null }
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
