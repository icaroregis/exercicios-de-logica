const processAddresses = function (addresses) {
  return Array.from(new Set(addresses));
};

let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
let uniqueAddresses = processAddresses(addresses);
console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]
