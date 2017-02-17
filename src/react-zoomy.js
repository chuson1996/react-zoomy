// export default  4;
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import CssToMatrix from 'css-to-matrix';

const ImageContainer = styled.div`
  position: fixed;
  z-index: 98;

  // display: flex;
  // justify-content: center;
  // align-content: center;
  text-align: center;

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

export default class ReactZoomy extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    renderThumbnail: PropTypes.func.isRequired,
    renderCursor: PropTypes.func,
    renderLoadingElement: PropTypes.func,
    imageContainerProps: PropTypes.object,
    imageProps: PropTypes.object,
    scale: PropTypes.array
  };

  static defaultProps = {
    scale: [1, 1]
  };

  constructor(props) {
    super(props);
    this.state = {
      pictureLoaded: false,
      isImageShowed: false,
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
      isImageShowed: true,
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
      isImageShowed: false,
      imageMove: {
        x: spring(0),
        y: spring(0)
      }
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

  onLoad = ({ target }) => {
    this.setState({
      pictureLoaded: true,
      pictureHeight: target.clientHeight,
      pictureWidth: target.clientWidth
    });
  };

  render() {
    const {
      imageUrl,
      renderThumbnail,
      renderCursor,
      renderLoadingElement,
      imageContainerProps,
      imageProps,
      scale
    } = this.props;
    const {
      pictureLoaded,
      isImageShowed,
      loading,
      imageMove,
      pictureHeight,
      pictureWidth,
      cursorPosition,
    } = this.state;

    const [scaleX, scaleY] = scale;

    const goSlow = (val) => spring(val, {
      stiffness: 126,
      damping: 26
    });

    return (
      <div>
        <Motion style={{
            x: (isImageShowed && pictureLoaded && !loading) ? goSlow(0) : goSlow(-100),
            opacity: isImageShowed ? goSlow(1) : goSlow(0)
          }}>
          {({ x, opacity }) =>
            <ImageContainer
              {...imageContainerProps}
              onMouseMove={this.onMouseMoveOnImageContainer}
              style={{
                opacity,
                cursor: (renderCursor && isImageShowed) ? 'none' : 'pointer',
                pointerEvents: isImageShowed ? 'auto' : 'none',
                ...(imageContainerProps && imageContainerProps.style)
              }}
            >
              {renderCursor && renderCursor({
                style: {
                  top: cursorPosition.top,
                  left: cursorPosition.left
                },
                isImageShowed: isImageShowed
              })}

              {renderLoadingElement && renderLoadingElement({
                isImageShowed: isImageShowed,
                isImageLoaded: pictureLoaded,
                done: this.slideImageIn
              })}

              <Motion style={imageMove}>
                {(imageMove) =>
                  <img
                    {...imageProps}
                    onMouseMove={this.onMouseMove}
                    onClick={this.hide}
                    onLoad={this.onLoad}
                    style={{
                      transform: new CssToMatrix()
                        .scale(scaleX, scaleY)
                        .translate(
                          x * scaleX / 100 * pictureWidth - imageMove.x / 100 * (pictureWidth * scaleX - window.innerWidth),
                          // 0
                          - (pictureHeight - window.innerHeight) / 2 - imageMove.y / 100 * (pictureHeight * scaleY - window.innerHeight)
                        )
                        .getMatrixCSS(),
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
