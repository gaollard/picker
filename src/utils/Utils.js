const win = window
const Utils = {
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no setter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick: function nextTick(callback, delay) {
    if ( delay === void 0 ) delay = 0;

    return setTimeout(callback, delay);
  },
  nextFrame: function nextFrame(callback) {
    return Utils.requestAnimationFrame(function () {
      Utils.requestAnimationFrame(callback);
    });
  },
  now: function now() {
    return Date.now();
  },
  promise: function promise(handler) {
    return win.Promise ? new Promise(handler) : createPromise(handler);
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (win.requestAnimationFrame) { return win.requestAnimationFrame(callback); }
    if (win.webkitRequestAnimationFrame) { return win.webkitRequestAnimationFrame(callback); }
    return win.setTimeout(callback, 1000 / 60);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    if (win.cancelAnimationFrame) { return win.cancelAnimationFrame(id); }
    if (win.webkitCancelAnimationFrame) { return win.webkitCancelAnimationFrame(id); }
    return win.clearTimeout(id);
  },
  removeDiacritics: function removeDiacritics(str) {
    return str.replace(/[^\u0000-\u007E]/g, function (a) { return diacriticsMap[a] || a; });
  },
  getTranslate: function getTranslate(el, axis) {
    if ( axis === void 0 ) axis = 'x';

    var matrix;
    var curTransform;
    var transformMatrix;

    var curStyle = win.getComputedStyle(el, null);

    if (win.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
      // Crazy IE10 Matrix
      else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
      // Normal Browsers
      else { curTransform = parseFloat(matrix[4]); }
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
      // Crazy IE10 Matrix
      else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
      // Normal Browsers
      else { curTransform = parseFloat(matrix[5]); }
    }
    return curTransform || 0;
  },
  isObject: function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  merge: function merge() {
    var args = [], len$1 = arguments.length;
    while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

    var to = args[0];
    args.splice(0, 1);
    var from = args;

    for (var i = 0; i < from.length; i += 1) {
      var nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
  extend: function extend() {
    var args = [], len$1 = arguments.length;
    while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

    var deep = true;
    var to;
    var from;
    if (typeof args[0] === 'boolean') {
      deep = args[0];
      to = args[1];
      args.splice(0, 2);
      from = args;
    } else {
      to = args[0];
      args.splice(0, 1);
      from = args;
    }
    for (var i = 0; i < from.length; i += 1) {
      var nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (!deep) {
              to[nextKey] = nextSource[nextKey];
            } else if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
}

export default Utils