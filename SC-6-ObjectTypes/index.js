"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponivel!');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'Tenis', price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = { email: 'matheus@email.com', role: "Admin" };
const u2 = { email: 'joao@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ['Maça', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão'
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]
console.log(myNumberArray);
const anotherUser = ['Matheus', 30];
console.log(anotherUser[0]);
anotherUser[0] = 'João';
console.log(anotherUser[0]);
// anotherUser[1] = 'teste'
// 9 - tuplas readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
