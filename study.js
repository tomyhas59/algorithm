let set = new Set([{ a: 1 }, { b: 2 }]);

for (let item of set) {
  if (item.a === 1) {
    set.delete(item);
  }
}

set.add([{ c: 3 }]);

console.log(set);
