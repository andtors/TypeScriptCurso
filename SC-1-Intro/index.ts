const firstName = 'Matheus'
const anotherName = 1
const x = true

function greeting(name: string){
    console.log("Olá " + name)
}

greeting(firstName)
//greeting(anotherName)
//greeting(x)

function soma(n1: number, n2: number){
   console.log(n1 + n2)
}

soma(2, 3)