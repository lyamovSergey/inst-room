export function filterObject(obj, arr) {
  let filteredObj = Object.keys(obj)
    .filter((key) => arr.includes(key))
    .reduce((keysObj, key) => {
      keysObj[key] = obj[key];
      return keysObj;
    }, {});
  return filteredObj;
}
