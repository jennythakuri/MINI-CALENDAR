
//javascript code
const date = document.getElementById('date');
    const day = document.getElementById("day");
    let month = document.getElementById("month").innerHTML;
    const year = document.getElementById("year").innerHTML;

    const today=new Date();
// console.log(today);
   
const weekDays = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "friday", "Saturday"];


const allmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

//get the current date and time

date.innerHTML = (today.getDate() < 10 ? "0" : "") +
    today.getDate();//08/09

day.innerHTML = today.weekDays[today.getDay()];
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();