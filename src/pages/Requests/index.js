import React, { useState } from 'react';
import SwipeableViews from "react-swipeable-views";
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

import MainMenu from '../../Components/MainMenu';
import TasksFilter from './TasksFilter';
import TaskInfo from './TaskInfo';

import './styles.css';
import './responsivity.css';

export default function Requests() {
  const [ page, setPage ] = useState(0);
  const [ openedTask, setOpenedTask ] = useState(0);

  return(
    <div className='page requests'>
      <MainMenu currentPage='requests' />

      <div className='pageContent'>
        <section className='taskList'>
          <header>
            <h1 style={{fontSize:'30px'}}>Task list</h1>
          </header>

          <AppBar id='navHeadText' position='static' color='default'>
            <Tabs
              value={page}
              onChange={ (event, newValue) => setPage(newValue) }
            >
              <Tab label='New' />
              <Tab label='Preparing' />
              <Tab label='Delivery' />
            </Tabs>
          </AppBar>

          <SwipeableViews
            id='swipeableBox'
            index={page}
            onChangeIndex={ index => setPage(index) }
          >
            <div className='subPage' value={page} index={0}>
              <TasksFilter openedTask={openedTask} setOpenedTask={setOpenedTask} />
            </div>
            <div className='subPage' value={page} index={1}>
              <TasksFilter openedTask={openedTask} setOpenedTask={setOpenedTask} />
            </div>
            <div className='subPage' value={page} index={2}>
              <TasksFilter openedTask={openedTask} setOpenedTask={setOpenedTask} />
            </div>
          </SwipeableViews>
        </section>

        <TaskInfo />

      </div>
    </div>
  )
}
