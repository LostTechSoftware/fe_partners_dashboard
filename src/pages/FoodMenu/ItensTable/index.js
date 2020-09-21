import React  from 'react';
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
            <>
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                <p> {row.name} </p>
              </TableCell>
              
              <TableCell align='right'>
                <p className='price'> € {row.price},00 </p>
              </TableCell>
              
              { deviceWidth > 600 ?
                <TableCell align='right' className=''>
                  <SellingStateControllerButton
                    sellingState={row.sellingState}
                  /> 
                </TableCell>
                : <> </>
              }
            </TableRow>
            { deviceWidth <= 600 ?
              <TableRow className='sellingStateRow'>
                <SellingStateControllerButton
                  sellingState={row.sellingState}
                />
              </TableRow>
              : <> </>
            }
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
