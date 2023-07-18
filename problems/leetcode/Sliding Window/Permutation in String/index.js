/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s1Obj = {};
  let len = s1.length;
  for (let el of s1) {
    s1Obj[el] = (s1Obj[el] || 0) + 1;
  }

  let s2Obj = {};
  let l = 0;
  for (let r in s2) {
    let currentChar = s2[r];
    s2Obj[currentChar] = (s2Obj[currentChar] || 0) + 1;
    if (r - l + 1 < len) {
      continue;
    }

    let check = isSameObj(s1Obj, s2Obj);
    if (check) return true;

    if (--s2Obj[s2[l]] === 0) delete s2Obj[s2[l]];
    l++;
  }

  return false;
};

var isSameObj = function (s1Obj, s2Obj) {
  for (let key of Object.keys(s2Obj)) {
    if (s1Obj[key] !== s2Obj[key]) return false;
  }

  return true;
};

console.log(checkInclusion("rvwrk", "lznomzggwrvrkxecjaq"));
