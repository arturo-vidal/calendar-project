let months=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
let currentDate= new Date();
let currentDay= currentDate.getDate();
let currentMonth= currentDate.getMonth();
let currentYear= currentDate.getFullYear();

console.log(currentDay+ " de "+months[currentMonth]+ " de "+currentYear );