export default function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] > arr[i]) {
      continue;
    } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}