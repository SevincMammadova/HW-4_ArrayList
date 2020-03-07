describe('ArrayList', () => {
    describe('ArrayList', () => {
        it('ArrayList defined', () =>{
            assert.isDefined(ArrayList);
        });
    })

    describe('init',() => {
        it('init defined',() => {
            assert.isDefined(ArrayList.prototype.init);
        });

        it('should return result \'Wrong input!\' when !array ==> arr = \'\' ', () => {
            const arr = '';
            const expected = 'Wrong input!';

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Wrong input!\' when !array ==> arr = null', () => {
            const arr = null;
            const expected = 'Wrong input!';

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Wrong input!\' when !array ==> arr = undefined', () => {
            const arr = undefined;
            const expected = 'Wrong input!';

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result = array  when arr = [5, 6, 9]', () => {
            const arr = [5, 6, 9];
            const expected = [5, 6, 9];

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result = array  when arr = [5]', () => {
            const arr = [5];
            const expected = [5];

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result = array  when arr = [5, 6]', () => {
            const arr = [5, 6];
            const expected = [5, 6];

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result = array  when arr = [5,\'5\']', () => {
            const arr = [5, '5'];
            const expected = [5, '5'];

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result = array  when arr = []', () => {
            const arr = [];
            const expected = [];

            const actual = ArrayList.prototype.init(arr);

            assert.deepEqual(actual, expected);
        });
    })

    describe('addAtEnd',() => {
        it('addAtEnd defined', () => {
            assert.isDefined(ArrayList.prototype.addAtEnd);
        });

        it('should be return result when element = 1, size = 4', () => {
            const array = [0, 4, 8];
            const element = 1;
            const expected= [0, 4, 8, 1];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = null', () => {
            const array = [];
            const element = null;
            const expectedArr= 'Wrong input!';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expectedArr);
        });

        it('should be return result when element = undefined', () => {
            const array = [];
            const element = undefined;
            const expectedArr= 'Wrong input!';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expectedArr);
        });

        it('should be return result when element = 0, size = 4', () => {
            const array = [0, 4, 8];
            const element = 0;
            const expected= [0, 4, 8, 0];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = [], size = 4', () => {
            const array = [0, 4, 8];
            const element = [];
            const expected= [0, 4, 8, []];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = \'Im tired\', size = 4', () => {
            const array = [0, 4, 8];
            const element = 'Im tired';
            const expected= [0, 4, 8, 'Im tired'];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('removeFromEnd',() => {
        it('removeFromEnd defined', () => {
            assert.isDefined(ArrayList.prototype.removeFromEnd);
        });

        it('should return result [4, 6] when arr = [4, 6, 9]',() => {
            const array = [4, 6, 9];
            const expected = [4, 6];
            const expectedSize = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromEnd();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result [4] when arr = [4, 6]',() => {
            const array = [4, 6];
            const expected = [4];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromEnd();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result [] when arr = [4]',() => {
            const array = [4];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromEnd();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result [4] when arr = [4,[]]',() => {
            const array = [4,[]];
            const expected = [4];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromEnd();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result [\'hello\'] when arr = [\'hello\',\'friends\']',() => {
            const array = ['hello', 'friends'];
            const expected = ['hello'];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromEnd();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('cleanOutArray', () => {
        it('cleanOutArray defined',() => {
            assert.isDefined(ArrayList.prototype.cleanOutArray);
        });

        it('should return result when array = [1, 6, 9, 8]', () => {
            const array = [1, 6, 9, 8];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.cleanOutArray();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [1, 6]', () => {
            const array = [1, 6];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.cleanOutArray();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = []', () => {
            const array = [];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.cleanOutArray();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [\'Home\', \'sweet\', \'Home\']', () => {
            const array = ['Home', 'sweet', 'Home'];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.cleanOutArray();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('removeFromStart',() => {
        it('removeFromStart defined', () => {
            assert.isDefined(ArrayList.prototype.removeFromStart);
        });

        it('should return result when array = [4, 6, 9, 8]',() => {
            const array = [4, 6, 9, 8];
            const expected = [6, 9, 8];
            const expectedSize = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [4, 6]',() => {
            const array = [4, 6];
            const expected = [6];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
        
        it('should return result when array = [\'hi\', 6]',() => {
            const array = ['hi', 6];
            const expected = [6];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [null, 6]',() => {
            const array = [null, 6];
            const expected = [6];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = undefined',() => {
            const array = undefined;
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = null',() => {
            const array = null;
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [5]',() => {
            const array = [5];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.removeFromStart();

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('addFromStart', () => {
        it('addFromStart defined', () => {
            assert.isDefined(ArrayList.prototype.addFromStart);
        });

        it('should return \' Please input a right data!\' when element = null', () => {
            const array = [];
            const element = null;
            const expected = 'Please input a right data!';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
        });

        it('should return \' Please input a right data!\' when element = undefined', () => {
            const array = [];
            const element = undefined;
            const expected = 'Please input a right data!';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when element = 4, array = []', () => {
            const array = [];
            const element = 4;
            const expected = [4];
            const expectedSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result  when element = 4, array = [1]', () => {
            const array = [1];
            const element = 4;
            const expected = [4,1];
            const expectedSize = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result  when element = 4, array = [1,6,9]', () => {
            const array = [1,6,9];
            const element = 4;
            const expected = [4,1,6,9];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result  when element = \'4\', array = [1,6,9]', () => {
            const array = [1,6,9];
            const element = '4';
            const expected = ['4',1,6,9];
            const expectedSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFromStart(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('reverseArray', () => {
        it('reverseArray defined', () => {
            assert.isDefined(ArrayList.prototype.reverseArray);
        });

        it('should return result when arr undefined', () => {
            const arr = undefined;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr = null', () => {
            const arr = null;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result when arr = []', () => {
            const arr = [];
            const expected = [];
            const expectedSize = 0;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [5]', () => {
            const arr = [5];
            const expected = [5];
            const expectedSize = 1;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [\'hello\']', () => {
            const arr = ['hello'];
            const expected = ['hello'];
            const expectedSize = 1;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [4, 6]', () => {
            const arr = [4, 6];
            const expected = [6, 4];
            const expectedSize = 2;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [0]', () => {
            const arr = [0];
            const expected = [0];
            const expectedSize = 1;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [4, 6, 9, 12, \'cat\', null]', () => {
            const arr = [4, 6, 9, 12, 'cat', null];
            const expected = [null, 'cat', 12, 9, 6, 4];
            const expectedSize = 6;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when arr = [4, [5,6]]', () => {
            const arr = [4, [5, 6]];
            const expected = [[5, 6], 4];
            const expectedSize = 2;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.reverseArray(arr);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('indexOfArr', () => {
        it('indexOfArr defined', () => {
            assert.isDefined(ArrayList.prototype.indexOfArr);
        });

        it('should return result \'Wrong input!\' when element = null', () => {
            const arr = [4,6];
            const element = null;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(null);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Wrong input!\' when element = undefined', () => {
            const arr = [4,6];
            const element = undefined;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(null);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 4, arr = [4,6]', () => {
            const arr = [4,6];
            const element = 4;
            const expected = 0;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 0, arr = [4,6]', () => {
            const arr = [4,6];
            const element = 0;
            const expected = '-1';
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 4, arr = [4,6,4]', () => {
            const arr = [4,6,4];
            const element = 4;
            const expected = 0;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 4, arr = [\'four\', 5, 6, 4]', () => {
            const arr = ['four', 5, 6, 4];
            const element = 4;
            const expected = 3;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 4, arr = [5,6,9]', () => {
            const arr = [5, 6, 9];
            const element = 4;
            const expected = '-1';
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 4, arr = []', () => {
            const arr = [];
            const element = 4;
            const expected = '-1';
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.indexOfArr(element);

            assert.deepEqual(actual, expected);
        });
    })

    describe('includeOfArr', () => {
        it('includeOfArr defined', () => {
            assert.isDefined(ArrayList.prototype.includeOfArr);
        });

        it('should return result \'Wrong input!\' when element = null', () => {
            const arr = [4,6];
            const element = null;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Wrong input!\' when element = undefined', () => {
            const arr = [4,6];
            const element = undefined;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 0', () => {
            const arr = [4,6,0];
            const element = 0;
            const expected = true;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 5, arr = [4, 6, 0, 5]', () => {
            const arr = [4, 6, 0, 5];
            const element = 5;
            const expected = true;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 5, arr = [4, 6, 0]', () => {
            const arr = [4, 6, 0];
            const element = 5;
            const expected = false;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 5, arr = []', () => {
            const arr = [];
            const element = 5;
            const expected = false;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = 5, arr = [4]', () => {
            const arr = [4];
            const element = 5;
            const expected = false;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });

        it('should return result when element = \'4\', arr = [4, 6, 0, \'4\']', () => {
            const arr = [4, 6, 0, '4'];
            const element = '4';
            const expected = true;
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.includeOfArr(element);

            assert.deepEqual(actual, expected);
        });
    })

    describe('arrayToString', () => {
        it('arrayTostring defined', () => {
            assert.isDefined(ArrayList.prototype.arrayToString);
        });

        it('should return result \'Wrong input!\' when arr = null', () => {
            const arr = null;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result \'Wrong input!\' when arr = undefined', () => {
            const arr = undefined;
            const expected = "Wrong input!";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when arr = []', () => {
            const arr = [];
            const expected = "";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when arr = [0]', () => {
            const arr = [0];
            const expected = "0";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when arr = [1, 2]', () => {
            const arr = [1, 2];
            const expected = "1,2";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when arr = [1, 2, 3]', () => {
            const arr = [1, 2, 3];
            const expected = "1,2,3";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return result  when arr = [\'cat\', \'and\', \'dog\']', () => {
            const arr = ['cat', 'and', 'dog'];
            const expected = "cat,and,dog";
            ArrayList.prototype.init(arr);

            const actual = ArrayList.prototype.arrayToString(arr);

            assert.deepEqual(actual, expected);
        });
    })
})