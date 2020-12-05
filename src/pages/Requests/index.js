import React, { useState, useEffect, useMemo } from 'react';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import Sound from 'react-sound';

import api from '../../services/api';
import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';
import Pusher from 'pusher-js';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css'

export default function Requests() {
  const [ page, setPage ] = useState(0);
  const [ openedTaskId, setOpenedTaskId ] = useState(0);
  
  const [taskListPreparing, setTaskListPreparing] = useState([])
  const [taskListNew, setTaskListNew] = useState([])
  const [taskListDelivery, setTaskListDelivery] = useState([])
     
  async function loadRequests(){
    // new taks
    if(page === 0) {
      const response = await api.get('/tasks/new');
      setTaskListNew(response.data);
    }
    // preparing tasks
    if(page === 1) {
      const response = await api.get('/tasks/preparing');
      setTaskListPreparing(response.data)
    }
    // delivery tasks
    if(page === 2) {
      const response = await api.get('/tasks/delivery');
      setTaskListDelivery(response.data)
    }
  }
  
  const pusher = new Pusher('01486d854af72256e153', {
    cluster: 'mt1',
  });

  const channel = pusher.subscribe('my-channel');

  channel.bind('new_order', loadRequests);
  channel.bind('cancelattion_status',  () => {
    loadRequests()
    toast.warning('Um pedido foi cancelado!')
  });

  useEffect(() => {
    loadRequests()
  }, [page])

  return(
    <div className='page requests'>
    {!! taskListNew.length
     && <Sound 
      url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3" 
      loop={true} 
      autoLoad={true}
      volume={100} 
      playFromPosition={1000}
      playStatus={Sound.status.PLAYING}
      autoPlay={true}
      />
    }
      <MainMenu currentPage='requests' />
      <div className='pageContent'>
        <section className='taskList'>
          <header>
            <h1>Seus pedidos</h1>
          </header>

          <AppBar id='navHeadText' position='static' color='default'>
            <Tabs
              value={page}
              onChange={ (event, newValue) => setPage(newValue) }
            >
              <Tab label='Novos' />
              <Tab label='Aceitos' />
              <Tab label='Delivery' />
            </Tabs>
          </AppBar>

          <SwipeableViews
            id='swipeableBox'
            index={page}
            onChangeIndex={ index => setPage(index) }
          >
            <div className='subPage' value={page} index={0}>
              <TasksFilter openedTaskId={openedTaskId} setOpenedTaskId={setOpenedTaskId}>
                {taskListNew}
              </TasksFilter>
            </div>
            <div className='subPage' value={page} index={1}>
              <TasksFilter openedTaskId={openedTaskId} setOpenedTaskId={setOpenedTaskId}>
                {taskListPreparing}
              </TasksFilter>
            </div>
            <div className='subPage' value={page} index={2}>
              <TasksFilter openedTaskId={openedTaskId} setOpenedTaskId={setOpenedTaskId}>
                {taskListDelivery}
              </TasksFilter>
            </div>
          </SwipeableViews>
        </section>

        <TaskInfo
          loadRequests={loadRequests}
          requestId={openedTaskId}
        />
      </div>
    </div>
  )
}
