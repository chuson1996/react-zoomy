(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"), require("react-motion"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components", "react-motion"], factory);
	else if(typeof exports === 'object')
		exports["ReactZoomImage"] = factory(require("react"), require("styled-components"), require("react-motion"));
	else
		root["ReactZoomImage"] = factory(root["React"], root["styled-components"], root["react-motion"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  z-index: 98;\n\n  // display: flex;\n  // justify-content: center;\n  // align-content: center;\n  text-align: center;\n\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  z-index: 999;\n  opacity: 1;\n  pointer-events: none;\n\n  align-content: center;\n  justify-content: center;\n'], ['\n  position: fixed;\n  z-index: 98;\n\n  // display: flex;\n  // justify-content: center;\n  // align-content: center;\n  text-align: center;\n\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  z-index: 999;\n  opacity: 1;\n  pointer-events: none;\n\n  align-content: center;\n  justify-content: center;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(2);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactMotion = __webpack_require__(3);
	
	var _cssToMatrix = __webpack_require__(4);
	
	var _cssToMatrix2 = _interopRequireDefault(_cssToMatrix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // export default  4;
	
	
	var ImageContainer = _styledComponents2.default.div(_templateObject);
	
	var ReactZoomy = function (_Component) {
	  _inherits(ReactZoomy, _Component);
	
	  function ReactZoomy(props) {
	    _classCallCheck(this, ReactZoomy);
	
	    var _this = _possibleConstructorReturn(this, (ReactZoomy.__proto__ || Object.getPrototypeOf(ReactZoomy)).call(this, props));
	
	    _this.show = function (_ref) {
	      var clientX = _ref.clientX,
	          clientY = _ref.clientY;
	
	      // Disable scrolling
	      document.querySelector('html').style.overflowY = 'hidden';
	
	      _this.setState({
	        isImageShowed: true,
	        loading: true,
	        cursorPosition: {
	          top: clientY,
	          left: clientX
	        }
	      });
	
	      if (!_this.props.renderLoadingElement) _this.slideImageIn();
	    };
	
	    _this.slideImageIn = function () {
	      _this.setState({
	        loading: false
	      });
	    };
	
	    _this.hide = function () {
	      document.querySelector('html').style.overflowY = 'initial';
	      _this.setState({
	        isImageShowed: false,
	        imageMove: {
	          x: (0, _reactMotion.spring)(0),
	          y: (0, _reactMotion.spring)(0)
	        }
	      });
	    };
	
	    _this.onMouseMoveOnImageContainer = function (_ref2) {
	      var clientX = _ref2.clientX,
	          clientY = _ref2.clientY;
	
	      _this.setState({
	        cursorPosition: {
	          top: clientY,
	          left: clientX
	        }
	      });
	    };
	
	    _this.onMouseMove = function (_ref3) {
	      var clientX = _ref3.clientX,
	          clientY = _ref3.clientY;
	      var _window = window,
	          screenWidth = _window.innerWidth,
	          screenHeight = _window.innerHeight;
	
	
	      var leftPercent = (clientX - screenWidth / 2) / screenWidth * 100;
	      var topPercent = (clientY - screenHeight / 2) / screenHeight * 100;
	      // console.log(topPercent);
	      _this.setState({
	        imageMove: {
	          x: (0, _reactMotion.spring)(leftPercent),
	          y: (0, _reactMotion.spring)(topPercent)
	        }
	      });
	    };
	
	    _this.onLoad = function (_ref4) {
	      var target = _ref4.target;
	
	      _this.setState({
	        pictureLoaded: true,
	        pictureHeight: target.clientHeight,
	        pictureWidth: target.clientWidth
	      });
	    };
	
	    _this.state = {
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
	    return _this;
	  }
	
	  _createClass(ReactZoomy, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          imageUrl = _props.imageUrl,
	          renderThumbnail = _props.renderThumbnail,
	          renderCursor = _props.renderCursor,
	          renderLoadingElement = _props.renderLoadingElement,
	          imageContainerProps = _props.imageContainerProps,
	          imageProps = _props.imageProps,
	          scale = _props.scale;
	      var _state = this.state,
	          pictureLoaded = _state.pictureLoaded,
	          isImageShowed = _state.isImageShowed,
	          loading = _state.loading,
	          imageMove = _state.imageMove,
	          pictureHeight = _state.pictureHeight,
	          pictureWidth = _state.pictureWidth,
	          cursorPosition = _state.cursorPosition;
	
	      var _scale = _slicedToArray(scale, 2),
	          scaleX = _scale[0],
	          scaleY = _scale[1];
	
	      var goSlow = function goSlow(val) {
	        return (0, _reactMotion.spring)(val, {
	          stiffness: 126,
	          damping: 26
	        });
	      };
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: {
	              x: isImageShowed && pictureLoaded && !loading ? goSlow(0) : goSlow(-100),
	              opacity: isImageShowed ? goSlow(1) : goSlow(0)
	            } },
	          function (_ref5) {
	            var x = _ref5.x,
	                opacity = _ref5.opacity;
	            return _react2.default.createElement(
	              ImageContainer,
	              _extends({}, imageContainerProps, {
	                onMouseMove: _this2.onMouseMoveOnImageContainer,
	                style: _extends({
	                  opacity: opacity,
	                  cursor: renderCursor && isImageShowed ? 'none' : 'pointer',
	                  pointerEvents: isImageShowed ? 'auto' : 'none'
	                }, imageContainerProps && imageContainerProps.style)
	              }),
	              renderCursor && renderCursor({
	                style: {
	                  top: cursorPosition.top,
	                  left: cursorPosition.left
	                },
	                isImageShowed: isImageShowed
	              }),
	              renderLoadingElement && renderLoadingElement({
	                isImageShowed: isImageShowed,
	                isImageLoaded: pictureLoaded,
	                done: _this2.slideImageIn
	              }),
	              _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: imageMove },
	                function (imageMove) {
	                  return _react2.default.createElement('img', _extends({}, imageProps, {
	                    onMouseMove: _this2.onMouseMove,
	                    onClick: _this2.hide,
	                    onLoad: _this2.onLoad,
	                    style: _extends({
	                      transform: new _cssToMatrix2.default().scale(scaleX, scaleY).translate(x * scaleX / 100 * pictureWidth - imageMove.x / 100 * (pictureWidth * scaleX - window.innerWidth),
	                      // 0
	                      -(pictureHeight - window.innerHeight) / 2 - imageMove.y / 100 * (pictureHeight * scaleY - window.innerHeight)).getMatrixCSS()
	                    }, imageProps && imageProps.style),
	                    src: imageUrl }));
	                }
	              )
	            );
	          }
	        ),
	        renderThumbnail({ showImage: this.show })
	      );
	    }
	  }]);
	
	  return ReactZoomy;
	}(_react.Component);
	
	ReactZoomy.propTypes = {
	  imageUrl: _react.PropTypes.string.isRequired,
	  renderThumbnail: _react.PropTypes.func.isRequired,
	  renderCursor: _react.PropTypes.func,
	  renderLoadingElement: _react.PropTypes.func,
	  imageContainerProps: _react.PropTypes.object,
	  imageProps: _react.PropTypes.object,
	  scale: _react.PropTypes.array
	};
	ReactZoomy.defaultProps = {
	  scale: [1, 1]
	};
	exports.default = ReactZoomy;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory(__webpack_require__(5), __webpack_require__(6), __webpack_require__(7));
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root['css-to-matrix'] = factory(root['transform-to-matrix'], root['matrix-utilities'], root.umodel);
	  }
	})(undefined, function (transformToMatrix, matrixUtilities, umodel) {
	  var _ = {
	
	    // convert strings like "55deg" or ".75rad" to floats (in radians)
	    rad: function rad(string) {
	
	      if (typeof string === 'string') {
	
	        var angle = parseFloat(string, 10),
	            isDegrees = string.indexOf('deg') > -1;
	
	        // convert deg -> rad?
	        if (isDegrees) angle *= Math.PI / 180;
	
	        return angle;
	      }
	
	      return string;
	    },
	
	    // shallow object extend
	    extend: function extend(a, b) {
	
	      for (var key in b) {
	        a[key] = b[key];
	      }
	
	      return a;
	    },
	
	    // make functions return `this`, for easy chaining
	    fluent: function fluent(fn) {
	
	      return function () {
	        fn.apply(this, arguments);
	        return this;
	      };
	    },
	
	    isNumber: function isNumber(a) {
	      return typeof a === 'number';
	    }
	
	  };
	
	  function CssToMatrix(data) {
	
	    // default options
	    this.model = new umodel({
	      matrix: new matrixUtilities.Identity(),
	      transformations: {
	        perspective: new matrixUtilities.Identity(),
	        rotate: new matrixUtilities.Identity(),
	        scale: new matrixUtilities.Identity(),
	        skew: new matrixUtilities.Identity(),
	        translate: new matrixUtilities.Identity()
	      }
	    });
	
	    // set data?
	    if (data) {
	      this.matrix(data);
	    }
	  }
	
	  _.extend(CssToMatrix.prototype, {
	
	    // set matrix in model
	    matrix: function matrix(data) {
	
	      ////DEV
	      if (data.length == null) throw new TypeError('expected parameter `data` to be an Array, but was given a ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
	
	      var rows = data.length,
	          columns = rows > 0 ? rows : 0;
	
	      if (rows !== 4 || columns !== 4) throw new Error('expected parameter `data` to be a 4x4 matrix of arrays, but was given a ' + rows + 'x' + columns + ' matrix');
	      ////END DEV
	
	      this.model.set('matrix', data);
	    },
	
	    // apply transformations as defined in the model, and get back get calculated matrix
	    getMatrix: function getMatrix() {
	
	      var matrix = this.model.get('matrix'),
	          t = this.model.get('transformations');
	
	      // perspective
	      matrix = matrixUtilities.multiply(matrix, t.perspective);
	
	      // translate
	      matrix = matrixUtilities.multiply(matrix, t.translate);
	
	      // rotate
	      matrix = matrixUtilities.multiply(matrix, t.rotate);
	
	      // skew
	      matrix = matrixUtilities.multiply(matrix, t.skew);
	
	      // scale
	      matrix = matrixUtilities.multiply(matrix, t.scale);
	
	      return matrixUtilities.flip(matrix);
	    },
	
	    // get matrix formatted as a string that can be plugged right into CSS's `transform` function 
	    getMatrixCSS: function getMatrixCSS() {
	
	      return 'matrix3d(' + this.getMatrix().reduce(function (flat, row) {
	        flat.push.apply(flat, row);
	        return flat;
	      }, []).join(',') + ')';
	    },
	
	    // transform functions
	    // 1-to-1 with their CSS equivalents
	    rotate: function rotate(a) {
	      return this.rotateZ(a);
	    },
	    rotateX: function rotateX(a) {
	      return this.rotate3d(1, 0, 0, a);
	    },
	    rotateY: function rotateY(a) {
	      return this.rotate3d(0, 1, 0, a);
	    },
	    rotateZ: function rotateZ(a) {
	      return this.rotate3d(0, 0, 1, a);
	    },
	    scale: function scale(x, y) {
	      return this.scale3d(x, y);
	    },
	    scaleX: function scaleX(x) {
	      return this.scale3d(x);
	    },
	    scaleY: function scaleY(y) {
	      return this.scale3d(null, y);
	    },
	    scaleZ: function scaleZ(z) {
	      return this.scale3d(null, null, z);
	    },
	    skewX: function skewX(x) {
	      return this.skew(x);
	    },
	    skewY: function skewY(y) {
	      return this.skew(null, y);
	    },
	    translate: function translate(x, y) {
	      return this.translate3d(x, y);
	    },
	    translateX: function translateX(x) {
	      return this.translate3d(x);
	    },
	    translateY: function translateY(y) {
	      return this.translate3d(null, y);
	    },
	    translateZ: function translateZ(z) {
	      return this.translate3d(null, null, z);
	    },
	
	    perspective: _.fluent(function (x) {
	
	      if (x == null) {
	        x = 0;
	      }
	
	      ////DEV
	      if (!_.isNumber(x)) throw new TypeError('expected parameter `x` to be a Number, but was given a ' + (typeof x === 'undefined' ? 'undefined' : _typeof(x)));
	      ////END DEV
	
	      this.model.set('transformations/perspective', transformToMatrix.perspective(x));
	    }),
	
	    rotate3d: _.fluent(function (x, y, z, a) {
	
	      if (x == null) {
	        x = 0;
	      }
	      if (y == null) {
	        y = 0;
	      }
	      if (z == null) {
	        z = 0;
	      }
	      if (a == null) {
	        a = 0;
	      }
	
	      ////DEV
	      if (!_.isNumber(x)) throw new TypeError('expected parameter `x` to be a Number, but was given a ' + (typeof x === 'undefined' ? 'undefined' : _typeof(x)));
	      if (!_.isNumber(y)) throw new TypeError('expected parameter `y` to be a Number, but was given a ' + (typeof y === 'undefined' ? 'undefined' : _typeof(y)));
	      if (!_.isNumber(z)) throw new TypeError('expected parameter `z` to be a Number, but was given a ' + (typeof z === 'undefined' ? 'undefined' : _typeof(z)));
	      ////END DEV
	
	      // if angle was passed as a string, convert it to a float first
	      this.model.set('transformations/rotate', transformToMatrix.rotate3d(x, y, z, _.rad(a)));
	    }),
	
	    scale3d: _.fluent(function (x, y, z) {
	
	      if (x == null) {
	        x = 1;
	      }
	      if (y == null) {
	        y = 1;
	      }
	      if (z == null) {
	        z = 1;
	      }
	
	      ////DEV
	      if (!_.isNumber(x)) throw new TypeError('expected parameter `x` to be a Number, but was given a ' + (typeof x === 'undefined' ? 'undefined' : _typeof(x)));
	      if (!_.isNumber(y)) throw new TypeError('expected parameter `y` to be a Number, but was given a ' + (typeof y === 'undefined' ? 'undefined' : _typeof(y)));
	      if (!_.isNumber(z)) throw new TypeError('expected parameter `z` to be a Number, but was given a ' + (typeof z === 'undefined' ? 'undefined' : _typeof(z)));
	      ////END DEV
	
	      this.model.set('transformations/scale', transformToMatrix.scale3d(x, y, z));
	    }),
	
	    skew: _.fluent(function (x, y) {
	
	      if (x == null) {
	        x = 0;
	      }
	      if (y == null) {
	        y = 0;
	      }
	
	      this.model.set('transformations/skew', matrixUtilities.to3d(transformToMatrix.skew(_.rad(x), _.rad(y))));
	    }),
	
	    translate3d: _.fluent(function (x, y, z) {
	
	      if (x == null) {
	        x = 0;
	      }
	      if (y == null) {
	        y = 0;
	      }
	      if (z == null) {
	        z = 0;
	      }
	
	      ////DEV
	      if (!_.isNumber(x)) throw new TypeError('expected parameter `x` to be a Number, but was given a ' + (typeof x === 'undefined' ? 'undefined' : _typeof(x)));
	      if (!_.isNumber(y)) throw new TypeError('expected parameter `y` to be a Number, but was given a ' + (typeof y === 'undefined' ? 'undefined' : _typeof(y)));
	      if (!_.isNumber(z)) throw new TypeError('expected parameter `z` to be a Number, but was given a ' + (typeof z === 'undefined' ? 'undefined' : _typeof(z)));
	      ////END DEV
	
	      this.model.set('transformations/translate', transformToMatrix.translate3d(x, y, z));
	    })
	
	  });
	  return CssToMatrix;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root['transform-to-matrix'] = factory();
	  }
	})(undefined, function () {
	  var transformtomatrix;
	
	  transformtomatrix = function () {
	    var fns;
	    return fns = {
	      perspective: function perspective(d) {
	        return [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, -1 / d, 1]];
	      },
	      rotate: function rotate(a) {
	        return fns.rotateZ(a);
	      },
	      rotateX: function rotateX(a) {
	        return fns.rotate3d(1, 0, 0, a);
	      },
	      rotateY: function rotateY(a) {
	        return fns.rotate3d(0, 1, 0, a);
	      },
	      rotateZ: function rotateZ(a) {
	        var c, n;
	        c = Math.cos(a);
	        n = Math.sin(a);
	        return [[c, -n, 0], [n, c, 0]];
	      },
	      rotate3d: function rotate3d(x, y, z, a) {
	        var c, i, n, rs, s;
	        s = x * x + y * y + z * z;
	        c = Math.cos(a);
	        n = Math.sin(a);
	        i = 1 - c;
	        rs = Math.sqrt(s) * n;
	        return [[(x * x + (y * y + z * z) * c) / s, (x * y * i - z * rs) / s, (x * z * i + y * rs) / s, 0], [(x * y * i + z * rs) / s, (y * y + (x * x + z * z) * c) / s, (y * z * i - x * rs) / s, 0], [(x * z * i - y * rs) / s, (y * z * i + x * rs) / s, (z * z + (x * x + y * y) * c) / s, 0], [0, 0, 0, 1]];
	      },
	      scale: function scale(x, y) {
	        return [[x, 0, 0], [0, y, 0]];
	      },
	      scaleX: function scaleX(x) {
	        return fns.scale(x, 1);
	      },
	      scaleY: function scaleY(y) {
	        return fns.scale(1, y);
	      },
	      scaleZ: function scaleZ(z) {
	        return fns.scale3d(1, 1, z);
	      },
	      scale3d: function scale3d(x, y, z) {
	        return [[x, 0, 0, 0], [0, y, 0, 0], [0, 0, z, 0], [0, 0, 0, 1]];
	      },
	      skew: function skew(x, y) {
	        return [[1, Math.tan(x), 0], [Math.tan(y), 1, 0]];
	      },
	      skewX: function skewX(x) {
	        return [[1, Math.tan(x), 0], [0, 1, 0]];
	      },
	      skewY: function skewY(y) {
	        return [[1, 0, 0], [Math.tan(y), 1, 0]];
	      },
	      translate: function translate(x, y) {
	        return [[1, 0, x], [0, 1, y]];
	      },
	      translateX: function translateX(x) {
	        return fns.translate(x, 0);
	      },
	      translateY: function translateY(y) {
	        return fns.translate(0, y);
	      },
	      translateZ: function translateZ(z) {
	        return fns.translate3d(0, 0, z);
	      },
	      translate3d: function translate3d(x, y, z) {
	        return [[1, 0, 0, x], [0, 1, 0, y], [0, 0, 1, z], [0, 0, 0, 1]];
	      }
	    };
	  }();
	
	  return transformtomatrix;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root['matrix-utilities'] = factory();
	  }
	})(undefined, function () {
	  var matrixutilities;
	
	  matrixutilities = function () {
	    var util;
	    return util = {
	      add: function add(one, two) {
	        var i, j, result, row, value, _i, _j, _len, _len1;
	        if (one.length !== two.length) {
	          throw new Error('Matrix y dimensions do not match');
	        }
	        result = [];
	        for (i = _i = 0, _len = one.length; _i < _len; i = ++_i) {
	          row = one[i];
	          if (row.length !== two[i].length) {
	            throw new Error("Matrix x dimensions do not match on row " + (i + 1));
	          }
	          result[i] = [];
	          for (j = _j = 0, _len1 = row.length; _j < _len1; j = ++_j) {
	            value = row[j];
	            result[i][j] = value + two[i][j];
	          }
	        }
	        return result;
	      },
	      multiply: function multiply(one, two) {
	        var j, k, l, result, row, size, sum, value, _i, _j, _len, _len1;
	        if (one[0].length !== two.length) {
	          throw new Error('Matrix 1\'s row count should equal matrix 2\'s column count');
	        }
	        size = one[0].length;
	        result = [];
	        for (j = _i = 0, _len = two.length; _i < _len; j = ++_i) {
	          row = two[j];
	          result[j] = [];
	          for (k = _j = 0, _len1 = row.length; _j < _len1; k = ++_j) {
	            value = row[k];
	            l = size;
	            sum = 0;
	            while (l--) {
	              sum += one[j][l] * two[l][k];
	            }
	            result[j][k] = sum;
	          }
	        }
	        return result;
	      },
	      flip: function flip(matrix) {
	        var j, k, result, row, value, _i, _j, _len, _len1;
	        result = [];
	        for (j = _i = 0, _len = matrix.length; _i < _len; j = ++_i) {
	          row = matrix[j];
	          for (k = _j = 0, _len1 = row.length; _j < _len1; k = ++_j) {
	            value = row[k];
	            (result[k] || (result[k] = []))[j] = value;
	          }
	        }
	        return result;
	      },
	      to2d: function to2d(matrix) {
	        return [[matrix[0][0] || 1, matrix[0][1] || 0, matrix[0][3] || 0], [matrix[1][0] || 0, matrix[1][1] || 1, matrix[1][3] || 0]];
	      },
	      to3d: function to3d(matrix) {
	        return [[matrix[0][0] || 1, matrix[0][1] || 0, 0, matrix[0][2] || 0], [matrix[1][0] || 0, matrix[1][1] || 1, 0, matrix[1][2] || 0], [0, 0, 1, 0], [0, 0, 0, 1]];
	      },
	      Identity: function Identity() {
	        return [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
	      }
	    };
	  }();
	
	  return matrixutilities;
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root.umodel = factory();
	  }
	})(undefined, function () {
	  var umodel,
	      _,
	      __hasProp = {}.hasOwnProperty;
	
	  _ = {
	    extend: function extend(a, b) {
	      var key;
	      for (key in b) {
	        if (!__hasProp.call(b, key)) continue;
	        a[key] = b[key];
	      }
	      return a;
	    },
	    trim: function () {
	      var head, tail;
	      if (''.trim) {
	        return function (string) {
	          return string.trim();
	        };
	      } else {
	        head = /^\s\s*/;
	        tail = /\s\s*$/;
	        return function (string) {
	          return string.replace(head, '').replace(tail, '');
	        };
	      }
	    }()
	  };
	
	  umodel = function () {
	    function umodel(_data, options) {
	      this._data = _data != null ? _data : {};
	      this.options = {
	        separator: '/'
	      };
	      if (options) {
	        _.extend(this.options, options);
	      }
	      this.events = {};
	    }
	
	    umodel.prototype.get = function (key) {
	      this.trigger('get', key);
	      return this._get(this._split(key), this._data);
	    };
	
	    umodel.prototype.set = function (key, value) {
	      var old;
	      old = this._get(this._split(key), this._data);
	      this._set(this._split(key), value, false, this._data);
	      return this.trigger('set', key, value, old);
	    };
	
	    umodel.prototype.setnx = function (key, value) {
	      var old;
	      old = this._get(this._split(key), this._data);
	      this._set(this._split(key), value, true, this._data);
	      return this.trigger('setnx', key, value, old);
	    };
	
	    umodel.prototype.on = function (eventAndProperty, fn) {
	      var e, _results;
	      if (fn) {
	        return this._on(eventAndProperty, fn);
	      } else {
	        _results = [];
	        for (e in eventAndProperty) {
	          fn = eventAndProperty[e];
	          _results.push(this._on(e, fn));
	        }
	        return _results;
	      }
	    };
	
	    umodel.prototype.trigger = function (event, path, value, oldValue) {
	      var e, fn, fns, _ref, _results;
	      if (path == null) {
	        path = '*';
	      }
	      path = this._normalize(path);
	      if (event in this.events) {
	        _ref = this.events[event];
	        _results = [];
	        for (e in _ref) {
	          fns = _ref[e];
	          if (e === '*' || (path + '/').indexOf(e + '/') === 0) {
	            _results.push(function () {
	              var _i, _len, _results1;
	              _results1 = [];
	              for (_i = 0, _len = fns.length; _i < _len; _i++) {
	                fn = fns[_i];
	                if (oldValue != null) {
	                  _results1.push(fn.call(this, path, value, oldValue));
	                } else {
	                  _results1.push(fn.call(this, path, value));
	                }
	              }
	              return _results1;
	            }.call(this));
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };
	
	    umodel.prototype._get = function (key, parent, accumulator) {
	      var head;
	      if (accumulator == null) {
	        accumulator = [];
	      }
	      head = key.shift();
	      if (head) {
	        if (!(head in parent)) {
	          return void 0;
	        }
	        accumulator.push(head);
	        return this._get(key, parent[head], accumulator);
	      }
	      return parent;
	    };
	
	    umodel.prototype._set = function (key, value, nx, parent, accumulator) {
	      var head;
	      if (nx == null) {
	        nx = false;
	      }
	      if (accumulator == null) {
	        accumulator = [];
	      }
	      head = key.shift();
	      if (key.length) {
	        if (!(head in parent)) {
	          parent[head] = {};
	        }
	        accumulator.push(head);
	        return this._set(key, value, nx, parent[head], accumulator);
	      }
	      if (!(nx && head in parent)) {
	        return parent[head] = value;
	      }
	    };
	
	    umodel.prototype._on = function (eventAndProperty, fn) {
	      var event, events, parts, property, _i, _len, _results;
	      parts = eventAndProperty.split(':');
	      events = parts[0].split(' ');
	      property = this._normalize(parts[1] || '*');
	      _results = [];
	      for (_i = 0, _len = events.length; _i < _len; _i++) {
	        event = events[_i];
	        event = _.trim(event);
	        if (!(event in this.events)) {
	          this.events[event] = {};
	        }
	        if (!(property in this.events[event])) {
	          this.events[event][property] = [];
	        }
	        _results.push(this.events[event][property].push(fn));
	      }
	      return _results;
	    };
	
	    umodel.prototype._normalize = function (key) {
	      var separator;
	      separator = this.options.separator;
	      key = _.trim(key);
	      if (key.charAt(0) === separator) {
	        key = key.slice(1);
	      }
	      if (key.charAt(key.length - 1) === separator) {
	        key = key.slice(0, -1);
	      }
	      return key;
	    };
	
	    umodel.prototype._split = function (key) {
	      return this._normalize(key).split(this.options.separator);
	    };
	
	    return umodel;
	  }();
	
	  return umodel;
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-zoomy.map