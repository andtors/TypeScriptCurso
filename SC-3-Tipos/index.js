"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = 'teste'
const nomes = ['Matheus', 'João'];
// nomes.push(4)
// 2 -outra sintaxe array
const nums = [100, 200, 300];
nums.push(400);
console.log(nums);
// nums.push('teste')
console.log(nums[0]);
// 3 - any
const arr1 = [1, 'teste', true, [], { nome: 'Matheus' }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b")
//5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Matheus'));
// 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 83.2 };
passCoordinates(objCoord);
//passCoordinates(1,2)
//passCoordinates([1, 2])
//passCoordinates({num1: 1, num2: 2})
passCoordinates({ x: 1, y: 2 });
const pessoaObj = { nome: 'Matheus', surname: 'Battisti' };
console.log(pessoaObj);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6)
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return console.log(`Olá ${firstName}, tudo bem?`);
}
advancedGreeting('Matheus', 'Battisti');
console.log(advancedGreeting('Joaquim'));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(100);
showBalance('500');
// showBalance(true)
const arr2 = [1, 'teste', true];
console.log(arr2);
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuario não aprovado!';
    }
    return `A função do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(1);
showId('200');
showId(123);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: 'Matheus', age: 30 };
console.log(somePerson);
//type personType = {
//    age: number
//} 
// 16 - literal types
let test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection('left');
showDirection('right');
//showDirection('top')
// 16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
