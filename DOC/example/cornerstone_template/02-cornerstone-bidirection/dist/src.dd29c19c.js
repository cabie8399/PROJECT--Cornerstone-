parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var r=c(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(arguments.length<3?e:o):n.value}}).apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=f();return function(){var o,r=d(e);if(t){var n=d(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u(this,o)}}function u(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=function(e){a(c,cornerstoneTools.LengthTool);var o=i(c);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ObservableRectangleRoi";return t(this,c),o.call(this,{name:e})}return r(c,[{key:"createNewMeasurement",value:function(e){console.log("New measurement");var t=n(d(c.prototype),"createNewMeasurement",this).call(this,e);return window.measurement=t,console.log(t),t}}]),c}();function m(){var e=document.querySelectorAll("".concat(".mode-buttons"," .set-tool-mode")),t=function(t){var o=this.dataset.action,r={mouseButtonMask:t.buttons||T(t.which)};return cornerstoneTools["setTool".concat(o)](h,r),e.forEach(function(e){e.classList.remove("is-primary")}),this.classList.add("is-primary"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!1};e.forEach(function(e){e.addEventListener("contextmenu",t),e.addEventListener("auxclick",t),e.addEventListener("click",t)})}function y(){m()}exports.default=p;var b="https://tools.cornerstonejs.org/examples/";O();var g=document.querySelector(".cornerstone-element");y(),cornerstoneTools.init({showSVGCursors:!0}),cornerstone.enable(g);var h="ObservableRectangleRoi",v=["wadouri:".concat(b,"assets/dicom/exotic/1.dcm"),"wadouri:".concat(b,"assets/dicom/exotic/2.dcm")],w={currentImageIdIndex:0,imageIds:v};function O(){console.log(cornerstoneWADOImageLoader),cornerstoneWADOImageLoader.external.cornerstone=cornerstone,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneTools.external.cornerstoneMath=cornerstoneMath,cornerstoneTools.external.cornerstone=cornerstone,cornerstoneTools.external.Hammer=Hammer;var e={webWorkerPath:"".concat(b,"assets/image-loader/cornerstoneWADOImageLoaderWebWorker.js"),taskConfiguration:{decodeTask:{codecsPath:"".concat(b,"assets/image-loader/cornerstoneWADOImageLoaderCodecs.js")}}};cornerstoneWADOImageLoader.webWorkerManager.initialize(e)}g.tabIndex=0,g.focus(),cornerstone.loadImage(v[0]).then(function(e){console.log("loaded image"),cornerstoneTools.addStackStateManager(g,["stack"]),cornerstoneTools.addToolState(g,"stack",w),cornerstone.displayImage(g,e)}),cornerstoneTools.addTool(p),cornerstoneTools.setToolActive("ObservableRectangleRoi",{mouseButtonMask:1});var T=function(e){switch(console.log("146L which ===> ",e),e){case 0:return 0;case 1:return 1;case 2:return 4;case 3:return 2}return 0};
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.dd29c19c.js.map