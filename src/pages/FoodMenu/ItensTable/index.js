import React  from 'react';
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  IconButton,

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
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Mini snacks</h2></TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <p> {row.name} </p>
              </TableCell>
              <TableCell align="right"><p> {row.price} </p></TableCell>
              <TableCell align="right">
                {row.sellingState ?
                  <p> selling</p>
                  :
                  <p> notSelling </p>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}