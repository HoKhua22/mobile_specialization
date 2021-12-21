// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
//Chuyển 1 chuỗi sang 1 mảng các ký tự, sử dụng phương thức reverse() để đảo ngược mảng, dùng phương thức join để gộp các phần tử mảng thành 1 chuỗi
function reverseString(string) {
  return string.split('').reverse().join('');
}
var text = reverseString('hothikhua');
console.log(text);
// task 2: Viết hàm đệ quy đảo ngược chuỗi.
function reverseString2(string) {
  return string === '' ? '' : reverseString(substr(1)) + charAt(0);
}
var text2 = reverseString('hothikhua');
console.log(text2);
// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
const arr = ['a', 'b', 'c', 'd'];
function reverseArr(arr) {
  return arr.reverse();
}

console.log(reverseArr(arr));
// task 4: viết hàm đệ quy đảo ngược một mảng
const arr2 = ['a', 'b', 'c', 'd'];
// const recursiveRev = (arr) =>
//   arr.length === 0 || arr.length === 1
//     ? arr
//     : arr
//         .slice(arr.length - 1)
//         .concat(recursiveRev(arr.slice(-arr.length, -1)));
function reverseArr2(myArr) {
  if (myArr.length === 0) return myArr;
  return reverseArr2(myArr.slice(1)).concat(myArr[0]);
}
console.log('Result:' + reverseArr2(arr2));
// task5: viết hàm đệ quy tính tổng
const arrsum = [1, 2, 3, 4, 5];
function sum(arrsum) {
  if (arrsum.length === 0) {
    return 0;
  }
  const [x, ...xs] = arrsum;
  return x + sum(xs);
}

console.log(sum(arrsum));
// task 6: Viết hàm đệ quy để biết một số là số nguyên tố
// function isPrime(num, n = 3) {
//   if (num === 2) return true;
//   if (num < 2 || num % 2 === 0) return false;
//   if (n * n > num) return true;
//   if (num % n === 0) return false;
//   return isPrime(num, n + 2);
// }
// console.log(isPrime(3));

function isPrime2(num, n = 2) {
  if (num <= 2) return num === 2 ? true : false;
  if (num % n === 0) return false;
  if (n * n > num) return true;
  return isPrime2(num, n + 1);
}
console.log(isPrime2(3));
// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh
const student = [];
class Student {
  constructor(id, name, classes) {
    this.id = id;
    this.name = name;
    this.classes = classes;
  }
  static addStudent(arrStudent, id, name, classes) {
    const found = arrStudent.some((el) => el.id === id);
    if (found) {
      return arrStudent;
    } else {
      arrStudent.push(new Student(id, name, classes));
      return arrStudent;
    }
  }
  // static updateStudent(arrStudent, id, name, classes) {
  //   const found = arrStudent.some((el) => el.id === id);
  //   if (found) {
  //     arrStudent[id].setName = name;
  //     // arrStudent[id].classes = classes;
  //     return arrStudent;
  //   } else {
  //     return console.log('Giá trị ko tồn tại');
  //   }
  // }
  set setName(name) {
    this.name = name;
  }
  set setClasses(classes) {
    this.classes = classes;
  }
  remove() {}
}

Student.addStudent(student, 1, 'Khua', 'PNV22A');
Student.addStudent(student, 2, 'Khua2', 'PNV22A');
Student.addStudent(student, 2, 'Khua2', 'PNV22A');
Student.addStudent(student, 3, 'Khua3', 'PNV22A');
console.log(student);
// Student.updateStudent(student, 3, 'Khua4', 'PNV22B');
