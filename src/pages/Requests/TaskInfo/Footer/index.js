import React from 'react';
import MainButton from '../../../../Components/MainButton';

import './styles.css';

export default function Footer({ realPrice, approved, taskId}) {
//onTheWay/order/:id
//"despachar pedido" ou "pedir pra retirar" no texto do button

  function acceptOrder() {
    console.log('acceptOrder');
    // /approve/order/:id
  }

  function rejectOrder() {
    console.log('rejectOrder');
    // /reject/order/:id
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
          <MainButton onClick={() => console.log('submit')}>
            Aceitar pedido
          </MainButton>
        
          <MainButton onClick={() => console.log('submit')}>
            Rejeitar pedido
          </MainButton>
        </div>
        : approved === 'Aceito' ?
        <div className='paymentMethod' >
          <main>
            <span>Formas de pagamentos </span>

            <div className='method'>
              <p>Pago no cartão de credito</p>
            </div>
          </main>

          <MainButton onClick={console.log('entregar pedido')}>
            Entregar pedido
          </MainButton>
        </div>
        : <p> não aceito</p>
      }
    </footer>
  );
}
