import React, { useEffect, useState, useMemo } from 'react';

import Footer from './Footer';
import Item from './Item';
import MainInfo from './MainInfo';
import api from '../../../services/api'
import './styles.css';
import LoadingTask from './LoadingTask';
import socketio from 'socket.io-client';

export default function TaskInfo({ requestId, loadRequests }) {
  const [ taskInfos, setTaskInfos ] = useState({})
  const [loading, setLoading] = useState(false)

  const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
    query: {
      user_id:sessionStorage.getItem('_id')
    }
  }), [] )

  async function getTaskInfo(){
    setLoading(true)
    const response = await api.get(`/tasks/${requestId}`)

    setTaskInfos(response.data)
    setLoading(false)
  }

  useEffect(() => {
    socket.on('cancelattion_status', getTaskInfo)
  }, [socket])

  useEffect(() => {
    getTaskInfo()
  }, [requestId])

  return (
    <div className='taskInfo'>
    {loading
    ? <LoadingTask />
    : (taskInfos.products ?
      <>
        <main>
          <MainInfo
            taskId={taskInfos._id}
            address={ taskInfos.address ? taskInfos.address : null }
            createdAt={ taskInfos.createdAt }
            userName={ taskInfos.user.name }
            userPhone={ taskInfos.user.telephone }
          />
          
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
          realPrice={taskInfos.price}
          approved={taskInfos.approved}
          coupon={taskInfos.coupon}
          taskId={taskInfos._id}
          change={taskInfos.change}
          payment_method={taskInfos.payment_method}
          onTheWay={taskInfos.onTheWay}
          tip={taskInfos.tip}
          toDelivery={taskInfos.address ? true : false}
          
          loadRequests={loadRequests}
          reloadTask={getTaskInfo}
        />  
      </>
      : null
    )
    }
    </div>
  );
}
