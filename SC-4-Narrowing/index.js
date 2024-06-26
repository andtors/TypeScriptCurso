"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossivel realizar a soma!');
    }
}
sum("4", "59");
sum(12, 42.3);
sum("5", 6);
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação!');
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([2, 4, 8], 'multiply');
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('O cachorro é um SRD');
    }
}
showDogDetails(turca);
showDogDetails(bob);
// 5 - desafio
class UserData {
    constructor(name, review) {
        this.name = name;
        if (review) {
            this.review = review;
        }
    }
}
function showUserReview(user) {
    if ('review' in user) {
        console.log(`O usuario ${user.name}, deu uma nota de ${user.review}`);
    }
    else {
        console.log('O usuario não deixou nenhuma nota!');
    }
}
const alex = new UserData('Alex');
const kurt = new UserData('Kurt', 7.5);
showUserReview(alex);
showUserReview(kurt);
