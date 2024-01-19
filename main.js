// Task 1
let Srt1 = "Привет, Мир";
console.log("Выведет букву И: " + Srt1[2])

// Task 2
Srt2 = Srt1.replace("Мир", "Друг")
console.log(Srt2);

// Task 3
let arr1 = ['cat', 'dog', 'parrot', 'horse']
console.log(arr1.indexOf("parrot"))

// Task 4
let arr2 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
arr2.splice(0,1)
arr2.splice(3, 3)
console.log(arr2)

// Task 5
let arr3 = [31, 10, 'chicken', 9, 'fish', 10];

let strArr = arr3.filter(item => typeof item === 'string');
console.log(strArr);

let numArr = arr3.filter(item => item === 10);
console.log(numArr);
