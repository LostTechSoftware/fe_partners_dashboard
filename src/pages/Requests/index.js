import React, { useState } from 'react';
import SwipeableViews from "react-swipeable-views";
import { AppBar , Tabs, Tab, List } from '@material-ui/core';

import MainMenu from '../../Components/MainMenu';
import TaskInfo from './TaskInfo';

import './styles.css';

export default function Requests() {
  const [ value, setValue ] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className='page requests'>
      <MainMenu currentPage='requests' />

      <div className='pageContent'>
        <section className='taskList'>
          <header>
            <h1>Task list</h1>
          </header>

          <AppBar id='navHeadText' position='static' color='default'>
            <Tabs
              value={value}
              onChange={ (event, newValue) => setValue(newValue) }
            >
              <Tab label='New' />
              <Tab label='Preparing' />
              <Tab label='Delivery' />
            </Tabs>
          </AppBar>


          <SwipeableViews
            id='swipeableBox'
            index={value}
            onChangeIndex={ index => setValue(index) }
          >
            <div className='subPage' value={value} index={0}>
              page1
            </div>
            <div className='subPage' value={value} index={1}>
              page2
            </div>
            <div className='subPage' value={value} index={2}>
              page3
            </div>
          </SwipeableViews>
        </section>

        <TaskInfo />

      </div>
    </div>
  )
}
