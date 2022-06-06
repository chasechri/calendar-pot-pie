// cuuren day at top
let whatDay = document.querySelector("#currentDay");
let currentDay = moment();
whatDay.textContent = currentDay.format("dddd, MMM DD, YYYY");

// 5.1.5 mod
$(".save-btn").on("click", function () {
  let time = $(this).parent().attr("id");
  let todoText = $(this).siblings(".stuff-todo").val();

  localStorage.setItem(time, todoText);
});

$("#hour9 .stuff-todo").val(localStorage.getItem("hour9"));
$("#hour10 .stuff-todo").val(localStorage.getItem("hour10"));
$("#hour11 .stuff-todo").val(localStorage.getItem("hour11"));
$("#hour12 .stuff-todo").val(localStorage.getItem("hour12"));
$("#hour13 .stuff-todo").val(localStorage.getItem("hour13"));
$("#hour14 .stuff-todo").val(localStorage.getItem("hour14"));
$("#hour15 .stuff-todo").val(localStorage.getItem("hour15"));
$("#hour16 .stuff-todo").val(localStorage.getItem("hour16"));
$("#hour17 .stuff-todo").val(localStorage.getItem("hour17"));

// color code check 5.4.6

var currentTime = moment().hour();
console.log(currentTime);

$(".time").each(function () {
  var hour = Number.parseInt($(this).attr("id").replace("hour", ""));
  console.log(this, hour);

  if (hour > currentTime) {
    $(this).addClass("future");
  } else if (hour < currentTime) {
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }
});

// if add remove this
//
//

// var hourPast = hourPast < currentTime;
// var hourNow = currentTime;
// var hourFuture = hourFuture < currentTime;

// function backgroundColoredit() {
//     if (currentTime == hourNow) {
//         document.getElementByClassName("time").style.backgroundColor = "#ff0000";
//     }
//     else if (hourNow < currentTime){
//         document.getElementsByClassName("time").style.backgroundColor = "#d3d3d3";
//     }else {
//         document.getElementsByClassName("time").style.backgroundColor = "#90ee90";
//     }
//     backgroundColoredit();
// }

// const save_btn = document.getElementById("save-btn");

// document.getElementById("save-btn").addEventListener("click", function() {
// localStorage.setItem("todo-text", JSON.stringify(todo));

// });

// save_btn.onclick = ()=>{
// localStorage.setItem("todo-text", JSON.stringify());
// };
