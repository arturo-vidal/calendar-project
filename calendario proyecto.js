let months=["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
let days=["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
let currentDate= new Date();
let currentDay= currentDate.getDate();
let currentMonth= currentDate.getMonth();
let currentYear= currentDate.getFullYear();
//para acceder a cada elemento en el HTML y asignar el contenido
document.getElementById("calendarMonth").textContent=months[currentMonth];
document.getElementById("fulldate").textContent=days[currentDate.getDay()]+ " "+ currentDay+ " de "+months[currentMonth]+ " de "+currentYear;

document.getElementById("prevmonth").addEventListener("click", ()=>prevmonthf());
document.getElementById("nextmonth").addEventListener("click", ()=>nextmonthf());
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
//para retroceder un mes, si no es enero resta 1 mes, si es enero pasa a diciembre y resta 1 año
function prevmonthf(){
    if(currentMonth!==0){
        currentMonth--;
    }else{
        currentMonth=11;
        currentYear--;
    }
    setNewDate();
}
//para avanzar un mes, si no es diciembre suma 1 mes, si es diciembre pasa a enero y suma 1 año
function nextmonthf(){
    if(currentMonth!==11){
        currentMonth++;
    }else{
        currentMonth=0;
        currentYear++;
    }
    setNewDate();
}
//para actualizar los valores de mes y año al avanzar o retroceder de mes
function setNewDate(){
    currentDate.setFullYear(currentYear, currentMonth, currentDay);
    document.getElementById("calendarMonth").textContent=months[currentMonth];
    document.getElementById("fulldate").textContent=days[currentDate.getDay()]+ " "+ currentDay+ " de "+months[currentMonth]+ " de "+currentYear;
}
//para saber cuantos días tiene cada mes
function getTotalDays(currentMonth){
    if(currentMonth===-1){
        currentMonth=11;
    }
    if(currentMonth==0||currentMonth==2||currentMonth==4||currentMonth==6||currentMonth==7||currentMonth==9||currentMonth==11){
        return 31;
    }else if(currentMonth==3||currentMonth==5||currentMonth==8||currentMonth==10){
        return 30;
    }else{
        if(leapyear()==true){
            return 29;
        }else{
            return 28;
        }
    }
}
//enumera los días del mes y los asigna al elemento div
/*function setMonthDays(currentMonth){
    for(let e=1; e<=getTotalDays(currentMonth); e++){
        document.getElementById("monthdays").innerHTML+=<div class="day">${e}</div>;
    }
}
setMonthDays(currentMonth);*/

console.log(currentDate.setFullYear(currentYear, currentMonth, currentDay));