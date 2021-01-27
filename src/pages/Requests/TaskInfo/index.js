import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import Footer from './Footer';
import Item from './Item';
import MainInfo from './MainInfo';
import api from '../../../services/api'
import LoadingTask from './LoadingTask';
import channel from '../../../constants/pusher';
import './styles.css';

import { PrintUnderLine } from '../../../Components/Print'

export default function TaskInfo({ requestId, loadRequests }) {
  const [ taskInfos, setTaskInfos ] = useState({})
  const [loading, setLoading] = useState(false)

  async function getTaskInfo(){
    setLoading(true)
    const response = await api.get(`/tasks/${requestId}`)

    setTaskInfos(response.data)
    setLoading(false)
  }

  useEffect(() => {
    async function socket() {
      const _id = sessionStorage.getItem('_id')
      const socket = socketio('https://backendfood.link', {
        query: {
          user_id: _id
       }
      })
      socket.on('cancelattion_status', getTaskInfo);    
    }
    socket()
  }, []);

  channel.bind('cancelattion_status', getTaskInfo);

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
          
          <PrintUnderLine />
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
        <PrintUnderLine />
        <Footer
          cancelClient={taskInfos.cancelClient}
          approved={taskInfos.approved}
          coupon={taskInfos.coupon}
          taskId={taskInfos._id}
          change={taskInfos.change}
          price={taskInfos.price}
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
