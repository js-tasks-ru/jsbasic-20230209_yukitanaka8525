function filterRange(arr, a, b) {
  let resultArr = [];
    arr.map((item) => { if (item < b && item >= a) resultArr.push(item) });
    return  resultArr;
}
