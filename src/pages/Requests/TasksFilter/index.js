import React from 'react';
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import TaskIcon from './TaskIcon';
import './styles.css';

export default function TasksFilter({ openedTask, setOpenedTask }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="tasks"
        name="tasks1"
        value={openedTask}
        onChange={ event => setOpenedTask(event.target.value)}
      >
        <FormControlLabel
          value='task1'
          control={<Radio icon={<TaskIcon/>} checkedIcon={<TaskIcon checked/>} />}
        />

        <FormControlLabel
          value='task2'
          control={<Radio icon={<TaskIcon/>} checkedIcon={<TaskIcon checked/>} />}
        />

        <FormControlLabel
          value='task3'
          control={<Radio icon={<TaskIcon/>} checkedIcon={<TaskIcon checked/>} />}
        />
      </RadioGroup>
    </FormControl>
  );
}
