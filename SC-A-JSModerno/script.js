// 1 - destructuring
const fruits = ['Maça', 'Laranja', 'Mamão']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e sua cor é ${color}`)

// 2 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfors = {km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfors, wheels: 4}

console.log(car)

// 3 - classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis verde', 120)

console.log(tenis.productWithDiscount(20))

// 4 - herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()