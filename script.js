// jika kita menuliskan seperti ini
// console.log(nama);
//maka akan menghasilkan Uncaught ReferenceError nama is not defined

// ketika kita tambahkan
// var nama = "Gema";
//maka akan menghasilkan undefined

// 1. Creation Phase
// saat program dijalankan yang terjadi adalah ada yang disebut dengan creation phase atau pembetukan yang terjadi di konteks global, karena kita bikin kode nya didalam file javascriptnya, tidak di dalam function.

// saat creation phase javascript akan mengecek akan mengecek adakah variabel(keyword var) atau function di dalamnya.

// nama var = undefined
// nama function = fn()
// konsep ini disebut dengan hoisting
// javascript mendefinisikan
// window = global object
// this = window

// 2. Execution Phase
// mengeksekusi program nya baris per baris dari atas ke bawah.

// contoh

// console.log(sayHello);
// var nama = `Gema`;
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, umur ${umur}`;
// }

// var nama = "Gema Nadia Ramadhana";
// var username = "@gemaadhan";

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL("@agaaltamiz", "@nadia"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }

//     c();
//   }
//   b();
// }

// a();

function satu() {
  var nama = "Gema";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);
