Object.defineProperty(exports,"__esModule",{value:true});var _propTypes=require('prop-types');var BaseComponentPropTypes={accessibilityLabel:_propTypes.string,accessibilityLiveRegion:(0,_propTypes.oneOf)(['assertive','none','polite']),accessibilityRole:_propTypes.string,accessible:_propTypes.bool,importantForAccessibility:(0,_propTypes.oneOf)(['auto','no','no-hide-descendants','yes']),style:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.number,_propTypes.object]),testID:_propTypes.string,// compatibility with React Native
accessibilityComponentType:_propTypes.string,accessibilityTraits:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.string])};/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */exports.default=BaseComponentPropTypes;