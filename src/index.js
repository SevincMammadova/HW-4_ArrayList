// let ArrayList = {
//     array: [],
//     size: 0,
//     init: function(arr2) {
//         ArrayList.array = arr2;
//         ArrayList.size = arr2.length;
//     },
    
//     addAtEnd: function(arrElm) {
//         let arr = ArrayList.array;
//         arr[arr.length] = arrElm;
//         ArrayList.size = arr.length;

//         return arr;
//     },

//     cleanOutArray: function() {
//         let array2 = ArrayList.array;
//         array2.length = 0;
//         ArrayList.size = array2.length;

//         return array2;
//     }
// }

// let myArray = [1, 2, 3]
// ArrayList.addAtEnd()




// let array = {
//     name: "ilya",
//     age: 30,
// }

// console.log(array);


let ArrayList = {
    array: [],
    size: 0,
    init: function (arr) {
        ArrayList.array = arr;
        ArrayList.size = arr.length;
    },

    methodPop: function (deleteElm) {
        let array1 = ArrayList.array;
        array1[array1.length] = array1.length - 1;
        ArrayList.size = array1.length;

        return array1;
        
    },
}

let myArray = [1, 2, 3];
ArrayList.methodPop(myArray.length - 1);
console.log(myArray);

 