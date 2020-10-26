import React, { useState, useEffect, useMemo } from 'react';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import socketio from 'socket.io-client';
import useSound from 'use-sound';

import Messages from '../../Components/Messages';

import api from '../../services/api';
import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';

import requestRecived from '../../assets/request-recived.mp3';
import './styles.css';

export default function Requests() {
  const [ page, setPage ] = useState(0);
  const [ openedTaskId, setOpenedTaskId ] = useState(0);
  const [ taskInfos, setTaskInfos ] = useState('');
  
  const [taskListPreparing, setTaskListPreparing] = useState([])
  const [taskListNew, setTaskListNew] = useState([])
  const [taskListDelivery, setTaskListDelivery] = useState([])

  const [ playRequestRecived ] = useSound(requestRecived)
     
  const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
    query: {
      user_id:sessionStorage.getItem('_id')
    }
  }), [] )

  async function LoadRequests(page){
    // new taks
    if(page === 0) {
      const response = await api.get('/tasks/new');
      setTaskListNew(response.data);
    }
    // preparing tasks
    if(page === 1) {
      const response = await api.get('/tasks/preparing');
      setTaskListPreparing(response.data);
    }
    // delivery tasks
    if(page === 2) {
      const response = await api.get('/tasks/delivery');
      setTaskListDelivery(response.data);
    }
  }
  
  async function ReLoadNewTasks() {
    const response = await api.get('/tasks/new');
    setTaskListNew(response.data);
    playRequestRecived();
  }

  useEffect(() => {
    socket.on('new_order', ReLoadNewTasks)
  }, [socket])

  useEffect(() => {
    LoadRequests(page)
  }, [page])

  useEffect(() => {
    async function LoadTask(){
      const response = await api.get(`/tasks/${openedTaskId}`)
      setTaskInfos(response.data)
    }
    LoadTask()
  }, [openedTaskId])

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

        <TaskInfo>
          {taskInfos}
        </TaskInfo>

        <Messages request={taskInfos} />
      </div>
    </div>
  )
}
