// 1 - Numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.24124

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - Strings
const firstName: string = 'Matheus'

console.log(firstName.toUpperCase())

let fullName: string

let lastName: string = "Battisti"

fullName = firstName + ' ' + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - Boolean
let a: boolean = false

console.log(a)

console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation
let ann: string = 'Teste'

let inf = 'Teste'

// inf = 1
// ann = 1

// tsc -w para compilar automaticamente

let num: number = 10

let converter = num.toString()

const printNum: string = `Eu vou imprimir o número ${converter}`

console.log(printNum)



