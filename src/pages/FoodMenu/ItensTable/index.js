import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from '@material-ui/core';

import api from '../../../services/api';
import SellingStateControllerButton from './SellingStateControllerButton';
import './styles.css';

export default function ItensTable({ title, id }) {
  const deviceWidth = window.innerWidth;
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    async function getProducts(){
      try {
        const response = await api.get(`/row/${id}`)
        setProducts(response.data.products);
      } catch(error) {
        console.log(error)
      }
    }
    getProducts();
  }, [id])

  return (
    <TableContainer className='itensTable' component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <h2> {title} </h2>
        </TableHead>

        <TableBody>
          {products.map(product => (
            <React.Fragment key={Math.random()} >
            <TableRow key={ product._id} >
              <TableCell component='th' scope='row'>
                <p> { product.title } </p>
              </TableCell>
              
              <TableCell align='right'>
                <p className='price'>
                {product.price.toLocaleString(
                  'pt-br',
                  {style:'currency', currency:'brl'}
                )}
                </p>
              </TableCell>
              
              { deviceWidth > 600 ?
                <TableCell align='right' className=''>
                  <SellingStateControllerButton
                    sellingState={ product.paused }
                    productId={ product._id }
                  /> 
                </TableCell>
                : <> </>
              }
            </TableRow>
            { deviceWidth <= 600 ?
              <TableRow className='sellingStateRow'>
                <SellingStateControllerButton
                  sellingState={ product.paused }
                  productId={ product._id }
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
