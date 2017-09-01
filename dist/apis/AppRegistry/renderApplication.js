Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\apis\\AppRegistry\\renderApplication.js';/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */exports.default=renderApplication;exports.getApplication=getApplication;var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);var _reactDom=require('react-dom');var _AppContainer=require('./AppContainer');var _AppContainer2=_interopRequireDefault(_AppContainer);var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function renderApplication(RootComponent,initialProps,rootTag){(0,_invariant2.default)(rootTag,'Expect to have a valid rootTag, instead got ',rootTag);(0,_reactDom.render)(_react2.default.createElement(_AppContainer2.default,{rootTag:rootTag,__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(RootComponent,_extends({},initialProps,{__source:{fileName:_jsxFileName,lineNumber:27}}))),rootTag);}function getApplication(RootComponent,initialProps){var element=_react2.default.createElement(_AppContainer2.default,{rootTag:{},__source:{fileName:_jsxFileName,lineNumber:35}},_react2.default.createElement(RootComponent,_extends({},initialProps,{__source:{fileName:_jsxFileName,lineNumber:36}})));var stylesheets=_StyleSheet2.default.getStyleSheets().map(function(sheet){return(// ensure that CSS text is not escaped
_react2.default.createElement('style',{dangerouslySetInnerHTML:{__html:sheet.textContent},id:sheet.id,__source:{fileName:_jsxFileName,lineNumber:41}}));});return{element:element,stylesheets:stylesheets};}