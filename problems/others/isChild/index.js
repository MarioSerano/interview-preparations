function isChild(parentA, parentB, child) {
  let childObj = {
    A: new Set(["AB", "A"]),
    B: new Set(["AB", "B"]),
    O: new Set(["A", "B", "O"]),
    AB: new Set(["AB"]),
  };

  let childSet = childObj[child];

  return childSet.has(parentA) || childSet.has(parentB);
}
