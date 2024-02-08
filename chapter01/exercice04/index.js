export function addWithCallback(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
    let res = array.filter(filterFunc);
    callback(res);
  }, 1000);
}

export async function asyncAdd(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var sum = a + b;
      resolve(sum);
  }, 1000)});
};
 
export async function filterArrayAsync(array, filterFunc) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(array.filter(filterFunc));
    }, 1000)});
  };