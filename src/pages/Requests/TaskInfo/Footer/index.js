import React from 'react';
import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';

import './styles.css';

export default function Footer({ realPrice, approved, taskId }) {
//onTheWay/order/:id
//"despachar pedido" ou "pedir pra retirar" no texto do button

  async function acceptOrder() {
    const response = await api.post(`/approve/order/${taskId}`);
  }

  async function rejectOrder() {
    const response = await api.post(`/reject/order/${taskId}`);
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
          <MainButton onClick={ acceptOrder } boxId='acceptOrder' >
            Aceitar pedido
          </MainButton>
        
          <MainButton onClick={ rejectOrder } boxId='rejectOrder' >
            Rejeitar pedido
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
            </MainButton> : null
          }
        </div> 
      } : {null}
    </footer>
  );
}
