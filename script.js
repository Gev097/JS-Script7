//////////////////////////////////////////////////////////////////////////////

// Напишите код, чтобы вы могли
// вызвать метод array.last() для любого массива,
// и он вернет последний элемент.
// Если в массиве нет элементов, он должен вернуть -1
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
}

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.last()); 

let arr2 = [];
console.log(arr2.last()); 

//////////////////////////////////////////////////////////////////////////////

//1.    Перевернуть строку Написать функцию, которая 
//принимает строку и возвращает ее в обратном порядке.
// Например, если входная строка "hello", то функция должна вернуть "olleh".

function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = "hello";
let reversedString = reverseString(inputString);

console.log(reversedString);

//////////////////////////////////////////////////////////////////////////////

//2.    Найти наибольшее число в массиве Написать 
//функцию, которая принимает массив чисел и возвращает 
//наибольшее число в массиве. Например, если входной 
//массив [4, 2, 7, 1, 9], то функция должна вернуть 9.


function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }
  
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}
let inputArray = [4, 2, 7, 1, 9];
let largestNumber = findLargestNumber(inputArray);

console.log(largestNumber);

//////////////////////////////////////////////////////////////////////////////


//3.    Реализовать функцию подсчета суммы элементов в 
//массиве Написать функцию, которая принимает массив 
//чисел и возвращает сумму всех элементов в массиве. 
//Например, если входной массив [2, 4, 6], то функция должна вернуть 12.

function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

let inputArray = [2, 4, 6];
let sumOfElements = sumArray(inputArray);

console.log(sumOfElements); 

//////////////////////////////////////////////////////////////////////////////


//4.    Реализовать функцию поиска дубликатов в массиве
//Написать функцию, которая принимает массив и возвращает
// новый массив, содержащий только уникальные элементы из 
// входного массива. Например, если входной массив
// [1, 2, 2, 3, 4, 4, 5], то функция должна вернуть [1, 2, 3, 4, 5].

function uniqueElements(arr) {

    let uniqueSet = new Set(arr);

    return Array.from(uniqueSet);
}

let inputArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = uniqueElements(inputArray);

console.log(uniqueArray); 

//////////////////////////////////////////////////////////////////////////////


//5.    Найти первое неповторяющееся число в 
//массиве Написать функцию, которая принимает массив 
//чисел и возвращает первое число в массиве, которое 
//не повторяется. Например, если входной 
//массив [1, 2, 3, 2, 4, 1], то функция должна вернуть 3.

function firstNonRepeatingNumber(arr) {
    const numberCount = {};

    for (let i = 0; i < arr.length; i++) {
        if (numberCount[arr[i]] !== undefined) {
            numberCount[arr[i]]++;
        } else {
            numberCount[arr[i]] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (numberCount[arr[i]] === 1) {
            return arr[i];
        }
    }

    return null;
}
let inputArray = [1, 2, 3, 2, 4, 1];
let firstUniqueNumber = firstNonRepeatingNumber(inputArray);

console.log(firstUniqueNumber); 

//////////////////////////////////////////////////////////////////////////////