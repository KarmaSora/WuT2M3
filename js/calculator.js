
let sum = document.getElementById('answer');
let ansButton = document.getElementById('buttonAnswer');


function init() {

}

function calculate() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;

    if (y == '') {
        y = 0;
    } if (x == '') {
        x = 0;
    }
    if (x == '' && y == '') {
        x = null;
        y = null;
        alert("no x or y has been set, cant calculate with unset values")
    }


    console.log({ x, y })
    sumOfNum = parseInt(x) + parseInt(y);
    console.log(sumOfNum);
    sum.innerText = sumOfNum;
    return sumOfNum;
}

function dataControl() {
    let username = document.getElementById('username').value;
    let pwd = document.getElementById('pwd').value;
    let pwdV2 = document.getElementById('pwdV2').value;
    let status = document.getElementById('status');

    if( pwd == pwdV2){
    if(pwd !=='' ||pwdV2!=='' || username !==''){
            console.log("you are now logged in")
            status.innerText = "welcome back " + username;
        }
    }
  
    else{
        console.log("password doesnt match, try again later");
        status.innerText = "password doesnt match, try again!";
    }
}


window.onload = init;