let alert;
let total = 0;
let input;
do {
   if (Number.isNaN(Number(input = prompt('Нажміть Cancel, або введіть число')))) {
         alert = prompt('Было введено не число, попробуйте еще раз')
      } else {
         total += Number(input);
      }
} while (input !== null) 
   alert = `Общая сумма чисел равна ${total}`
console.log(alert)