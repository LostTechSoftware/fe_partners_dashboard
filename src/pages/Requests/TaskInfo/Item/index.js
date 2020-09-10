import React from 'react';
import './styles.css';

export default function Item() {
  return (
    <div className='item'>
      <div className='content' >

        <section className='itemTitle' >
          <img
            className='thumb'
            src='https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/132842.jpg?output-format=auto&output-quality=auto'
            alt='fruity pancakes'
          />
          <p>fruity pancakes </p>
        </section>

        {/* responsivity build with full 'space-between' justify */}
        <section className='itemInfo' >
          {/* Amount */}
          <p>x2</p>
          <section className='moreInfo' >
            <p> without syrup without syrup without syrup without syrup without syrup </p>
            <p className='price'> €18,50 </p>
          </section>
        </section>
      </div>

      <div className='underlineBox'>
        <div className='underline' />
      </div>
    </div>
  )
}
