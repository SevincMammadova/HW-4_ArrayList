function ArrayList(array) {
    this.array = [];
    this.size = 0;
}

ArrayList.prototype.init = function(arr) {
    if(!arr) {
        return "Wrong input!";
    };
    
    this.array = arr;
    this.size = arr.length;

    return arr;
}

ArrayList.prototype.addAtEnd = function(element) {
    if (!element && element !== 0) {
        return 'Wrong input!';
    }

    const arr = this.array;

    arr[arr.length] = element;
    this.size = arr.length;

    return arr;
};

ArrayList.prototype.removeFromEnd = function() {
    const arr = this.array;

    arr.length = [arr.length - 1];
    this.size = arr.length;

    return this.array;
}

ArrayList.prototype.cleanOutArray = function() {
    let arr = this.array;

    arr.length = 0;
    this.size = 0;

    return arr;
}

ArrayList.prototype.removeFromStart = function() {
    const arr = this.array;
    const array = [];

    for (i = 1; i < arr.length; i++) {
        array[i - 1] = arr[i];
    }

    this.array = array;
    this.size -= 1;
    
    return array;
}

ArrayList.prototype.addFromStart = function(element) {
    if (!element && element !== 0) return 'Please input a right data!';

    const array = this.array;
    const arr = [element];

    for (i = 0; i < array.length; i++) {
        arr[i+1] = array[i];
    }
    this.array = arr;
    this.size += 1;

    return arr;
}

ArrayList.prototype.reverseArray = function(array) {
    if (!array) return "Wrong input!";

    const myArray = this.array;
    const arr = [];

    for (i = myArray.length - 1; i >= 0; i--) {
        arr[arr.length] = myArray[i];
    }

    this.array = arr; //не получилось использовать способ с инициализацией на месте, который отметил Муса при проверке дз
    this.size = arr.length;

    return this.array;
}

ArrayList.prototype.indexOfArr = function(element) {
    if(!element && element !== 0) return 'Wrong input!';

    const myArray = this.array;

    for (i = 0; i <= myArray.length; i++) {
        if (element === myArray[i]) {
            
            return i;
        };
        
        this.size = myArray.length
    }

    return '-1'; 
}

ArrayList.prototype.includeOfArr = function(element) {
    if (!element && element !== 0) return "Wrong input!";

    const myArr = this.array;

    for (i = 0; i <= myArr.length; i++) {
        if (element === myArr[i]) return true;
    }

    return false;
}

ArrayList.prototype.arrayToString = function (myArr) {
    if (!myArr) return 'Wrong input!';

    const arr = this.array;

    return '' + arr;
}
