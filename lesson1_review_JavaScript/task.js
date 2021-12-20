const arrays = [
  {
    id: 1,
    name: 'user 1',
    age: 22,
  },
  {
    id: 2,
    name: 'user 2',
    age: 21,
  },
  {
    id: 3,
    name: 'user 3',
    age: 23,
  },
  {
    id: 4,
    name: 'user 4',
    age: 24,
  },
];

//Task 1: Add mới 1 user vào đầu mảng
var newBeginUser = {
  id: 0,
  name: 'user 0',
  age: 20,
};

//Use unshift to add new user in beginning array
arrays.unshift(newBeginUser);

console.log('New user:');
console.log(newBeginUser);
console.log('Arrays after adding new user in beginning array:');
console.log(arrays);

//Task 2: Add mới 1 user vào cuối mảng
var newEndUser = {
  id: 5,
  name: 'user 5',
  age: 21,
};

//Use push to add new user in ending array
arrays.push(newEndUser);

console.log('New user:');
console.log(newEndUser);
console.log('Array after adding new user in ending array:');
console.log(arrays);

//Task 3: add nhiều user vào mảng

var user1 = {
  id: 6,
  name: 'Hồ Thị Khưa',
  age: 20,
};

var user2 = {
  id: 7,
  name: 'Hồ Thị Lương',
  age: 21,
};

arrays.push(user1, user2);
console.log('Array after adding multiple users:');
console.log(arrays);

// Task 4: xoá 1 user ra khỏi mảng
//shift/pop - remove and return the first/last element of an array
arrays.pop();

console.log(arrays);

//Task 5: Lọc ra các user có age >= 22
var filter = arrays.filter(function (obj) {
  return obj.age >= 22;
});
console.log('Filter users are age >=22');
console.log(filter);

//Task 6:Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
arrays.forEach((element) => {
  element.class = 'pnv22';
});

console.log('Array after having new field "class":');
console.log(arrays);

//Task 7: Tìm ra 1 user có age = 23
function search(userArray) {
  for (var i = 0; i < userArray.length; i++) {
    if (userArray[i].age === 23) {
      return userArray[i];
    }
  }
}
var result = search(arrays);
console.log(result);

//Task 8: Sử dụng vòng lặp for để lấy ra các user có age >= 23
const resultt = [];
for (var i = 0; i < arrays.length; i++) {
  if (arrays[i].age > 23 || arrays[i].age === 23) {
    resultt.push(arrays[i]);
  }
}
console.log('Find all users are age >=23: ');
console.log(resultt);

//Task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
const resultId = [];
for (let i = 0; i < arrays.length; i++) {
  for (let j = 0; j < arrayIds.length; j++) {
    if (arrays[i].id === arrayIds[j]) {
      resultId.push(arrays[i]);
    }
  }
}

console.log('Result is: ');
console.log(resultId);

//Task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
function sort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let temp = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].age < array[temp].age) {
        temp = j;
      }
    }

    let t = array[i].age;
    array[i].age = array[temp].age;
    array[temp].age = t;
  }
}

sort(arrays);
console.log('Array after sorting is: ');
console.log(arrays);

//Task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)

for (let i = 0; i < arrays.length; i++) {
  arrays[i].class = arrays[i].class.toUpperCase();
}

console.log(arrays);

//Task 12:Lấy ra phần tử cuối cùng của mảng trên

let lastElement = arrays[arrays.length - 1];
console.log('The last element of above array');
console.log(lastElement);

//Task 13: Lấy ra phần tử đầu tiên của mảng trên
let firstElement = arrays[0];
console.log('The first element of above array');
console.log(firstElement);

//Task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ['Gà', 'vịt'];
const array2 = ['vịt', 'Chó'];

var array3 = Array.from(new Set(array1.concat(array2)));
console.log(array3);

// -----------------------------------
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

//Task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
console.log('Key from person array is: ');
console.log(Object.keys(person));

//Task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
console.log('Values from person array is: ');
console.log(Object.values(person));

//Task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
console.log('Convert above object into array is: ');
console.log(Object.entries(person));

//Task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
person.age = 100;
console.log('Values from person array is: ');
console.log(Object.values(person));

//Task 19:cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
console.log('Convert array to object:');
console.log(Object.assign({}, ['a', 'b', 'c']));

//Task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
console.log(arrBoolean.every((v) => v === true));

//Task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
const student = {
  name: 'Ho Thi Khua',

  get getName() {
    return this.name;
  },

  set setName(name) {
    this.name = name;
  },
};
console.log(student.getName);

student.setName = 'Ho Thi Luong';
console.log(student.name);

//Task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
  var user = 'Hello ' + user.name + ' - age: ' + user.age;
  return user;
};

var result2 = newFunction(arrays[1]);
console.log(result2);

//Task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
console.log('Làm tròn lên: ' + Math.ceil(numb));
// let numb = 1.4; //=> làm tròn lên số bên.  result mong đợi = 1
console.log('Làm tròn xuống: ' + Math.floor(numb));

//Task 24: Thực hiện nối chuỗi giữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let namee = 'user';
let age = 21;
let className = 'classAbc';
// let resultText = 'name'.concat(': ', namee, ' - age: ', age, ' - class:', className);
let text = 'name: ' + namee + ' - age: ' + age + ' - class: ' + className;
console.log(text);

//Task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberResult = 0;
for (let i = 0; i < arrNumber.length; i++) {
  numberResult += arrNumber[i];
}

console.log('result = ' + numberResult);
