function DigitalClock(){
    setInterval(function(){
let date= new Date();
let hour=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
document.getElementById("time").innerHTML=`<h1>${hour}hr:${minutes}min:${seconds}sec</h1>`},1000);
}

DigitalClock();

// built in time to generate time

// function DigitalClock(){
//     setInterval(function(){
//         let time=new Date.toLocalString();
//         document.getElementById("time").innerHTML=time;},1000);
// }
// DigitalClock();