Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\apis\\AppRegistry\\AppContainer.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _StyleSheet=require('../StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _View=require('../../components/View');var _View2=_interopRequireDefault(_View);var _propTypes=require('prop-types');var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */var AppContainer=function(_Component){_inherits(AppContainer,_Component);function AppContainer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppContainer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppContainer.__proto__||Object.getPrototypeOf(AppContainer)).call.apply(_ref,[this].concat(args))),_this),_this.state={mainKey:1},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppContainer,[{key:'getChildContext',value:function getChildContext(){return{rootTag:this.props.rootTag};}},{key:'render',value:function render(){return _react2.default.createElement(_View2.default,{pointerEvents:'box-none',style:[styles.appContainer,_StyleSheet2.default.absoluteFill],__source:{fileName:_jsxFileName,lineNumber:51}},_react2.default.createElement(_View2.default,{children:this.props.children,key:this.state.mainKey,pointerEvents:'box-none',style:styles.appContainer,__source:{fileName:_jsxFileName,lineNumber:52}}));}}]);return AppContainer;}(_react.Component);AppContainer.childContextTypes={rootTag:_propTypes.any};exports.default=AppContainer;AppContainer.propTypes=process.env.NODE_ENV!=="production"?{children:_propTypes.node,rootTag:_propTypes.any.isRequired}:{};var styles=_StyleSheet2.default.create({/**
   * Ensure that the application covers the whole screen.
   */appContainer:{flex:1}});