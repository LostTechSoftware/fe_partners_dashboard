import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Button,
} from '@material-ui/core';

import { EditRounded } from '@material-ui/icons';

import api from '../../../services/api';
import SellingStateControllerButton from './SellingStateControllerButton';
import UpdateItem from './UpdateItem';
import './styles.css';

export default function ItensTable({ title, id, products = [] }) {
  const deviceWidth = window.innerWidth;
  const [ product, setProducts ] = useState(products)
  const [ openUpdateModal, setOpenUpdateModal ] = useState(false);
  const [ currentEditingProduct, setCurrentEditingProduct] = useState('');
  const [loading, setLoading] = useState(false)

  function productToUpdate({ _id, title, price, description, avatar }) {
    setCurrentEditingProduct({
      _id,
      title,
      price,
      description,
      avatar,
    });
    setOpenUpdateModal(true);
  }
  
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true)
        if (id === 1) {
          setLoading(false)
          return;
        }

        const response = await api.get(`/row/${id}`)
        setProducts(response.data.products);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getProducts();
  }, [id])
  
  return (
    <>
    <TableContainer className='itensTable' component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <h2> {title} </h2>
        </TableHead>

        <TableBody>
        {!!loading === false
          && (product.map(product => (
            <React.Fragment key={Math.random()} >
            <TableRow key={ product._id } >
              <TableCell
                className='itemTitle'
                component='th'
                scope='row'
              >
                <Button onClick={ () => productToUpdate(product) } >
                  <EditRounded />
                  <p> { product.title } </p>
                </Button>
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
                : null
              }
            </TableRow>

            { deviceWidth <= 600 ?
              <TableRow className='sellingStateRow'>
                <SellingStateControllerButton
                  sellingState={ product.paused }
                  productId={ product._id }
                />
              </TableRow>
              : null
            }
            </ React.Fragment>
          )))
        }        
      </TableBody>
      </Table>
    </TableContainer>

    <UpdateItem
      product={currentEditingProduct}
      openModal={openUpdateModal}
      closeModal={() => setOpenUpdateModal(false)}
    />
    </>
  );
}
