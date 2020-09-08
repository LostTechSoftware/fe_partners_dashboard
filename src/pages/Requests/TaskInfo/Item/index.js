import React from 'react';
import './styles.css';

export default function Item() {
  return (
    <div className='item'>
      <div className='content' >
        <img
          src='https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/132842.jpg?output-format=auto&output-quality=auto'
          alt='fruity pancakes'
        />

        <section className='itemTitle' >
          <p>fruity pancakes </p>
        </section>

        {/* responsivity build with full 'space-between' justify */}
        <section className='itemInfo' >
          {/* Amount */}
          <p>x2</p>
          <section className='moreInfo' >
            <p> without syrup </p>
            <p> €18,50 </p>
          </section>
        </section>
      </div>

      <div className='underline' />
    </div>
  )
}
