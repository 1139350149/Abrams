function search() {
    let select = document.getElementById("learn");
    let selectedValue = select.value;
    if (selectedValue === "AbramsM1A2") {
        window.open("AbramsM1A2.html");
    }
    if(selectedValue === "Leopard2A7") {
        window.open("Leopard2A7.html")
    }
}
let aFlag = 0, bFlag = 0;

function checkSelectValue()
{
    let select = document.getElementById("learn");
    let selectedValue = select.value;
    let a = document.getElementsByClassName("Leo")[0];
    let b = document.getElementsByClassName("Abrams")[0];
    if (selectedValue === "AbramsM1A2") {
        aFlag = 0;
        if (bFlag === 0)
        {
            fadeIn1(b);
            bFlag = -1;
            console.log(bFlag);
        }
        b.style.display = "block";
        a.style.display = "none"
    }
    else if(selectedValue === "Leopard2A7") {
        bFlag = 0;
        if (aFlag === 0)
        {
            fadeIn1(a);
            aFlag = -1;
            console.log(aFlag);
        }
        b.style.display = "none";
        a.style.display = "block"
    }
    setTimeout(function () {
        checkSelectValue()
    },500);
}

function setOpacity(elem,level){
    if(elem.filters){       //IE kernel
        elem.style.filter="alpha(opacity="+level+")";}
    else{
        elem.style.opacity=level/100;
    }
}

function fadeIn1(elem){
    setOpacity(elem,0);         //Set opacity as 0
    for(let i=0;i<=100;i++){
        (function(){
            let po=i;
            //console.log(po);
            setTimeout(function(){
                setOpacity(elem,po);
            },10*po);
        })();
    }
}

// function fadeOut1(elem){
//     setOpacity(elem,100);//先把透明度设置成1
//     for(let i=100;i>=0;i--){
//         (function(){
//             let po=i;
//             console.log(po);
//             console.log("Out");
//             setTimeout(function(){
//                 setOpacity(elem,po);
//             },10*po);
//         })();
//     }
// }

checkSelectValue();

function changeBtn() {
    document.getElementsByClassName("search")[0].innerHTML = "Searching!";
    var Btn = document.getElementsByClassName("search")[0];
    Btn.style.width = 130 + "px";
   // console.log(document.getElementsByClassName("search")[0].value);
}


function changeBack(){
    document.getElementsByClassName('search')[0].innerHTML = 'Search'
}
