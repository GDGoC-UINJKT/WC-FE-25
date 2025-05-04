/*VAR LET CONST*/

function contohVar() {
    // console.log(x) // Output: 2
    var x = 1
    if (true) {
        var x = 2  // var bersifat function-scoped, jadi ini akan mengubah x di seluruh fungsi
    }
    // console.log(x) // Output: 2 (nilai berubah karena var tidak punya block scope)
}
contohVar()

//LET
function contohLet() {
    let y = 1
    if (true) {
      let y = 2  // let bersifat block-scoped, jadi ini variabel baru di dalam if block
    //   console.log(y) // Output: 2
    }
    // console.log(y) // Output: 1 (nilai di luar block tidak berubah)
}
contohLet()

//CONST
function contohConst() {
    const z = 1
    // z = 2 // Ini akan error karena const tidak bisa di-reassign
    // console.log(z) // Output: 1

    // Namun, jika const adalah objek, properti dalam objek bisa diubah
    const obj = { a: 1 }
    obj.a = 2 // Ini diperbolehkan
    // console.log(obj.a) // Output: 2
}
contohConst()

/*TIPE DATA*/

let greetings = "12"
// console.log(typeof greetings);

let masAri = 5 % 2
// console.log(masAri);

let symbol1 = Symbol("6") // Tipe data Symbol
let symbol2 = Symbol("6") // Tipe data Symbol

// console.log("Symbol 1:", symbol1)
// console.log("Symbol 2:", symbol2)
// console.log("Apakah Symbol 1 sama dengan Symbol 2?", symbol1 === symbol2) // Output: false

let Person = {
    name: "John",
    age: 30,
    isStudent: false
} 

// console.log(person);

let colors = ["red", 1, "blue"]
// console.log(colors[1])

let q = 1
let testIncrement = ++q
// ++q
// console.log(q)
// console.log("test increment" ,testIncrement)

let masFaiz = "1" != 1

// console.log(masFaiz);

let z = false // 0
let a = 3**3 // 27
let b = 7 
let c = +z + a - ++b // 0 + 27 - 8
// console.log(c);

let fruits = ['apple', 'banana', 'orange']
let fruits2 = ['grape']

let allFruits = fruits.concat(fruits2)
// fruits.shift()

fruits.forEach((fruit, index) => {
    // console.log(`${index}: ${fruit}`)
    })

// console.log(allFruits);

const angkaAngka =[3, 14, 159, 265]
angkaAngka.push(11)
// angkaAngka.shift()
// angkaAngka.pop()

// console.log(angkaAngka);

let buahLain = [...fruits2]
buahLain.push("mangga")
// console.log(buahLain)

const target = { a: 1 }
const source = { b: 2, c: 3 }
Object.assign(target, source)

// console.log(target);

const original = { 
    name: 'Asep', 
    age: 25 
}
const newObject = Object.create(original)
// console.log(newObject.name)

const orang = { 
    name: 'Alice', 
    age: 25, 
    city: 'Jakarta' 
}
const entries = Object.entries(orang)
// console.log(orang);
// console.log(entries);

const entriesArray = [['name', 'Alice',], ['age', 25], ['city', 'Jakarta']]
const newOrang = Object.fromEntries(entriesArray)

// console.log(newOrang);

const informasiPribadi = {
    nama : "ücup",
    umur : 20,
    hobi : ["mancing", "brenang"],
    keluarga : {
        bapak : "asep",
        ibu : "juminten",
        sodara : ["maria", "bruno"]
    }
}

const bapak = informasiPribadi.keluarga.bapak //dot notations
const ibu = informasiPribadi["keluarga"]["ibu"]
const {sodara} = informasiPribadi.keluarga //dot notations


console.log(sodara);