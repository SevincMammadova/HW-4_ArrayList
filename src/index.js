let ArrayList = {
    array: [],
    size: 0,
    addAtEnd: function(element) {
        if(!element && element !== 0) {
            return "please input a right data!";
        }

        let arr = ArrayList.array;
        arr[arr.length] = element;
    },
    init: function (arr) {
        ArrayList.array = arr;
        ArrayList.size = arr.length;
    },

    removeFromEnd: function() {
        let removeArray = ArrayList.array;
        ArrayList.size = removeArray.length;
        removeArray.length = [removeArray.length - 1];
        
        return removeArray;
    },

    cleanOutArray: function() {
        let array2 = ArrayList.array;
        array2.length = 0;
        ArrayList.size = array2.length;

        return array2;  
    },

    removeFromStart: function() {
        const arrayShift = ArrayList.array;
        const arr = [];

        for (let i = 1; i < arrayShift.length; i++) {
            arr[i - 1] = arrayShift[i];
        };
        ArrayList.array = arr;
        ArrayList.size -= 1;

        return arrayShift[0];
    },

    addFromStart: function(element) {
        if (!element && element !== 0) {
            return "Wrong input!";
        };

        let arrayUnshift = ArrayList.array;
        ArrayList.size = arrayUnshift.length;
        let arr = [element];

        for (i = 0; i < arrayUnshift.length; i++) {
            arr[i + 1] = arrayUnshift[i];
        };
        ArrayList.array = arr;
        ArrayList.size += 1;
        
        return arr;
    },

    reverseArray: function(array) {
        let arrayReverse = ArrayList.array;
        let arr = [];

        for (let i = arrayReverse.length - 1; i >= 0; i--) {
           arr[arr.length] = arrayReverse[i];

        }
        ArrayList.array = arr;
        ArrayList.size = arrayReverse.length;
        
        return arr;
    },

    indexOfArr: function(index) {
        if (!index && index !== 0) {
            return "Wrong input!"
        };

        let arrayIndex = ArrayList.array;
        ArrayList.size = arrayIndex.length;

        for (i = 0; i < arrayIndex.length; i++) {
            if (index === arrayIndex[i]) {
                return i;
            };
        };

        return -1;
    },

    includeOfArr: function(element) {
        let arrayInclude = ArrayList.array;
        ArrayList.size = arrayInclude.length;

        for (i = 0; i < arrayInclude.length; i++) {
            if (element === arrayInclude[i]) {
                
                return 'true';
            } 
        };

        return 'false';
    },

    arrayToString: function(arr) {
        if (typeof arr !== 'object') {
            return "Wrong input!";
        };
        let arrString = ArrayList.array;
        ArrayList.size = arrString.length;

        return ['' + arrString];
    },
}  

 
