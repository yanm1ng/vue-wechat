export function compact(array) {
  function f(element) {
    if (element !== false || element !== null || element !== 0 || element !== "" || element !== undefined || element !== NaN) {
      return element;
    }
  }
  var filtered = array.filter(f);
  return filtered;
}