import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import Sound from 'react-sound';
import { toast } from 'react-toastify';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab,
  Dialog,
  Slide,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';

import api from '../../services/api';
import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css'
import channel from '../../constants/pusher';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Requests() {
  const deviceWidth = window.innerWidth;
  const [ page, setPage ] = useState(0);
  const [ openedTaskId, setOpenedTaskId ] = useState(0);
  const [ openTaskInfoModal, setOpenTaskInfoModal ] = useState(false);
  
  const [taskListPreparing, setTaskListPreparing] = useState([]);
  const [taskListNew, setTaskListNew] = useState([]);
  const [taskListDelivery, setTaskListDelivery] = useState([]);
     
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

  async function loadNewRequest(){
    const response = await api.get('/tasks/new')

    setTaskListNew(response.data)
    console.log(response.data)
    console.log('check timing:');
    console.log(new Date(Date.now()))
    // const timing = axios.get('https://backendfood.link/');
    //não autorizado
    console.log('TIME WHEN FINISHED REQUEST:')
    console.log(new Date(Date.now()))
    // console.log('TIME RETURNED BY REQUEST:')
    // console.log(timing.data)
  }
  
  useEffect(() => {
    async function SocketFunction() {
      const _id = sessionStorage.getItem('_id')
      const name = sessionStorage.getItem('restaurantName')

      const socket = socketio('https://backendfood.link', {
        query: {
          user: _id,
          username: name,
          restaurant:true
       }
      })

      socket.on('new_order', loadNewRequest)
       socket.on('cancelattion_status',  () => {
         loadRequests()
         toast.warning('Um pedido foi cancelado!')
      });

       channel.bind('new_order', loadNewRequest);
       channel.bind('cancelattion_status',  () => {
         loadRequests()
         toast.warning('Um pedido foi cancelado!')
      });
    }
    SocketFunction()
  }, []);

  useEffect(() => {
    loadRequests()
  }, [page])

  return(
    <div className='page requests'>
    <Sound 
      url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3" 
      loop={true} 
      autoLoad={true}
      volume={100} 
      playFromPosition={1000}
      playStatus={Sound.status.Paused}
    />
    {taskListNew.length
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
              <TasksFilter
                openedTaskId={openedTaskId}
                setOpenedTaskId={setOpenedTaskId}
                setOpenTaskInfoModal={setOpenTaskInfoModal}
              >
                {taskListNew}
              </TasksFilter>
            </div>
            <div className='subPage' value={page} index={1}>
              <TasksFilter
                openedTaskId={openedTaskId}
                setOpenedTaskId={setOpenedTaskId}
                setOpenTaskInfoModal={setOpenTaskInfoModal}
              >
                {taskListPreparing}
              </TasksFilter>
            </div>
            <div className='subPage' value={page} index={2}>
              <TasksFilter
                openedTaskId={openedTaskId}
                setOpenedTaskId={setOpenedTaskId}
                setOpenTaskInfoModal={setOpenTaskInfoModal}
              >
                {taskListDelivery}
              </TasksFilter>
            </div>
          </SwipeableViews>
        </section>

        { deviceWidth > 770 ?
          <TaskInfo
            loadRequests={loadRequests}
            requestId={openedTaskId}
            setOpenTaskInfoModal={setOpenTaskInfoModal}
          />
          :
          <Dialog
            fullScreen
            className='page requests requestsModal'
            open={openTaskInfoModal}
            onClose={() => setOpenTaskInfoModal(false)}
            TransitionComponent={Transition}
          >
            <IconButton className='closeButton' onClick={() => {
              setOpenTaskInfoModal(false);
              setOpenedTaskId(null);
            }}>
              <CloseIcon />
            </IconButton>
            
            <TaskInfo
              loadRequests={loadRequests}
              requestId={openedTaskId}
              setOpenTaskInfoModal={setOpenTaskInfoModal}
            />
          </Dialog>
        }
      </div>
    </div>
  )
}
