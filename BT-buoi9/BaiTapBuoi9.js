// bai 1
const numbers = [1, 2, 3, 4, 5, 6];
const sumEven = numbers.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + cur;
  }
  return acc;
}, 0);
console.log(sumEven); // Kết quả: 12 (2 + 4 + 6)

//bai 2
const strings = ["Hello", " ", "world", "!"];
const combinedString = strings.reduce((accu, curr) => {
  return accu + curr;
}, "");
console.log(combinedString);

//bai 3
function Person(name, age, gender) {
  if (!new.target) {
    return new Person(name, age, gender);
  }
  this.age = age;
  this.name = name;
  this.gender = gender;
}

Person.prototype.introduce = function () {
  console.log(
    "Toi ten la",
    this.name,
    " nam nay toi",
    this.age,
    "tuoi",
    "toi la",
    this.gender
  );
};

const person1 = new Person("Bao", 18, "con trai");
person1.introduce();