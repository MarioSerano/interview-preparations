var quickSort = (arr, low, high) => {
  if (low >= high) return;
  let pivot = arr[low];
  swap(arr, low, high);
  let leftPointer = low;
  let rightPointer = high - 1;

  // if we're crossing, then swap.
  // because:
  // if leftpointer is the driver, then the pivot swap is at leftpointer + 1.
  // else rightpointer is the driver, then pivot swap is at rightpointer - 1.
  // this can be achieved by crossing. or we can make conditions when pivot swap happened when leftpointer is the driver, or rightpointer is the driver

  while (leftPointer <= rightPointer) {
    while (leftPointer <= high && arr[leftPointer] < pivot) {
      leftPointer++;
    }
    while (rightPointer >= low && arr[rightPointer] >= pivot) {
      // geq comparison on right pointer bcs otherwise there are cases where there can be no crosses
      // 0 0 1 1 0
      // ^         leftpointer
      //   ^       rightpointer
      //         ^ pivot
      // infinite loop?
      rightPointer--;
    }

    if (leftPointer < rightPointer) swap(arr, leftPointer, rightPointer); // swap only when we're not crossing!
  }

  swap(arr, leftPointer, high);
  quickSort(arr, low, leftPointer - 1);
  quickSort(arr, leftPointer + 1, high);
};

var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let arr = [5, 1, 1, 2, 0, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
