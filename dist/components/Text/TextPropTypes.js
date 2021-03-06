Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule TextPropTypes
 * 
 */var _BaseComponentPropTypes=require('../../propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);var _TextStylePropTypes=require('./TextStylePropTypes');var _TextStylePropTypes2=_interopRequireDefault(_TextStylePropTypes);var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var TextPropTypes=_extends({},_BaseComponentPropTypes2.default,{accessibilityRole:(0,_propTypes.oneOf)(['button','heading','link','listitem']),children:_propTypes.any,numberOfLines:_propTypes.number,onLayout:_propTypes.func,onPress:_propTypes.func,selectable:_propTypes.bool,style:(0,_StyleSheetPropType2.default)(_TextStylePropTypes2.default)});exports.default=TextPropTypes;