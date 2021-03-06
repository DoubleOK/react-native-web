Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule Animated
 * @noflow
 */var _animated=require('animated');var _animated2=_interopRequireDefault(_animated);var _Image=require('../../components/Image');var _Image2=_interopRequireDefault(_Image);var _ScrollView=require('../../components/ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);var _StyleSheet=require('../StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _Text=require('../../components/Text');var _Text2=_interopRequireDefault(_Text);var _View=require('../../components/View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_animated2.default.inject.FlattenStyle(_StyleSheet2.default.flatten);var AnimatedImplementation=_extends({},_animated2.default,{Image:_animated2.default.createAnimatedComponent(_Image2.default),ScrollView:_animated2.default.createAnimatedComponent(_ScrollView2.default),Text:_animated2.default.createAnimatedComponent(_Text2.default),View:_animated2.default.createAnimatedComponent(_View2.default)});exports.default=AnimatedImplementation;