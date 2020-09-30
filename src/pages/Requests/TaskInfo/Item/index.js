import React from 'react';
import './styles.css';

export default function Item({title, price, description, quantity, avatar}) {
  return (
    <div className='item'>
      <div className='content' >

        <section className='itemTitle' >
          {avatar ?
            <img
              className='thumb'
              src={avatar}
              alt='fruity pancakes'
            />
          : null
          }
          <p>{title}</p>
        </section>

        {/* responsivity build with full 'space-between' justify */}
        <section className='itemInfo' >
          <p>{quantity}x</p>
          <section className='moreInfo' >
            <p className='observations'>{description}</p>
            <p className='price'>
              {(price * quantity).toLocaleString(
                'pt-br',
                {style:'currency', currency:'brl'}
              )}
            </p>
          </section>
        </section>
      </div>

      <div className='underlineBox'>
        <div className='underline' />
      </div>
    </div>
  )
}
