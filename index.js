const fs = require("fs")
const values = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  "A": 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52

}
const allRucksacks = fs.readFileSync('day03.txt', { encoding: 'utf-8' }).split('\n')


let seperatedRuckSacks = [];
let counter = 0;
let basket = []
for (let i = 0; i < allRucksacks.length; i++) {
  if (counter < 3) {
    basket.push(allRucksacks[i])
    counter++;
  }
  if (counter >= 3) {
    seperatedRuckSacks.push(basket)
    basket = [];
    counter = 0;
  }
}

const findDuplicate = (array) => {
  const sorted = array.sort(
    function(a, b) {
      return b.length - a.length;
    }
  );
  const longest = sorted[0]
  const median = sorted[1]
  const shortest = sorted[2]
  let basket = [];
for(let i = 0; i < longest.length; i++){
  if(median.indexOf(longest[i]) !== -1){
    basket.push(longest[i])
  }
}
  let result;
  for(let x = 0; x < basket.length; x++){
    if(shortest.indexOf(basket[x]) !== -1){
      result = basket[x]
    }
  }

return result
}
let total = 0;
for (let x = 0; x < seperatedRuckSacks.length; x++) {
  let container = seperatedRuckSacks[x]
  let dupe = findDuplicate(container)
  total = total + values[dupe]

}
console.log("total", total)

