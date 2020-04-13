const _ = {
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  inRange (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    };
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    };
    const isInRange = (number >= start && number < end);
    return isInRange;
  },
  
  words (string) {
    return string.split(' ');
  },
  
  pad (string, length) {
    const pad = length - string.length;
    const left = Math.floor(pad / 2);
    const right = pad - left;
    if (length < string.length) {
      return string;
    };
    return ' '.repeat(left) + string + ' '.repeat(right);
  },
  
  has (obj, key) {
    const objKeys = Object.keys(obj);
    if (key === undefined || objKeys === undefined) {
      return false;
    };
    return objKeys.includes(key);
  },
  
  invert (obj) {
    let invertedObject = {};
    let originalValue;
    for (let key in obj) {
      invertedObject[obj[key]] = key;
    }
    return invertedObject;
  },
  
  findKey (obj, predicate) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
  },
  
  drop (array, n) {
    if (n === undefined) {
      n = 1;
    };
    let droppedArray = array.slice(n)
    return droppedArray;
  },
  
  dropWhile (array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  chunk (array, size) {
    if (size === undefined) {
      size = 1;
    };
    let arrayChunks = [];
    for (let i = 0; i < array.length; i+=size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};


// Do not write or modify code below this line.
module.exports = _;