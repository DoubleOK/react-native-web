Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactNativePropRegistry
 * 
 */var emptyObject={};var objects={};var prefix='r';var uniqueID=1;var createKey=function createKey(id){return prefix+'-'+id;};var ReactNativePropRegistry=function(){function ReactNativePropRegistry(){_classCallCheck(this,ReactNativePropRegistry);}_createClass(ReactNativePropRegistry,null,[{key:'register',value:function register(object){var id=uniqueID++;if(process.env.NODE_ENV!=='production'){Object.freeze(object);}var key=createKey(id);objects[key]=object;return id;}},{key:'getByID',value:function getByID(id){if(!id){// Used in the style={[condition && id]} pattern,
// we want it to be a no-op when the value is false or null
return emptyObject;}var key=createKey(id);var object=objects[key];if(!object){console.warn('Invalid style with id `'+id+'`. Skipping ...');return emptyObject;}return object;}}]);return ReactNativePropRegistry;}();exports.default=ReactNativePropRegistry;