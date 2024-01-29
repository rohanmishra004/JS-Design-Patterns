// ITERATOR DESIGN PATTERN

const arr = ['User', 1, false,1.34]


function Iterator(items) {
    this.items = items;
    this.index = 0
}


//This is just a simple forward iterator , we can add different conditions to it
Iterator.prototype = {
    //Iterator needs to have two function - hasNext - check if there is a next value , Next - move to the next index
    hasNext: function () {
        return this.index < this.items.length
    },
    next: function () {
        return this.items [this.index++]
    }
}


const iter = new Iterator(arr)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())