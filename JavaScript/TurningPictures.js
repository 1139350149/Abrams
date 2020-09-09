let arr_r = document.getElementsByClassName("arrow_right")[0];
let arr_l = document.getElementsByClassName("arrow_left")[0];

arr_l.addEventListener("click",prev_pic);
arr_r.addEventListener("click",next_pic);

function next_pic () {
    let container = document.getElementsByClassName("container")[0];
    // console.log(container);
    let newLeft = parseInt(window.getComputedStyle(container,null).getPropertyValue("left"));
    fadeIn(container);
    if (newLeft === -1366)
    {
        newLeft = 0;
    }
    else{
        newLeft -= 683;
    }
    index++;
    if(index > 2){
        index = 0;
    }
    //let container1 = document.getElementsByClassName("container")[1];
    //fadeIn(container1);
    container.style.left = newLeft + "px";
    // console.log(newLeft);
}


function prev_pic () {
    let container = document.getElementsByClassName("container")[0];
    fadeIn(container);
    let newLeft = parseInt(window.getComputedStyle(container,null).getPropertyValue("left"));
    if (newLeft === 0) {
        newLeft = -1366;
    }
    else{
        newLeft  += 683;
    }
    index--;
    if(index < 0){
        index = 2;
    }
    // let container1 = document.getElementsByClassName("container")[2];
    // fadeIn(container1);
    container.style.left = newLeft + "px";
    // console.log(newLeft);
}

let time = null;

function autoPlay() {
    time = setInterval(function(){
        next_pic();
    },2000);
}
autoPlay();

let container = document.getElementsByClassName("container")[0];

container.onmouseover = function () {
    clearInterval(time);
}


container.onmouseleave = function (){
    autoPlay();
}

let index = 0;

function setOpacity(elem,level){
    if(elem.filters){
        elem.style.filter="alpha(opacity="+level+")";}
    else{
        elem.style.opacity=level/100;
    }
}

function fadeIn(elem){
    setOpacity(elem,0);//先把透明度设置成0
    for(let i=0;i<=100;i++){
        (function(){
            let po=i;
            setTimeout(function(){
                setOpacity(elem,po);
            },10*po);
        })();
    }
}

var newLeft = parseInt(window.getComputedStyle(container,null).getPropertyValue("left"));


function Point(t) {
    var container = document.getElementsByClassName("container")[0];
    if (t === 1) {
        newLeft = -1366;
        var Points = document.getElementsByClassName("Point")[t-1];
        fadeIn(container);
        // Points.style.background =     "-webkit-linear-gradient(top,green,gold,deepskyblue)";
    }
    else if(t === 2) {
        Points = document.getElementsByClassName("Point")[t-1];
        fadeIn(container);
        // Points.style.background =     "-webkit-linear-gradient(top,green,gold,deepskyblue)";
        newLeft = -683;
    }
    else if(t === 3) {
        Points = document.getElementsByClassName("Point")[t-1];
        fadeIn(container);
        newLeft = 0;
        // Points.style.background =     "-webkit-linear-gradient(top,green,gold,deepskyblue)";
    }
    // Points.style.background = "-webkit-linear-gradient(top,red,blue,black)";
    container.style.left = newLeft + "px";
}
function ChangeColor() {
    var container = document.getElementsByClassName("container")[0];
    container.style.background =    "-webkit-linear-gradient(top,red,blue,black)";

}

function StopTuring(){
    clearInterval(time);
    //console.log('1');
}
function RestartTurning() {
    autoPlay();
}

// function sleep(numberMillis) {
//     var now = new Date();
//     var exitTime = now.getTime() + numberMillis;
//     while (true) {
//         now = new Date();
//         if (now.getTime() > exitTime)
//             return;
//     }
// }
//var timesNew = null;
//let newLeft = parseInt(window.getComputedStyle(container,null).getPropertyValue("left"));
/*let sign = document.getElementsByClassName("sign")[0];
function changeBtnTest() {
    let btn = document.getElementsByClassName("sign")[0];
    let styleProperty= parseInt(window.getComputedStyle(sign,null).getPropertyValue("width"));
    var i =0;
    for (;i < 10 ; i++) {
        styleProperty += 0.1 * i;
        console.log(btn.style.width);
        btn.style.width = styleProperty + "px";
    }
    //timesNew = setInterval(changeBtnTest,100);
}

function changeBtnBack() {
    let btn = document.getElementsByClassName("sign")[0];
    let styleProperty= parseInt(window.getComputedStyle(sign,null).getPropertyValue("width"));
    var i = 10 ;
    for (;i >= 0 ; i--) {
        styleProperty -= 0.1 * i;
        console.log(btn.style.width);
        btn.style.width = styleProperty + "px";
    }
    //timesNew = setInterval(changeBtnTest,100);
}*/
