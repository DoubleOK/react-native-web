Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\components\\UnimplementedView\\index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _View=require('../View');var _View2=_interopRequireDefault(_View);var _propTypes=require('prop-types');var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule UnimplementedView
 * 
 *//**
 * Common implementation for a simple stubbed view.
 */var UnimplementedView=function(_Component){_inherits(UnimplementedView,_Component);function UnimplementedView(){_classCallCheck(this,UnimplementedView);return _possibleConstructorReturn(this,(UnimplementedView.__proto__||Object.getPrototypeOf(UnimplementedView)).apply(this,arguments));}_createClass(UnimplementedView,[{key:'setNativeProps',value:function setNativeProps(){// Do nothing.
// This method is required in order to use this view as a Touchable* child.
// See ensureComponentIsNative.js for more info
}},{key:'render',value:function render(){return _react2.default.createElement(_View2.default,{style:[unimplementedViewStyles,this.props.style],__source:{fileName:_jsxFileName,lineNumber:34}},this.props.children);}}]);return UnimplementedView;}(_react.Component);UnimplementedView.propTypes=process.env.NODE_ENV!=="production"?{children:_propTypes.any,style:_propTypes.object}:{};var unimplementedViewStyles=process.env.NODE_ENV!=='production'?{alignSelf:'flex-start',borderColor:'red',borderWidth:1}:{};exports.default=UnimplementedView;