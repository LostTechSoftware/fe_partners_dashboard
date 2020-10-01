import React from 'react';
import api from '../../../../services/api';
import MainButton from '../../../../Components/MainButton';

import './styles.css';

export default function Footer({ realPrice, approved, taskId }) {
//onTheWay/order/:id
//"despachar pedido" ou "pedir pra retirar" no texto do button

  async function acceptOrder() {
    console.log('acceptOrder');
    console.log(taskId)
    const response = await api.post(`/approve/order/${taskId}`, {
      headers: { authorization: 'token' }
    });
    console.log('response:');
    console.log(response);
  }

  async function rejectOrder(taskId) {
    console.log('rejectOrder');
    const response = await api.post(`/reject/order/${taskId}`, {
      headers: { authorization: 'token' }
    });
    console.log('response:');
    console.log(response);
  }

  async function deliveryOrder(taskId) {
    console.log('deliveryOrder');
    const response = api.get('/');
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
          <MainButton onClick={ acceptOrder }>
            Aceitar pedido
          </MainButton>
        
          <MainButton onClick={ rejectOrder }>
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
            <MainButton onClick={taskId => deliveryOrder(taskId)}>
              Entregar pedido
            </MainButton> : <> </>
          }
        </div> 
      } : <> </>
    </footer>
  );
}
