let balance = prompt("Balansingizdagi summani kiriting (so'mda):"+1);
let plane = 500;
let hotel = 250;
let entertaiment = 120;
let usd = 10650.34;
let euro = 11650.03;
let sum = 0;
const result = document.querySelector(".result");


sum = ((plane+hotel)*usd) + (entertaiment*euro);
console.log(sum);

if (balance>sum) {
    result.textContent = "Oq yo'l Alisher!";
} else {
    result.textContent = "Alisher ozgina sabr qilishi kerak bo'lar ekan!"
}
