Object.defineProperty(exports,"__esModule",{value:true});/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule BackHandler
 * 
 */function emptyFunction(){}var BackAndroid={exitApp:emptyFunction,addEventListener:function addEventListener(){return{remove:emptyFunction};},removeEventListener:emptyFunction};exports.default=BackAndroid;