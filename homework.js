for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

for (let i = 1; i <= 10; i++) {
    console.log("Квадрат", i, "-", i * i);
}

for (let i = 1; i <= 10; i++) {
    console.log("5 x", i, "=", 5 * i);
}

let evenSum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    }
}

console.log(evenSum);

for (let i = 0; i <= 100; i = i + 5) {
    console.log(i);
}

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count++;
    }
}

console.log(count);

const user = {
    name: "Али",
    age: 20,
    city: "Бишкек"
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

user.age = 21;

console.log(user.age);

user.phone = "+996 555 123 456";

console.log(user.phone);

delete user.city;

console.log(user);

console.log("email" in user);

for (let key in user) {
    console.log(key);
}

for (let key in user) {
    console.log(user[key]);
}

let propertyCount = 0;

for (let key in user) {
    propertyCount++;
}

console.log(propertyCount);

const numbers = [10, -5, 8, -2, 15];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let arraySum = 0;

for (let i = 0; i < numbers.length; i++) {
    arraySum = arraySum + numbers[i];
}

console.log(arraySum);

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);

let evenArraySum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenArraySum = evenArraySum + numbers[i];
    }
}

console.log(evenArraySum);

let negativeCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount++;
    }
}

console.log(negativeCount);

let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i];
}

console.log(product);