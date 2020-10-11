import React from 'react';
import { 
  FiberManualRecordRounded,
  AddRounded,
} from '@material-ui/icons';

import './styles.css';

export default function Item({
  title,
  price,
  quantity,
  description,
  additionals,
  avatar,
}) {
  return (
    <div className='itemBox'>
      <div className='item' >
        {avatar ?
          <img
            className='thumb'
            src={avatar}
            alt='fruity pancakes'
          /> : null
        }

        <section className='itemInfo' >
          <p className='title' >{title}</p>

          <div className='moreInfo'>
            <p>{quantity}x</p>
            <p className='price'>
              {(price * quantity).toLocaleString(
                'pt-br',
                {style:'currency', currency:'brl'}
              )}
            </p>
          </div>
        </section>
      </div>

      <section className='observations'>
        <div className='description'>
          <FiberManualRecordRounded />
          <p> {description} descrição aq </p>
        </div>
        
        {additionals.map( additional => (
          <>
          <div className='additional' key={additional.id}>
            <AddRounded />
            <p> {additional.title} </p>
            <p className='price'>
              {additional.price.toLocaleString(
                'pt-br',
                {style: 'currency', currency: 'brl'}
              )}
            </p>
          </div>
          </>
        ))}
      </section>

      <div className='underline' />
    </div>
  )
}
