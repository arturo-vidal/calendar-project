let months=["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
let days=["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
let currentDate= new Date();
let currentDay= currentDate.getDate();
let currentMonth= currentDate.getMonth();
let currentYear= currentDate.getFullYear();
//para acceder a cada elemento en el HTML y asignar el contenido
document.getElementById("calendarMonth").textContent=months[currentMonth];
document.getElementById("fulldate").textContent=days[currentDate.getDay()]+ " "+ currentDay+ " de "+months[currentMonth]+ " de "+currentYear;

//para saber si es año bisiesto
function leapyear(){
    if((currentYear%100!==0)&&(currentYear%4===0)||(currentYear%400===0)){
        return true;
    }
    return false;
}
//para saber que día de la semana cae primero de mes devuelve valor del 0 dom al 6 sab
function firstday(){
    let start = new Date(currentYear, currentMonth, 1);
    return start.getDay();
}

console.log(firstday());