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
  setTimeout(() => {

  }, 1000);
}

export async function filterArrayAsync(array, filterFunc) {
  setTimeout(() => {

  }, 1000);
}
