const answer = document.getElementById("answer");

let num1;
let num2;
let mul = false;
let div = false;
let plus = false;
let minus = false;
let final = false;
let mc = 0;
let MID;

document.getElementById("mc").onclick = function(){
    mc = 0;
}
document.getElementById("m+").onclick = function(){
    if(answer.textContent.slice(-1) == "%"){
        MID = Number(answer.textContent.replace("%", ""))*0.01;
        mc += MID;
        console.log(mc);
    }
    else{
        mc += Number(answer.textContent);
    }
}
document.getElementById("m-").onclick = function(){
    if(answer.textContent.slice(-1) == "%"){
        MID = Number(answer.textContent.replace("%", ""))*0.01;
        mc -= MID
        console.log(mc);
        console.log(MID);
    }
    else{
        mc -= Number(answer.textContent);
    }
}
document.getElementById("mr").onclick = function(){
    mc = Math.round(mc*1000000000000000)/1000000000000000;
    answer.textContent = mc;
    console.log(mc);
}
document.getElementById(".").onclick = function(){
    if(!answer.textContent.includes(".")){
        answer.textContent += ".";
    }
    num1 = answer.textContent;
}
document.getElementById("%").onclick = function(){
    if(!answer.textContent.includes("%")){
        answer.textContent += "%";
    }
    num1 = answer.textContent;
}
document.getElementById("delete").onclick = function(){
    answer.textContent = answer.textContent.slice(0, -1);
}
document.getElementById("+-").onclick = function(){
    if(answer.textContent.startsWith("-")){
        answer.textContent = answer.textContent.replace('-', '');
    }
    else{
        answer.textContent = "-" + answer.textContent;
    }
    num1 = answer.textContent;
}
document.getElementById("AC").onclick = function(){
    answer.textContent = ``;
}
document.getElementById("x").onclick = function(){
    mul = true;
    div = false;
    plus = false;
    minus = false;
    num2 = answer.textContent;
    answer.textContent = ``;
    num1 = answer.textContent;
}
document.getElementById("/").onclick = function(){
    mul = false;
    div = true;
    plus = false;
    minus = false;
    num2 = answer.textContent;
    answer.textContent = ``;
    num1 = answer.textContent;
}
document.getElementById("+").onclick = function(){
    mul = false;
    div = false;
    plus = true;
    minus = false;
    num2 = answer.textContent;
    answer.textContent = ``;
    num1 = answer.textContent;
}
document.getElementById("-").onclick = function(){
    mul = false;
    div = false;
    plus = false;
    minus = true;
    num2 = answer.textContent;
    answer.textContent = ``;
    num1 = answer.textContent;
}
document.getElementById("1").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 1;
    num1 = answer.textContent;
}
document.getElementById("2").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 2;
    num1 = answer.textContent;
}
document.getElementById("3").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 3;
    num1 = answer.textContent;
}
document.getElementById("4").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 4;
    num1 = answer.textContent;
}
document.getElementById("5").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 5;
    num1 = answer.textContent;
}
document.getElementById("6").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 6;
    num1 = answer.textContent;
}
document.getElementById("7").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 7;
    num1 = answer.textContent;
}
document.getElementById("8").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 8;
    num1 = answer.textContent;
}
document.getElementById("9").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 9;
    num1 = answer.textContent;
}
document.getElementById("0").onclick = function(){
    if(final){answer.textContent = ``; final = false;}
    answer.textContent += 0;
    num1 = answer.textContent;
}
document.getElementById("equal").onclick = function(){
    if(num2.slice(-1) == "%"){
        num2 = Number(num2.replace("%", ""))*0.01;
    }
    if(num1.slice(-1) == "%"){
        num1 = Number(num1.replace("%", ""))*0.01;
    }
    console.log(num2);
    console.log(num1);
    num1 = Number(num1); num2 = Number(num2);
    if(mul){
        answer.textContent = num2*num1;
    }
    else if(div){
        answer.textContent = parseFloat((num2/num1).toFixed(2));
    }
    else if(plus){
        answer.textContent = num2+num1;
    }
    else if(minus){
        answer.textContent = num2-num1;
    }
    final = true;
    mul = false;
    div = false;
    plus = false;
    minus = false;
}