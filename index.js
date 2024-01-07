function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(key, collection[key]);
      }
    }
  
    return collection;
  }
myEach([1,2,3], alert);

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
        const newArray = [];
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i])); 
        }
        return newArray;
    } else if (typeof collection === 'object') {
        const newArray = [];
        for (let key in collection) {
           if (collection.hasOwnProperty(key)) {
             newArray.push(callback(collection[key], key));
           } 
        }
        return newArray;
    } else {
        // Handle other cases here
    }
}

function myReduce(collection, callback, acc) {
    let accumulator = acc === undefined ? Object.values(collection)[0] : acc; // Initialize accumulator based on acc or first value of the object
  
    if (Array.isArray(collection)) {
      for (let i = acc === undefined ? 1 : 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = acc === undefined ? 1 : 0; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
      }
    } else {
      throw new Error('Invalid collection type. Must be an array or an object.');
    }
  
    return accumulator;
  }
  
  console.log(
    myReduce([1, 2, 3], function(acc, val, collection) {
      return acc + val;
    }, 10)
  );
  // Expected output: 16
  
  console.log(
    myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) {
      return acc + val;
    })
  );
  // Expected output: 6

  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
  }
   
  function myFilter(collection, predicate) {
    if (!Array.isArray(collection)) {
      return [];
    }
  
    const filteredResult = collection.filter(predicate);
  
    if (filteredResult.length === 0) {
      return [];
    }
  
    return filteredResult;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0; // Return 0 for any other type of input
    }
  }

  function myFirst(array, n) {
    if (Array.isArray(array)) {
      if (n && n > 0) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    }
  }

  function myLast(array, n = 1) {
    if (Array.isArray(array)) {
      if (n && n > 1) {
        return array.slice(-n);
      } else {
        return array[array.length - 1];
      }
    }
  }
    
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  console.log(myKeys({one: 1, two: 2, three: 3}));
  // Output: ["one", "two", "three"]


  function myValues(obj) {
    return Object.values(obj);
}