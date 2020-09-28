import React from 'react';
import moment from 'moment'
import NumberFormat from 'react-number-format';
import 'moment/locale/pt-br'

import ButtonSubmit from '../../../Components/ButtonSubmit/index';
import Item from './Item';
import './styles.css';
import './responsivity.css';

export default function TaskInfo({ children = {} }) {  
//onTheWay/order/:id
//"despachar pedido" ou "pedir pra retirar" no texto do button

  function AcceptOrder() {
    console.log('acceptOrder');
    // /approve/order/:id
  }

  function RejectOrder() {
    console.log('rejectOrder');
    // /reject/order/:id
  }

// children.expiresIn

  return ( 
    <div className='taskInfo'>
    {children.products ?
      <>
      <main>
        <section className='generalInfo' >
          <h2>Informações do Pedido</h2>
          
          <div className='content'>
            <div className='sideLine' />
            <section className='preparingTime'>
              <span className='label'>Tempo de preparo</span>
              <p className='result'>{moment(children.createdAt).startOf('hour').fromNow()}</p>
            </section>

            <div className='sideLine' />
            <section className='address'>
              {children.address ?
                <>
                  <span className='label'>Endereço</span>
                  <p className='result'>
                    {`${children.address.street},
                      ${children.address.Number},
                      ${children.address.neighborhood},
                      ${children.address.complement},
                      ${children.address.reference}`}
                  </p>
                </>
                : <>
                    <span className='label'>Retirada</span>
                    <p className='result'>Não necessita entregar</p>
                  </>

              }
            </section>

            <div className='sideLine' />
            <section className='contact'>
              <div>
                <span className='label'>{children.user.name}</span>
                <p>

                <NumberFormat className='result' value={children.user.telephone} displayType={'text'} format="(##) ##### - #### " />
                </p>
              </div>
            </section>

            <div className='sideLine' />
          </div>
        </section>
        <section className='itensList' >
          {
            children.products.map(product => (
              <Item
                key={Math.random()}
                title={product.title}
                price={product.price}
                description={product.description}
                quantity={product.quantidade}
                avatar={product.avatar}
              />
            ))
          }

        </section>
      </main>

      <footer>
        <h2 className='finalPrice'>{children.realPrice.toLocaleString('pt-br',{style:'currency', currency:'brl'})}</h2>

        {children.approved !== 'Aceito' ?
          <div className='orderActions'>
            <ButtonSubmit onClick={() => console.log({children})}>
              Aceitar pedido
            </ButtonSubmit>
          
            <ButtonSubmit onClick={() => console.log({children})}>
              Rejeitar pedido
            </ButtonSubmit>
          </div>
          :
          <div className='paymentMethod' >
            <span>Formas de pagamentos </span>

            <div className='method'></div>
          </div>
        }
      </footer>
      </>
      : <> </>
    }
    </div>
  );
}
