// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var arr = [name]
  return arr.concat(kittens)
}

function removeLastKitten() {
<<<<<<< HEAD
  return kittens.slice(0, kittens.length - 1)
=======
  return kittens.splice(kittens.length - 1, 1)
>>>>>>> 349ffa5f5f154a25695a914de160e1eb33b31c4a
}

function removeFirstKitten() {
  return kittens.slice(1)
}