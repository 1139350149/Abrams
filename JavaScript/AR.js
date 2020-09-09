let thePage;

function ShowIFrame(t) {
    //let b = document.getElementsByClassName("ShowIFrame")[0];
    //b.style.display = "block";
    thePage = t;
    window.win = window.open("ShowAR.html","_blank","resizable=yes;status=yes;toolbar=no;location=no;menubar=no;directories=no;scrollbars=no;");
    win.moveTo(0,0);
    win.resizeTo(screen.availWidth,screen.availHeight);
}

function CheckChoiceM4() {
    //window.close();
    let StyDis1 = window.opener.document.getElementsByClassName("HK416")[0];
    StyDis1.style.display = "none";
    // console.log(StyDis1);
    let StyDis2 = window.opener.document.getElementsByClassName("Scar")[0];
    StyDis2.style.display = "none";
    let StyDis3 = window.opener.document.getElementsByClassName("M4_series")[0];
    StyDis3.style.display = "block";
    // fadeIn1(StyDis3);
    // console.log(StyDis3);
    self.close();
}
function CheckChoiceScar() {
    //window.close();
    let StyDis1 = window.opener.document.getElementsByClassName("HK416")[0];
    // console.log(StyDis1);
    StyDis1.style.display = "none";
    let StyDis2 = window.opener.document.getElementsByClassName("Scar")[0];
    // fadeIn1(StyDis2);
    StyDis2.style.display = "block";
    // console.log(StyDis2);
    let StyDis3 = window.opener.document.getElementsByClassName("M4_series")[0];
    StyDis3.style.display = "none";
    // console.log(StyDis3);
    self.close();
}
function CheckChoiceHK416() {
    //window.close();
    let StyDis1 = window.opener.document.getElementsByClassName("HK416")[0];
    // console.log(StyDis1);
    //fadeIn1(StyDis1);
    StyDis1.style.display = "block";
    let StyDis2 = window.opener.document.getElementsByClassName("Scar")[0];
    StyDis2.style.display = "none";
    // console.log(StyDis2);
    let StyDis3 = window.opener.document.getElementsByClassName("M4_series")[0];
    StyDis3.style.display = "none";
    // console.log(StyDis3);
    self.close();
}