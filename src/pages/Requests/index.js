import React, { useState, useEffect, useMemo } from 'react';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import socketio from 'socket.io-client';
import useSound from 'use-sound';

import api from '../../services/api';
import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';

import requestRecived from '../../assets/request-recived.mp3';
import './styles.css';

export default function Requests() {
  const [ page, setPage ] = useState(0);
  const [ openedTaskId, setOpenedTaskId ] = useState(0);
  
  const [taskListPreparing, setTaskListPreparing] = useState([])
  const [taskListNew, setTaskListNew] = useState([])
  const [taskListDelivery, setTaskListDelivery] = useState([])

  const [ playRequestRecived ] = useSound(requestRecived)

  const [loading, setLoading] = useState(true)
     
  const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
    query: {
      user_id:sessionStorage.getItem('_id')
    }
  }), [] )

  async function loadRequests(){
    // new taks
    if(page === 0) {
      const response = await api.get('/tasks/new');
      setTaskListNew(response.data);
      setLoading(false)
    }
    // preparing tasks
    if(page === 1) {
      const response = await api.get('/tasks/preparing');
      setTaskListPreparing(response.data)
      setLoading(false)
    }
    // delivery tasks
    if(page === 2) {
      const response = await api.get('/tasks/delivery');
      setTaskListDelivery(response.data)
      setLoading(false)
    }
  }
  
  async function ReLoadNewTasks() {
    playRequestRecived();
    const response = await api.get('/tasks/new');
    setTaskListNew(response.data);
  }

  useEffect(() => {
    socket.on('new_order', ReLoadNewTasks)
  }, [socket])

  useEffect(() => {
    loadRequests()
  }, [page])

  return(
    <div className='page requests'>
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
