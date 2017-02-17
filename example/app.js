import React from 'react';
import ReactDOM from 'react-dom';
import ReactZoomy from '../src/react-zoomy.js';

ReactDOM.render(
  <ReactZoomy
    imageUrl={'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?dpr=2&auto=format&fit=crop&w=767&h=1023&q=80&cs=tinysrgb&crop='}
    renderThumbnail={({ showImage }) => <button onClick={showImage}>Show Image</button>}
    scale={[1.1, 1.1]}
    imageProps={{
      style: {
        width: '100vw',
        height: 'auto'
      }
    }}
  />,
  document.querySelector('#main'));
