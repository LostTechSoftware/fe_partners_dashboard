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

  // This solution to update Request list is not very performing once it will
    // update every time the user switch tabs and not necessarily every time
      // that some task is created or canceled, once its not real time
  useEffect(() => {
    async function LoadRequests(){
      // new taks
      if(page === 0) {
        const response = await api.get('/tasks/new');
        setTaskListNew(response.data);
      }
      // preparing tasks
      if(page === 1) {
        const response = await api.get('/tasks/preparing');
        setTaskListPreparing(response.data);
        console.log(response.data)
      }
      // delivery tasks
      if(page === 2) {
        const response = await api.get('/tasks/delivery');
        setTaskListDelivery(response.data);
      }      
    }
    LoadRequests()
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
      </div>
    </div>
  )
}
