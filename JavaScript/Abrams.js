function check_empty() {
    let n = document.getElementById("information").value;
    if ( n === "")
    {
        alert("Email is empty!");
    }
}

function TimeShow() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // console.log(h + ":" + m + ":" + s);
    m = check(m);
    s = check(s);
    h = check(h);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    setTimeout(function () {
        TimeShow();
    }, 1000);
}
function check(t){
    if (t < 10) {
        t = "0" + t;
    }
    return t;
}

// function debug(t) {
//     console.log(t);
// }



function showMenu_0() {
    let b = document.getElementsByClassName("menu")[0];
    //debug(b);
    b.style.display = "block";
}

function hideMenu_0() {
    let b = document.getElementsByClassName("menu")[0];
    //debug(b);
    b.style.display = "none";
}
function showMenu_1() {
    let b = document.getElementsByClassName("menu_1")[0];
    //debug(b);
    b.style.display = "block";
}

function hideMenu_1() {
    let b = document.getElementsByClassName("menu_1")[0];
    //debug(b);
    b.style.display = "none";
}


