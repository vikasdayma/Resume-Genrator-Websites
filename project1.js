const button = document.getElementById("btn");
const button1=document.getElementById('btn1')
const hideData= document.getElementById("v")
const hideSData1 = document.getElementById("u");

function hide(){
    hideData.style.display='block';
    button.style.display='none';
 

}
function hide1(){
    hideSData1.style.display='block';
button1.style.display='none' ;
}
button.addEventListener('click',hide);
button1.addEventListener('click',hide1)

const btn = document.querySelector(".gen-btn");
btn.onclick = function change(e){
    let name1 = document.querySelector(".data1").value;
    let name2 = document.getElementById("dataPrint1");
    name2.textContent=name1;
    let name3 = document.querySelector(".data2").value;
    let name4 = document.getElementById("dataPrint2");
    name2.textContent=name1;
    let name5 = document.querySelector(".data3").value;
    let name6 = document.getElementById("dataPrint3");
    let name7 = document.querySelector(".data4").value;
    let name8 = document.getElementById("dataPrint4");
    let name9 = document.querySelector(".data7").value;
    let name10 = document.getElementById("dataPrint5");
    let name11 = document.querySelector(".data8").value;
    let name12 = document.getElementById("dataPrint6");
    let name13 = document.querySelector(".data9").value;
    let name14 = document.getElementById("dataPrint7");
    let name15 = document.querySelector(".data10").value;
    let name16 = document.getElementById("dataPrint8");
    name8.textContent=name7;
    name12.textContent=name11;
    name14.textContent=name13;
    name16.textContent=name15;
    
    name10.textContent=name9;
    name2.textContent=name1;
    name4.textContent=name3;
    name6.textContent=name5;

}



// const button1 = document.getElementById("btn1");
// const hideData1= document.getElementById("u")
// function hide1(){
//     hideData1.style.display='block';
//     button1.style.display='none';

// }

// button1.addEventListener('click',hide1);