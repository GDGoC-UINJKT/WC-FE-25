/* LOOP */

//FOR LOOP
const numbers = [1, 2, 3, 4, 5, 7];  

// console.log(numbers);
// inisialisai kondisi increment
for (let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

const obj = { a: 10, b: 20, c: 30 };  
for (let key in obj){
    // console.log(key + ': ' + obj[key]);
}

console.log(" ");
for (let value of numbers){
    // console.log(value);
}

numbers.forEach(function(angka) {
    // console.log(angka);
})

//WHILE LOOP

let i = 0

// while (i < 5){
//     // console.log(i);
//     // i++
// }

let j = 0
// do{
//     console.log(j);
//     console.log('hello');
//     j++
// } while (j < 5)

let score = 80;  

// if (score >= 75) {  
//     console.log('Lulus');  
// } else {  
//     console.log('Tidak Lulus');  
// } 

// score = score >= 75? console.log('Lulus dari ternary') : console.log('tidak lulus');

let day = 3

// switch (day) {  
//     case 1:  
//         console.log('Senin');  
//         break;  
//     case 2:  
//         console.log('Selasa');  
//         break;  
//     case 3:  
//         console.log('Rabu'); // Output: Rabu  
//         break;  
//     default:  
//         console.log('Hari tidak valid');  
// }  

/* FUnction */


// greet()

// let greet = () => {  
//     console.log('Hello, World!');  
// }  



// greet()

function add(a, b) {  
    let total = a + b
    return total
}  

let hasil = add(5, 3)
console.log(hasil);


let hasil2 = add(hasil, 8)
