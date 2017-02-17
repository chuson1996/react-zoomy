import React from 'react';
import ReactDOM from 'react-dom';
import ReactZoomy from '../src/react-zoomy.js';

ReactDOM.render(
  <ReactZoomy
    imageUrl={'http://bergluft.hervis.at/chapter-2/images/chapter2-pano@3.jpg'}
    renderThumbnail={({ showImage }) => <button onClick={showImage}>Show Image</button>}
    scale={[1.1, 1.1]}
    imageProps={{
      style: {
        width: 'auto',
        height: `100vh`
      }
    }}
  />,
  document.querySelector('#main'));
