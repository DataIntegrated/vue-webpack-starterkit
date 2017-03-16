'use strict';

export function randomHex() {
  let max = Number.MAX_SAFE_INTEGER;
  let arr = new Uint32Array(2);
  window.crypto.getRandomValues(arr);
  return arr[1].toString(16) + arr[0].toString(16);
}

export function objectMap(obj, cb) {
  let newObj = {};
  let keys = Object.keys(obj);
  keys.forEach((key, index) => {
    newObj[key] = cb(obj[key], index);
  });
  return newObj;
}