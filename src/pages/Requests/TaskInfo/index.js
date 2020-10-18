import React from 'react';
import moment from 'moment'
import NumberFormat from 'react-number-format';
import 'moment/locale/pt-br'

import Footer from './Footer';
import Item from './Item';
import './styles.css';
import './responsivity.css';

export default function TaskInfo({ children: taskInfos }) {
  return (
    <div className='taskInfo'>
    {taskInfos.products ?
      <>
      <main>
        <section className='generalInfo' >
          <h2>Informações do Pedido</h2>
          
          <div className='content'>
            <div className='sideLine' />
            <section className='preparingTime'>
              <span className='label'>Tempo de preparo</span>
              <p className='result'>{moment(taskInfos.createdAt).startOf('hour').fromNow()}</p>
            </section>

            <div className='sideLine' />
            <section className='address'>
              {taskInfos.address ?
                <>
                  <a href='https://www.google.com/maps/dir/-22.0621785,-46.9729812/-22.056778,-46.981406/@-22.0593744,-46.9815846,16z/data=!3m1!4b1'>
                    <span className='label'>Endereço</span>
                    <p className='result'>
                      {`${taskInfos.address.street},
                        ${taskInfos.address.Number},
                        ${taskInfos.address.neighborhood},
                        ${taskInfos.address.complement},
                        ${taskInfos.address.reference}`}
                    </p>
                  </a>
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
                <span className='label'>{taskInfos.user.name}</span>
                <p>
                
                <NumberFormat
                  className='result'
                  value={taskInfos.user.telephone}
                  displayType={'text'}
                  format="(##) ##### - ####"
                />
                </p>
              </div>
            </section>

            <div className='sideLine' />
          </div>
        </section>
        <section className='itensList' >
          {taskInfos.products.map(product => (
            <Item
              key={product._id}
              title={product.title}
              price={product.price}
              quantity={product.quantidade}
              description={product.description}
              additionals={product.additional}
              avatar={product.avatar}
            />
          ))}
        </section>
      </main>

      <Footer
        realPrice={taskInfos.realPrice}
        approved={taskInfos.approved}
        taskId={taskInfos._id}
        payment_method={taskInfos.payment_method}
        onTheWay={taskInfos.onTheWay}
        toDelivery={taskInfos.address ? true : false}
      />  
      </>
      : null
    }
    </div>
  );
}
