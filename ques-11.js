Array.prototype.customSlice = function(start, end) {
    let slicedArr = [];
    start = (start >= 0) ? start : Math.max(this.length + start, 0);
    end = (end >= 0) ? end : Math.max(this.length + end, 0);

    for (let i = start; i < end; i++) {
        if (i < this.length) {
            slicedArr.push(this[i]);
        }
    }
    return slicedArr;
};

Array.prototype.customSplice = function(start, deleteCnt, ...items) {
    if (start < 0) start = this.length + start;
    deleteCnt = Math.min(deleteCnt, this.length - start);
    let deletedItems = this.customSlice(start, start + deleteCnt);
    
    let startArr = this.customSlice(0, start);
    let endArr = this.customSlice(start + deleteCnt, this.length);
    let newArray = startArr.concat(items, endArr);
    this.length = 0;
    for (let item of newArray) {
        this.push(item);
    }
    
    return deletedItems;
};

Array.prototype.customPush = function(...items) {
    let initialLen = this.length;
    for (let item of items) {
        this[initialLen++] = item;
    }
    this.length = initialLen;
    return this.length;
};

Array.prototype.customPop = function() {
    if (this.length === 0) return;
    let lastItem = this[this.length - 1];
    this.length--;
    return lastItem;
};

Array.prototype.customMap = function(callback) {
    let mappedArr = [];
    for (let i = 0; i < this.length; i++) {
        mappedArr.push(callback(this[i], i, this));
    }
    return mappedArr;
};

Array.prototype.customFilter = function(callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

Array.prototype.customReduce = function(reducer, initialVal) {
    let accu = initialVal !== undefined ? initialVal : this[0];
    let startInd = initialVal !== undefined ? 0 : 1;
    for (let i = startInd; i < this.length; i++) {
        accu = reducer(accu, this[i], i, this);
    }
    return accu;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.customSlice(1, 3));
console.log(arr.customSplice(2, 0, 6));
console.log(arr.customPush(6, 7));
console.log(arr.customPop());
console.log(arr.customMap(x => x * 2));
console.log(arr.customFilter(x => x % 2 === 0));
console.log(arr.customReduce((acc, cur) => acc + cur, 0));
