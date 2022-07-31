// Iterator Example
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length 
            ? {value: names[nextIndex++], done: false}
            : {done: true}
        }
    }    
}


// Create an array of names
const namesArr = ['Jack', 'Jill', 'John']

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value); // Jack
console.log(names.next().value); // Jill
console.log(names.next().value); // John
console.log(names.next().value); // undefined

////////////////////////////////////////////////////


// Generator Example
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name1 = sayNames();
console.log(name1.next().value); // Jack
console.log(name1.next().value); // Jill
console.log(name1.next().value); // John
console.log(name1.next().value); // undefined


// ID Creator
function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);