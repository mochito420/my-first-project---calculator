const textbox = document.querySelector(".textbox");
const visualFirstLine = document.createElement('strong');
const visualOperator = document.createElement('strong');
const visualSecondLine = document.createElement('strong');
const visualResult = document.createElement('strong');
//!<::::::::::::::::::::::TOMAR::NUMERO::::::::::::::::::::::::::::>
let countNumber1 = '';
const eventNum1 = (e) =>{               //funcion
    countNumber1 += e.target.innerHTML;
    console.log(`countNumber1 = ${countNumber1}`);
    visualFirstLine.innerHTML = `${countNumber1}`;
};
//?<------------------------------------------------------->
const cButtonOpN1 =()=>{
    visualFirstLine.innerHTML='';
    countNumber1 = '';
};
const cButton = document.querySelector('.pan-delete');
    cButton.addEventListener('click',cButtonOpN1);
//?<--------------------------------------------------------->
const numberButtons1 = document.querySelectorAll('.pan-number');
    numberButtons1.forEach(numbers1=>{
        numbers1.addEventListener('click',eventNum1);
    });
//!<::::::::::::::::::TOMAR::OPERADOR:::::::::::::::::::::::::::::>
let operator = '';
const eventOP = (e) =>{             //funcion
    operator += e.target.innerHTML;
    visualOperator.innerHTML = `${operator}`;
//<$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
    if (visualOperator.innerHTML.endsWith('+')){
        numberButtons1.forEach(numbers1=>{        //removing access to te number1 bottons
            numbers1.removeEventListener('click',eventNum1);
        })
//?<----------------------------------------------------------------------->
        operatorButtons.forEach(operators=>{
            operators.removeEventListener('click',eventOP);
        })
//?<----------------------------------------------------------------------->
const cButton = document.querySelector('.pan-delete');
    cButton.removeEventListener('click',cButtonOpN1);
    }
//<$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
    if (visualOperator.innerHTML.endsWith('-')){
        numberButtons1.forEach(numbers1=>{        //removing access to te numbers bottons
            numbers1.removeEventListener('click',eventNum1);
        })
//?<----------------------------------------------------------------------->
        operatorButtons.forEach(operators=>{
            operators.removeEventListener('click',eventOP);
        })
//?<----------------------------------------------------------------------->
const cButton = document.querySelector('.pan-delete')
    cButton.removeEventListener('click',cButtonOpN1);
    }
//<$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
    if (visualOperator.innerHTML.endsWith('x')){
        numberButtons1.forEach(numbers1=>{        //removing access to te numbers bottons
            numbers1.removeEventListener('click',eventNum1);
        })
//?<----------------------------------------------------------------------->
        operatorButtons.forEach(operators=>{
            operators.removeEventListener('click',eventOP);
        })
//?<----------------------------------------------------------------------->
const cButton = document.querySelector('.pan-delete');
    cButton.removeEventListener('click',cButtonOpN1);
    }
//<$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
    if (visualOperator.innerHTML.endsWith('/')){
        numberButtons1.forEach(numbers1=>{        //removing access to te numbers bottons
            numbers1.removeEventListener('click',eventNum1);
        })
//?<----------------------------------------------------------------------->
        operatorButtons.forEach(operators=>{
            operators.removeEventListener('click',eventOP);
        })
//?<----------------------------------------------------------------------->
const cButton = document.querySelector('.pan-delete');
    cButton.removeEventListener('click',cButtonOpN1);
    }
//!<::::::::::::::::::::TOMAR::SEGUNDO::NUMERO:::::::::::::::::::::>
let countNumber2 = '';
const eventNum2 = (e) =>{               //funcion
    countNumber2 += e.target.innerHTML;
        console.log(`countNumber2 = ${countNumber2}`);
        visualSecondLine.innerHTML = `${countNumber2}`;
        }
//?<-------------------------------------------------------->
const cButtonOpN2 =()=>{
    visualSecondLine.innerHTML='';
    countNumber2 = '';
};
const cButton = document.querySelector('.pan-delete');
    cButton.addEventListener('click',cButtonOpN2);
//?<------------------------------------------------------->
const numberButtons2 = document.querySelectorAll('.pan-number')
    numberButtons2.forEach(numbers2=>{
        numbers2.addEventListener('click',eventNum2)
    })
//!<::::::::::::::::::TOMAR::IGUAL::::::::::::::::::::::::::::::::::::>
const equalOp = (e) =>{
    let num1 = Number(countNumber1);
    let num2 = Number(countNumber2);
//<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&>
if (visualOperator.innerHTML==="+"){
    let add = num1 + num2;
    console.log(add);;
    visualResult.innerHTML = `${add}`;
//?<------------------------------------------------>
    };
//<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&>
if (visualOperator.innerHTML==="-"){
    let substract = num1 - num2;
    console.log(substract);
    visualResult.innerHTML = `${substract}`;
    };
//<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&>
if (visualOperator.innerHTML==="x"){
    let multiply = num1 * num2;
    console.log(multiply);
    visualResult.innerHTML = `${multiply}`;
    };
//<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&>
if (visualOperator.innerHTML==="/") {
    let divide = num1 / num2;
    console.log(divide);
    visualResult.innerHTML = `${divide}`;
    };   
    numberButtons2.forEach(numbers2=>{
        numbers2.removeEventListener('click',eventNum2)
        
    })
    const cButton = document.querySelector('.pan-delete');
    cButton.removeEventListener('click',cButtonOpN2);
}
//?<-------------------------------------->
const equalButton = document.querySelector('.pan-result')
    equalButton.addEventListener('click',equalOp)
}
//?<-------------------------------------------->
const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(operators=>{
        operators.addEventListener('click',eventOP);
    });
//!<::::::::::::::::::::::TOMAR::AC:::::::::::::::::::::::::::::::::::::::>
const acButton = document.querySelector('.pan-deleteAll')
    acButton.addEventListener('click',(e) =>{
        window.location.reload()
    })
//!<::::::::::::::::::::::TEXBOX::MANIPULATION::::::::::::::::::::::::::>
visualFirstLine.className = 'firstline-visual visual all-visual';
visualOperator.className = 'operator-visual visual';
visualSecondLine.className = 'secondline-visual visual all-visual';
visualResult.className = 'result-visual visual';
//?<------------------------------------------------------------>
textbox.appendChild(visualFirstLine);
textbox.appendChild(visualOperator);
textbox.appendChild(visualSecondLine);
textbox.appendChild(visualResult);
