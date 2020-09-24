import React, { useState, useEffect } from 'react';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

import api from '../../services/api';
import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';

import './styles.css';

export default function Requests() {
  const [ page, setPage ] = useState(0);
  const [ openedTaskId, setOpenedTaskId ] = useState(0);
  const [ taskInfos, setTaskInfos ] = useState('');
  
  const [taskListPreparing, setTaskListPreparing] = useState([])  
  const [taskListNew, setTaskListNew] = useState([])  
  const [taskListDelivery, setTaskListDelivery] = useState([])  

  useEffect(() => {
    async function LoadRequests(){
      const response = await api.get('/tasks/preparing/5f6af2b3df273108f45e8998')

      setTaskListPreparing(response.data)
    }
    LoadRequests()
  },[])

  useEffect(() => {
    async function LoadRequests(){
      const response = await api.get('/tasks/new/5f6af2b3df273108f45e8998')

      setTaskListNew(response.data)
    }
    LoadRequests()
  },[])

  useEffect(() => {
    async function LoadRequests(){
      const response = await api.get('/tasks/delivery/5f6af2b3df273108f45e8998')

      setTaskListDelivery(response.data)
    }
    LoadRequests()
  },[])

  useEffect(() => {
    async function LoadRequests(){
      const response = await api.get(`/tasks/${openedTaskId}`)

      setTaskInfos(response.data)
    }
    LoadRequests()
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

      </div>
    </div>
  )
}
