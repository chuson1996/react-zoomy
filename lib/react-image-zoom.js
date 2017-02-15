(function(FuseBox){
FuseBox.pkg("reactImageZoom", {}, function(___scope___){
___scope___.file("react-image-zoom.js", function(exports, require, module, __filename, __dirname){ 

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  z-index: 98;\n\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  z-index: 999;\n  opacity: 1;\n  pointer-events: none;\n\n  align-content: center;\n  justify-content: center;\n'], ['\n  position: fixed;\n  z-index: 98;\n\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  z-index: 999;\n  opacity: 1;\n  pointer-events: none;\n\n  align-content: center;\n  justify-content: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMotion = require('react-motion');

var _cssToMatrix = require('css-to-matrix');

var _cssToMatrix2 = _interopRequireDefault(_cssToMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // export default  4;


var ImageContainer = _styledComponents2.default.div(_templateObject);

var ZoomableImage = function (_Component) {
  _inherits(ZoomableImage, _Component);

  function ZoomableImage(props) {
    _classCallCheck(this, ZoomableImage);

    var _this = _possibleConstructorReturn(this, (ZoomableImage.__proto__ || Object.getPrototypeOf(ZoomableImage)).call(this, props));

    _this.show = function (_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;

      // Disable scrolling
      document.querySelector('html').style.overflowY = 'hidden';

      _this.setState({
        showImage: true,
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
        showImage: false
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

    _this.onLoad = function (e) {
      _this.setState({
        pictureLoaded: true,
        pictureHeight: e.target.clientHeight / window.innerHeight * window.innerWidth
      });
    };

    _this.state = {
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
    return _this;
  }

  _createClass(ZoomableImage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          imageUrl = _props.imageUrl,
          renderThumbnail = _props.renderThumbnail,
          renderCursor = _props.renderCursor,
          renderLoadingElement = _props.renderLoadingElement,
          imageContainerProps = _props.imageContainerProps,
          imageProps = _props.imageProps;
      var _state = this.state,
          pictureLoaded = _state.pictureLoaded,
          showImage = _state.showImage,
          loading = _state.loading,
          imageMove = _state.imageMove,
          pictureHeight = _state.pictureHeight,
          cursorPosition = _state.cursorPosition;


      var scale = 1.5;

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
              x: showImage && pictureLoaded && !loading ? goSlow(0) : goSlow(-100),
              opacity: showImage ? goSlow(1) : goSlow(0)
            } },
          function (_ref4) {
            var x = _ref4.x,
                opacity = _ref4.opacity;
            return _react2.default.createElement(
              ImageContainer,
              _extends({}, imageContainerProps, {
                onMouseMove: _this2.onMouseMoveOnImageContainer,
                style: _extends({
                  opacity: opacity,
                  cursor: renderCursor && showImage ? 'none' : 'pointer',
                  pointerEvents: showImage ? 'auto' : 'none'
                }, imageContainerProps && imageContainerProps.style)
              }),
              renderCursor && renderCursor({
                style: {
                  top: cursorPosition.top,
                  left: cursorPosition.left
                },
                isImageShowed: showImage
              }),
              renderLoadingElement && renderLoadingElement({
                isImageShowed: showImage,
                isImageLoaded: pictureLoaded,
                done: _this2.slideImageIn
              }),
              _react2.default.createElement(
                _reactMotion.Motion,
                { style: imageMove },
                function (imageMove) {
                  return _react2.default.createElement('img', _extends({}, imageProps, {
                    onMouseMove: _this2.onMouseMove,
                    width: '100%',
                    onClick: _this2.hide,
                    onLoad: _this2.onLoad,
                    style: _extends({
                      transform: new _cssToMatrix2.default().scale(scale, scale).translate(x * scale / 100 * window.innerWidth - imageMove.x / 100 * (scale - 1) * window.innerWidth, -(pictureHeight - window.innerHeight) / 2 - imageMove.y / 100 * (pictureHeight * scale - window.innerHeight)).getMatrixCSS(),
                      height: pictureHeight || 'auto'
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

  return ZoomableImage;
}(_react.Component);

ZoomableImage.propTypes = {
  imageUrl: _react.PropTypes.string.isRequired,
  renderThumbnail: _react.PropTypes.func.isRequired,
  renderCursor: _react.PropTypes.func,
  renderLoadingElement: _react.PropTypes.func,
  imageContainerProps: _react.PropTypes.object,
  imageProps: _react.PropTypes.object
};
exports.default = ZoomableImage;
});
});

FuseBox.import("reactImageZoom/react-image-zoom.js");
FuseBox.main("reactImageZoom/react-image-zoom.js");
FuseBox.defaultPackageName = "reactImageZoom";
})
(function(e){var r="undefined"!=typeof window&&window.navigator;r&&(window.global=window),e=r&&"undefined"==typeof __fbx__dnm__?e:module.exports;var n=r?window.__fsbx__=window.__fsbx__||{}:global.$fsbx=global.$fsbx||{};r||(global.require=require);var t=n.p=n.p||{},i=n.e=n.e||{},a=function(e){var r=e.charCodeAt(0);if(r>=97&&r<=122||64===r){if(64===r){var n=e.split("/"),t=n.splice(2,n.length).join("/");return[n[0]+"/"+n[1],t||void 0]}var i=e.indexOf("/");if(i===-1)return[e];var a=e.substring(0,i),o=e.substring(i+1);return[a,o]}},o=function(e){return e.substring(0,e.lastIndexOf("/"))||"./"},f=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var a=[],t=0,i=n.length;t<i;t++){var o=n[t];o&&"."!==o&&(".."===o?a.pop():a.push(o))}return""===n[0]&&a.unshift(""),a.join("/")||(a.length?"/":".")},s=function(e){var r=e.match(/\.(\w{1,})$/);if(r){var n=r[1];return n?e:e+".js"}return e+".js"},u=function(e){if(r){var n,t=document,i=t.getElementsByTagName("head")[0];/\.css$/.test(e)?(n=t.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=e):(n=t.createElement("script"),n.type="text/javascript",n.src=e,n.async=!0),i.insertBefore(n,i.firstChild)}},l=function(e,n){var i=n.path||"./",o=n.pkg||"default",u=a(e);u&&(i="./",o=u[0],n.v&&n.v[o]&&(o=o+"@"+n.v[o]),e=u[1]),e&&126===e.charCodeAt(0)&&(e=e.slice(2,e.length),i="./");var l=t[o];if(!l){if(r)throw'Package was not found "'+o+'"';return{serverReference:require(o)}}e||(e="./"+l.s.entry);var c,v=f(i,e),d=s(v),p=l.f[d];return!p&&d.indexOf("*")>-1&&(c=d),p||c||(d=f(v,"/","index.js"),p=l.f[d],p||(d=v+".js",p=l.f[d]),p||(p=l.f[v+".jsx"])),{file:p,wildcard:c,pkgName:o,versions:l.v,filePath:v,validPath:d}},c=function(e,n){if(!r)return n(/\.(js|json)$/.test(e)?global.require(e):"");var t;t=new XMLHttpRequest,t.onreadystatechange=function(){if(4==t.readyState)if(200==t.status){var r=t.getResponseHeader("Content-Type"),i=t.responseText;/json/.test(r)?i="module.exports = "+i:/javascript/.test(r)||(i="module.exports = "+JSON.stringify(i));var a=f("./",e);p.dynamic(a,i),n(p.import(e,{}))}else console.error(e+" was not found upon request"),n(void 0)},t.open("GET",e,!0),t.send()},v=function(e,r){var n=i[e];if(n)for(var t in n){var a=n[t].apply(null,r);if(a===!1)return!1}},d=function(e,n){if(void 0===n&&(n={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return u(e);var i=l(e,n);if(i.serverReference)return i.serverReference;var a=i.file;if(i.wildcard){var f=new RegExp(i.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@/g,"[a-z0-9$_-]+"),"i"),s=t[i.pkgName];if(s){var p={};for(var g in s.f)f.test(g)&&(p[g]=d(i.pkgName+"/"+g));return p}}if(!a){var m="function"==typeof n,h=v("async",[e,n]);if(h===!1)return;return c(e,function(e){if(m)return n(e)})}var _=i.validPath,x=i.pkgName;if(a.locals&&a.locals.module)return a.locals.module.exports;var w=a.locals={},b=o(_);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return d(e,{pkg:x,path:b,v:i.versions})},w.require.main={filename:r?"./":global.require.main.filename,paths:r?[]:global.require.main.paths};var y=[w.module.exports,w.require,w.module,_,b,x];v("before-import",y);var k=a.fn;return k.apply(0,y),v("after-import",y),w.module.exports},p=function(){function n(){}return n.global=function(e,n){var t=r?window:global;return void 0===n?t[e]:void(t[e]=n)},n.import=function(e,r){return d(e,r)},n.on=function(e,r){i[e]=i[e]||[],i[e].push(r)},n.exists=function(e){try{var r=l(e,{});return void 0!==r.file}catch(e){return!1}},n.remove=function(e){var r=l(e,{}),n=t[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},n.main=function(e){return this.mainFile=e,n.import(e,{})},n.expose=function(r){for(var n in r){var t=r[n],i=d(t.pkg);e[t.alias]=i}},n.dynamic=function(r,n,t){var i=t&&t.pkg||"default";this.pkg(i,{},function(t){t.file(r,function(r,t,i,a,o){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,a,o,e)})})},n.flush=function(e){var r=t.default;if(e)return void(r.f[e]&&delete r.f[e].locals);for(var n in r.f){var i=r.f[n];delete i.locals}},n.pkg=function(e,r,n){if(t[e])return n(t[e].s);var i=t[e]={},a=i.f={};i.v=r;var o=i.s={file:function(e,r){a[e]={fn:r}}};return n(o)},n}();return p.packages=t,p.isBrowser=void 0!==r,p.isServer=!r,e.FuseBox=p}(this))