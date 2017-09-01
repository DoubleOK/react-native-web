Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule Clipboard
 * 
 */var Clipboard=function(){function Clipboard(){_classCallCheck(this,Clipboard);}_createClass(Clipboard,null,[{key:'isAvailable',value:function isAvailable(){return typeof document.queryCommandSupported==='function'&&document.queryCommandSupported('copy');}},{key:'getString',value:function getString(){return Promise.resolve('');}},{key:'setString',value:function setString(text){var success=false;var body=document.body;if(body){// add the text to a hidden node
var node=document.createElement('span');node.textContent=text;node.style.position='absolute';node.style.opacity='0';body.appendChild(node);// select the text
var selection=window.getSelection();selection.removeAllRanges();var range=document.createRange();range.selectNodeContents(node);selection.addRange(range);// attempt to copy
try{document.execCommand('copy');success=true;}catch(e){}// remove selection and node
selection.removeAllRanges();body.removeChild(node);}return success;}}]);return Clipboard;}();exports.default=Clipboard;