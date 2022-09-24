let timeDiv = document.getElementById('time');
let dayDiv = document.getElementById('day');
let dateDiv = document.getElementById('date');

let dayArray = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let monthArray = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

setInterval(function clockFunc() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let date = newDate.getDate();
  let day = newDate.getDay();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();


  timeDiv.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  dayDiv.innerHTML = `${dayArray[day]}`;
  dateDiv.innerHTML = `${date} ${monthArray[month]} ${year}`;

}, 1000)