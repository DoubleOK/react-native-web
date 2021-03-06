Object.defineProperty(exports,"__esModule",{value:true});var _flattenStyle=require('./flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);var _registry=require('./registry');var _registry2=_interopRequireDefault(_registry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// allow component styles to be editable in React Dev Tools
/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule StyleSheet
 * @noflow
 */if(process.env.NODE_ENV!=='production'){var _require=require('fbjs/lib/ExecutionEnvironment'),canUseDOM=_require.canUseDOM;if(canUseDOM&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__){window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=_flattenStyle2.default;}}var absoluteFillObject={position:'absolute',left:0,right:0,top:0,bottom:0};var absoluteFill=_registry2.default.register(absoluteFillObject);var StyleSheet={absoluteFill:absoluteFill,absoluteFillObject:absoluteFillObject,create:function create(styles){var result={};Object.keys(styles).forEach(function(key){if(process.env.NODE_ENV!=='production'){var StyleSheetValidation=require('./StyleSheetValidation').default;StyleSheetValidation.validateStyle(key,styles);}result[key]=_registry2.default.register(styles[key]);});return result;},flatten:_flattenStyle2.default,getStyleSheets:function getStyleSheets(){return _registry2.default.getStyleSheets();},hairlineWidth:1};exports.default=StyleSheet;