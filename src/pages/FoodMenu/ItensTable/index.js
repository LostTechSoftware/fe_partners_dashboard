import React  from 'react';
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  
  Button,
  Paper,
} from '@material-ui/core';

import {
  PlayCircleFilledRounded,
  PauseCircleFilledRounded,
} from '@material-ui/icons';

import './styles.css';

function createData(name, price, sellingState) {
  return { name, price, sellingState };
}

const rows = [
  createData('Mini bacon', 8, true),
  createData('Mini burg', 6, true),
  createData('Mini calabresa', 8, false),
  createData('Mini frango', 8, false),
  createData('Mini salada', 6, true),
];

export default function ItensTable() {
  const deviceWidth = window.innerWidth;
  return (
    <TableContainer className='itensTable' component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <h2>Mini Snacks</h2>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                <p> {row.name} </p>
              </TableCell>
              
              <TableCell align='right'>
                <p className='price'> € {row.price},00 </p>
              </TableCell>
              
              <TableCell align='right' className=''>
                {deviceWidth >= 600 ?
                  row.sellingState ?
                    <Button onClick={() => alert(deviceWidth)}> 
                      <PauseCircleFilledRounded />
                      <p>Pausar vendas</p>
                    </Button>
                    :
                    <Button> 
                      <PlayCircleFilledRounded />
                      <p>Retomar vendas</p>
                    </Button>
                  :
                  <p>bla</p>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
