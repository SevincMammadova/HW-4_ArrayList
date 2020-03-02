describe('ArrayList', () => {
    describe('ArrayList defined', () => {
        it('object \'ArrayList\' defined', () => {
            assert.isDefined(ArrayList);
        });
    })

    describe('init defined', () => {
        it('function init defined', () => {
            assert.isDefined(ArrayList.init);
        });
    })

    describe('addAtEnd', () => {
        it('addAtEnd defined', () => {
            assert.isDefined(ArrayList.addAtEnd);
        });

        it('should be return \'please input a right data!\' when element = null', () => {
            const array = [0, 4, 8];
            const element = null;
            const expected = 'please input a right data!';
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
        });

        it('should be return \'please input a right data!\' when element = undefined', () => {
            const array = [0, 4, 8];
            const element = null;
            const expected = 'please input a right data!';
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
        });

        it('should be return result when element = 0, size = 4', () => {
            const array = [0, 4, 8];
            const element = 0;
            const expected= [0, 4, 8, 0];
            const expectedSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = -8, size = 4', () => {
            const array = [0, 4, 8];
            const element = -8;
            const expected= [0, 4, 8, -8];
            const expectedSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = " ", size = 4', () => {
            const array = [0, 4, 8];
            const element = ' ';
            const expected= [0, 4, 8, ' '];
            const expectedSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = 2, size = 1', () => {
            const array = [];
            const element = 2;
            const expected= [2];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = -8, size = 1', () => {
            const array = [];
            const element = -8;
            const expected= [ -8];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when element = [], size = 4', () => {
            const array = [0, 4, 8];
            const element = [];
            const expected= [0, 4, 8, []];
            const expectedSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(element);

            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('removeFromEnd', () => {
        it('removeFromEnd defined', () => {
            assert.isDefined(ArrayList.removeFromEnd)
        });

        it('should be return result when array = [null], element = null, size 0', () => {
            const array = [null];
            const element = null;
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.removeFromEnd(element);
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when array = [1, undefined], element = undefined, size 1', () => {
            const array = [1,undefined];
            const element = undefined;
            const expected = [1];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.removeFromEnd(element);
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when array = [0, 9, 8], element = 8, size 2', () => {
            const array = [0, 9, 8];
            const element = 8;
            const expected = [0, 9];
            const expectedSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.removeFromEnd(element);
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should be return result when array = [0, \' \'], element = \' \', size 1', () => {
            const array = [0,' '];
            const element = ' ';
            const expected = [0];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.removeFromEnd(element);
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('cleanOutArray', () => {
        it('cleanOutArray', () => {
            assert.isDefined(ArrayList.cleanOutArray);
        });

        it('should return result when array = [9, 5, 5],size = 0', () => {
            const array = [9, 5, 5];
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.cleanOutArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [],size = 0', () => {
            const array = [];
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.cleanOutArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [ ],size = 0', () => {
            const array = [ ];
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.cleanOutArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [\'phrase\'], size = 0', () => {
            const array = ['phrase'];
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.cleanOutArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });

        it('should return result when array = [\'\'],size = 0', () => {
            const array = [''];
            const expected = [];
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.cleanOutArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(actual.length, expectedSize);
        });
    })

    describe('removeFromStart', () => {
        it('removeFromStart defined', () => {
            assert.isDefined(ArrayList.removeFromStart);
        });

        it('should return result when array = [9, 8, 8], element = 9, size = 2', () => {
            const array = [9, 8, 8];
            const expected = 9;
            const expectedSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.removeFromStart();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);
        });

        it('should return result when array = [1], element = 1, size = 0', () => {
            const array = [1];
            const expected = 1;
            const expectedSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.removeFromStart();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);
        });

        it('should return result when array = [1, \'ty\', 9], element = 1, size = 2', () => {
            const array = [1, 'ty', 9];
            const expected = 1;
            const expectedSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.removeFromStart();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);
        });
    }) 

    describe('addFromStart', () => {
        it('addFromStart defined', () => {
            assert.isDefined(ArrayList.addFromStart);
        });

        it('should return result when element = 9, size = 1', () => {
            const array = [1];
            const expected = [9, 1];
            const expectedSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(9);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = [], size = 6', () => {
            const array = [1, 9, 5, 6, 3];
            const expected = [[], 1, 9, 5, 6, 3];
            const expectedSize = 6;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart([]);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = null, size = 5', () => {
            const array = [1, 9, 5, 6, 3];
            const expected = "Wrong input!";
            const expectedSize = 5;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(null);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = undefined, size = 5', () => {
            const array = [1, 9, 5, 6, 3];
            const expected = "Wrong input!";
            const expectedSize = 5;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(undefined);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = -1, size = 6', () => {
            const array = [1, 9, 5, 6, 3];
            const expected = [-1, 1, 9, 5, 6, 3];
            const expectedSize = 6;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(-1);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = 1, size = 3', () => {
            const array = [1, 9];
            const expected = [1, 1, 9];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(1);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = 0, size = 3', () => {
            const array = [1, 9];
            const expected = [0, 1, 9];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.addFromStart(0);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });
    })

    describe('reverseArray', () => {
        it('reverseArray defined', () => {
            assert.isDefined(ArrayList.reverseArray);
        });

        it('should return result when array = [0, 2, 3]', () => {
            const array = [0, 2, 3];
            const expected = [3, 2, 0];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when array = [-1, 2, 3]', () => {
            const array = [-1, 2, 3];
            const expected = [3, 2, -1];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when array = [2]', () => {
            const array = [2];
            const expected = [2];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when array = [[], 2, 3]', () => {
            const array = [[], 2, 3];
            const expected = [3, 2, []];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when array = [[2], 2, 3]', () => {
            const array = [[2], 2, 3];
            const expected = [3, 2, [2]];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when array = [\'f\', \'k\', \'u\']', () => {
            const array = ['f', 'k', 'u'];
            const expected = ['u', 'k', 'f'];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.reverseArray();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });
    })

    describe('indexOfArr',() => {
        it('indexOfArr defined', () => {
            assert.isDefined(ArrayList.indexOfArr);
        });

        it('should return result \'Wrong input!\'  when element = null', () => {
            const array = [0, 2, 3];
            const expected = 'Wrong input!';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result \'Wrong input!\'  when element = undefined', () => {
            const array = [0, 2, 3];
            const expected = 'Wrong input!';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = 10', () => {
            const array = [10, 2, 3];
            const expected = 0;
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr(10);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = 0', () => {
            const array = [10, 2, 3];
            const expected = -1;
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr(0);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = -1', () => {
            const array = [10, 2, 3];
            const expected = -1;
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr(-1);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = -1', () => {
            const array = [10, -1, 3];
            const expected = 1;
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr(-1);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result when element = []', () => {
            const array = [0, 2, 3];
            const expected = -1;
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.indexOfArr([]);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });
    })

    describe('includeOfArr', () => {
        it('includeOfArr defined', () => {
            assert.isDefined(ArrayList.includeOfArr);
        });

        it('should return result false  when element = null', () => {
            const array = [0, 2, 3];
            const expected = 'false';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result false when element = undefined', () => {
            const array = [0, 2, 3];
            const expected = 'false';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr();
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result true when element = 2', () => {
            const array = [0, 2, 3];
            const expected = 'true';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr(2);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result true when element = 0', () => {
            const array = [0, 2, 3];
            const expected = 'true';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr(0);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result false when element = \'\'', () => {
            const array = [0, 2, 3];
            const expected = 'false';
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr('');
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });

        it('should return result true when element = \'\'', () => {
            const array = [0, 2, 3, ''];
            const expected = 'true';
            const expectedSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.includeOfArr('');
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize); 
        });
    })

    describe('arrayToString', () => {
        it('arrayToString defined', () => {
            assert.isDefined(ArrayList.arrayToString);
        });

        it('should return result when array = [1, 3, 6]', () => {
            const array = [1, 3, 6];
            const expected = ['1,3,6'];
            const expectedSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.arrayToString(array);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);  
        });

        it('should return result when array = [6]', () => {
            const array = [6];
            const expected = ['6'];
            const expectedSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.arrayToString(array);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);  
        });

        it('should return result when array = [6,\'o\']', () => {
            const array = [6,'o'];
            const expected = ['6,o'];
            const expectedSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.arrayToString(array);
            assert.deepEqual(actual, expected);
            assert.deepEqual(ArrayList.array.length, expectedSize);  
        });
    })
})