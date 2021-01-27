import React from 'react';
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import TaskIcon from './TaskIcon';
import './styles.css';
import moment from 'moment'
import 'moment/locale/pt-br'

export default function TasksFilter({
  children = [],
  openedTaskId,
  setOpenedTaskId,
  setOpenTaskInfoModal,
}) {
  return (
    <FormControl className='TasksFilter' component="fieldset">
      <RadioGroup
        aria-label="tasks"
        name="tasks1"
        value={openedTaskId}
        onChange={event => {
          console.log(event.target.value)
          setOpenedTaskId(event.target.value);
          if(event.target.value)
            setOpenTaskInfoModal(true);
        }}
      >
        {children.map(request => (
          <FormControlLabel
            key={request._id}
            value={request._id} 
            control={<Radio
              centerRipple={false}
              icon={<TaskIcon
                key={request._id}
                name={request.user.name}
                taskId={request.token}
                price={request.price}
                createdAt={moment(request.createdAt).format('LT')}
              />}
              checkedIcon={<TaskIcon
                name={request.user.name}
                taskId={request.token}
                price={request.price}
                checkedStatus='checked'
                createdAt={moment(request.createdAt).format('LT')}
              />}
            />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
