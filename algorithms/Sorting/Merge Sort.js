var mergeSort = (arr, l, r) => {
  if (r > l) {
    let mid = Math.floor(l + (r - l) / 2);

    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
};

var merge = (arr, l, mid, r) => {
  let leftArr = arr.slice(l, mid + 1);
  let rightArr = arr.slice(mid + 1, r + 1);

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr[l + k] = leftArr[i];
      i++;
    } else {
      arr[l + k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[l + k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[l + k] = rightArr[j];
    j++;
    k++;
  }
};
