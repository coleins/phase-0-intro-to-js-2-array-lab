let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to a new array based on the original cats array
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to a new array based on the original cats array
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from a new array based on the original cats array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from a new array based on the original cats array
function removeFirstCat() {
  return cats.slice(1);
}
