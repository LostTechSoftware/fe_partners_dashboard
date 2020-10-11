import React from 'react';
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from '@material-ui/core';

import SellingStateControllerButton from './SellingStateControllerButton';
import './styles.css';

export default function ItensTable({ title, rowsProps }) {
  const deviceWidth = window.innerWidth;

  return (
    <TableContainer className='itensTable' component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <h2> {title} </h2>
        </TableHead>

        <TableBody>
          {rowsProps.map(row => (
            <React.Fragment key={Math.random()} >
            <TableRow key={row}>
              <TableCell component='th' scope='row'>
                <p> {row.title ? row.title : row} </p>
              </TableCell>
              
              <TableCell align='right'>
                <p className='price'> € {row.price ? row.price : 10},00 </p>
              </TableCell>
              
              { deviceWidth > 600 ?
                <TableCell align='right' className=''>
                  <SellingStateControllerButton
                    sellingState={true}
                  /> 
                </TableCell>
                : <> </>
              }
            </TableRow>
            { deviceWidth <= 600 ?
              <TableRow className='sellingStateRow'>
                <SellingStateControllerButton
                  sellingState={true}
                />
              </TableRow>
              : <> </>
            }
            </ React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
