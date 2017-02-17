# react-zoomy

[Demo](https://chuson1996.github.io/react-zoomy/)

Peer dependencies: `react-motion` and `styled-components`. Yep, I know, that means you have to install them.

Install `npm install --save react-zoomy`

### Props:

**1. imageUrl**: String (required)

Url of the image

**2. renderThumbnail**: Function (required). `({ showImage }) => React Element`

Call `showImage()` to display to image

Example:
```js
import ReactZoomy from 'react-zoomy';

<ReactZoomy
    imageUrl={'https://images.unsplash.com/photo-1441986300917-64674bd600d8?dpr=2&auto=format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop='}
    renderThumbnail={({ showImage }) =>
        <button onClick={showImage}>Show Image</button>
    }
```

**3. scale**: [scaleX: Number, scaleY: Number] (optional). Default [1, 1]

To scale the image.

**4. renderCursor**: Function (optional). 
`({ style, isImageShowed }) => React Element`

Just in case you want to have a custom cursor when moving over the picture. Apply `style` prop to your react element. `isImageShowed` prop indicates when the image is displayed or not.

**5. renderLoadingElement**: Function (optional). 
`({ isImageShowed, isImageLoaded, done }) => React Element`

This is optional. If you wish to have something before sliding the image in (or simply to deplay it), you would need to declare this prop. `isImageShowed` and `isImageLoaded` is pretty declarative themselves. Call `done()` to start sliding the image in.

**6. imageContainerProps**: Object (optional)

Props passed down to the container of the image

**7. imageProps**: Object (optional)

Props passed down to the image
