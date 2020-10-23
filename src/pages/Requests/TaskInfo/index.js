import React from 'react';

import Footer from './Footer';
import Item from './Item';
import MainInfo from './MainInfo';

import './styles.css';

export default function TaskInfo({ children: taskInfos }) {
  return (
    <div className='taskInfo'>
    {taskInfos.products ?
      <>
        <MainInfo
          address={ taskInfos.address ? taskInfos.address : null }
          createdAt={ taskInfos.createdAt }
          userName={ taskInfos.user.name }
          userPhone={ taskInfos.user.telephone }
        />
        
        <main>
          <section className='itensList' >
            {taskInfos.products.map(product => (
              <Item
                key={product._id}
                title={product.title}
                price={product.price}
                quantity={product.quantidade}
                description={product.description}
                observation={product.observation}
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
