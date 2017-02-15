import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import CssToMatrix from 'css-to-matrix';

const ImageContainer = styled.div`
  position: fixed;
  z-index: 98;

  display: flex;
  justify-content: center;
  align-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 999;
  opacity: 1;
  pointer-events: none;

  align-content: center;
  justify-content: center;
`;

export default class ZoomableImage extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    renderThumbnail: PropTypes.func.isRequired,
    renderCursor: PropTypes.func,
    renderLoadingElement: PropTypes.func,
    imageContainerProps: PropTypes.object,
    imageProps: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      pictureLoaded: false,
      showImage: false,
      loading: false,
      cursorPosition: {
        top: 0,
        left: 0
      },
      imageMove: {
        x: 0,
        y: 0
      },
      pictureHeight: null
    };
  }

  show = ({ clientX, clientY }) => {
    // Disable scrolling
    document.querySelector('html').style.overflowY = 'hidden';

    this.setState({
      showImage: true,
      loading: true,
      cursorPosition: {
        top: clientY,
        left: clientX
      }
    });

    if (!this.props.renderLoadingElement) this.slideImageIn();
  };

  slideImageIn = () => {
    this.setState({
      loading: false
    });
  };

  hide = () => {
    document.querySelector('html').style.overflowY = 'initial';
    this.setState({
      showImage: false
    });
  };

  onMouseMoveOnImageContainer = ({ clientX, clientY}) => {
    this.setState({
      cursorPosition: {
        top: clientY,
        left: clientX
      }
    });
  };

  onMouseMove = ({ clientX, clientY }) => {
    const {
      innerWidth: screenWidth,
      innerHeight: screenHeight
    } = window;

    const leftPercent = (clientX - screenWidth / 2) / screenWidth * 100;
    const topPercent = (clientY - screenHeight / 2) / screenHeight * 100;
    // console.log(topPercent);
    this.setState({
      imageMove: {
        x: spring(leftPercent),
        y: spring(topPercent)
      }
    });
  };

  onLoad = (e) => {
    this.setState({
      pictureLoaded: true,
      pictureHeight: e.target.clientHeight / window.innerHeight * window.innerWidth
    });
  };

  render() {
    const {
      imageUrl,
      renderThumbnail,
      renderCursor,
      renderLoadingElement,
      imageContainerProps,
      imageProps
    } = this.props;
    const {
      pictureLoaded,
      showImage,
      loading,
      imageMove,
      pictureHeight,
      cursorPosition,
    } = this.state;

    const scale = 1.5;

    const goSlow = (val) => spring(val, {
      stiffness: 126,
      damping: 26
    });

    return (
      <div>
        <Motion style={{
            x: (showImage && pictureLoaded && !loading) ? goSlow(0) : goSlow(-100),
            opacity: showImage ? goSlow(1) : goSlow(0)
          }}>
          {({ x, opacity }) =>
            <ImageContainer
              {...imageContainerProps}
              onMouseMove={this.onMouseMoveOnImageContainer}
              style={{
                opacity,
                cursor: (renderCursor && showImage) ? 'none' : 'pointer',
                pointerEvents: showImage ? 'auto' : 'none',
                ...(imageContainerProps && imageContainerProps.style)
              }}
            >
              {renderCursor && renderCursor({
                style: {
                  top: cursorPosition.top,
                  left: cursorPosition.left
                },
                show: showImage
              })}

              {renderLoadingElement && renderLoadingElement({
                isImageShowed: showImage,
                isImageLoaded: pictureLoaded,
                done: this.slideImageIn
              })}

              <Motion style={imageMove}>
                {(imageMove) =>
                  <img
                    {...imageProps}
                    onMouseMove={this.onMouseMove}
                    width={'100%'}
                    onClick={this.hide}
                    onLoad={this.onLoad}
                    style={{
                      transform: new CssToMatrix()
                        .scale(scale, scale)
                        .translate(
                          x * scale / 100 * window.innerWidth - imageMove.x / 100 * (scale - 1) * window.innerWidth,
                          - (pictureHeight - window.innerHeight) / 2 - imageMove.y / 100 * (pictureHeight * scale - window.innerHeight))
                        .getMatrixCSS(),
                      height: pictureHeight || 'auto',
                      ...(imageProps && imageProps.style)
                    }}
                    src={imageUrl}/>
                }
              </Motion>
            </ImageContainer>
          }
        </Motion>

        {renderThumbnail({ showImage: this.show })}
      </div>
    );
  }
}
