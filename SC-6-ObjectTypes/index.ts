// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`)
    if(product.isAvailable){
        console.log('O produto está disponivel!')
    }
}

const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: 'Tenis', price: 129.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuario tem o e-mail: ${user.email}`)
    if(user.role){
        console.log(`A função do usuario é ${user.role}`)
    }
}

const u1: User = {email: 'matheus@email.com', role:"Admin"}
const u2: User = {email: 'joao@email.com'}

showUserDetails(u1)
showUserDetails(u2)

// 3 - propriedade readonly
interface Car{
    brand: string
    readonly wheels: number
}

const fusca:Car ={
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste'

// 5 - extending interfaces
interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const matheus: Human = {
    name: "Matheus",
    age:30
}

console.log(matheus)

const goku:SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

// myArray[3] = 'Mamão'

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// myArray[0] = 'teste'

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Matheus', 30]

console.log(anotherUser[0])

anotherUser[0] = 'João'

console.log(anotherUser[0])

// anotherUser[1] = 'teste'

// 9 - tuplas readonly
function showNumbers(numbers: readonly[number, number]){
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])