const textbar = document.querySelector(".textbar");
const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const calcBtn = document.getElementById("calculate");
const backBtn = document.getElementById("backspace");
const clearBtn = document.getElementById("reset");


zeroBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "0";
});
oneBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "1";
})
twoBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "2";
});
threeBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "3";
})
fourBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "4";
});
fiveBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "5";
})
sixBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "6";
});
sevenBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "7";
})
eightBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "8";
})
nineBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "9";
})
addBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "+";
})
subBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "-";
})
multBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "*";
})
divBtn.addEventListener("mouseup", function(){
    textbar.value = textbar.value + "/";
})

calcBtn.addEventListener("mouseup", calc);

backBtn.addEventListener("mouseup", function(){
   let prevValue = textbar.value;
   let currentValue = prevValue.slice(0, prevValue.length - 1);
   textbar.value = currentValue;
});

clearBtn.addEventListener("mouseup", function(){
    textbar.value = '';
});



function calc(){
    let textString = textbar.value;
    if(textString.includes('+')){
        textArray = textString.split('+');
        let result = add(textArray);
        textbar.value = result;
    }
    if(textString.includes('-')){
        textArray = textString.split('-');
        let result = sub(textArray);
        textbar.value = result;
    }
    if(textString.includes('*')){
        textArray = textString.split('*');
        let result = mult(textArray);
        textbar.value = result;
    }
    if(textString.includes('/')){
        textArray = textString.split('/');
        let result = div(textArray);
        textbar.value = result;
    }
}


function add(numbersToAdd){
    let result = 0;
    numbersToAdd.forEach(element => result = result + Number(element));
    return result;

}

function sub(numbersToSub){
    let firstNum = numbersToSub[0];
    let result = firstNum;
    for(let i = 1; i < numbersToSub.length; i++){
        result = result - Number(numbersToSub[i]);
    }
    return result;
}

function mult(numbersToMult){
    let result = numbersToMult[0]
    for(let i = 1; i < numbersToMult.length; i++){
        result = result * Number(numbersToMult[i]);
    }
    return result;

}
function div(numbersToDiv){
    let result = numbersToDiv[0]
    for(let i = 1; i < numbersToDiv.length; i++){
        if(numbersToDiv[i] == 0){
            alert("Did you really just try to divide by 0? Seriously? Do you want to open a black hole? BECAUSE THAT'S HOW YOU OPEN BLACK HOLES!!!");
        }
        else{
        result = result / Number(numbersToDiv[i]);
        }
    }
    return result;

}