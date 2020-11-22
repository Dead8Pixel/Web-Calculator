
let calcString = "";
let ans = 0 ;
let previousOp = undefined;
const display = document.querySelector('.display');
const calcButton = document.querySelector('#calculator');

function add(a,b) {
    return a + b;
}

function mul(a,b) {
    return a * b;
}

function sub(a,b) {
    return a - b;
}

function div(a,b) {
    return Math.floor(a / b);
}

calcButton.addEventListener('click',function(event) {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className.includes('num')) {
            //Screen displaying logic
            let value = event.target.innerText;
            if (display.innerText == '0')
                display.innerText = value;
            else 
                display.innerText += value;   
        }

        //Clear Button logic
        else if (event.target.className.includes('c')) {
            display.innerText = 0;
            ans = 0;
            previousOp = undefined;
        }

        //Backspace logic
        else if (event.target.className.includes('bs')) {
            if (display.innerText.length > 1) {
                display.innerText = display.innerText.slice(0,-1);

            }
            else {
                display.innerText = 0;
            }
        }

        //Operation button
        else if (event.target.className.includes('op')) {
           if (previousOp == undefined) {
               ans = parseInt(display.innerText);
               previousOp = event.target.innerText;
               display.innerText = 0;
           }
           else {
               val = parseInt(display.innerText);
               ans = doCalculations(ans,val,previousOp);
               previousOp = event.target.innerText;
               display.innerText = 0;
           }

        }

        //Equal button logic
        else {
            if (previousOp == undefined) {
                ans = parseInt(display.innerText);
            }
            else {
            val = parseInt(display.innerText);
            ans = doCalculations(ans,val,previousOp);
            previousOp = undefined;
            display.innerText = ans;
            }

           
        }

        function doCalculations(ans,val,op) {
            let res = 0;
                switch(op) {
                    case '+' :
                        res = add(ans,val);
                        break;

                    case '-' :
                        res = sub(ans,val);
                        break;
                    
                    case 'x' :
                        res = mul(ans,val);
                        break;
                    
                    case '÷' :
                        res = div(ans,val);
                        break;

                }

               return res;
        }
        
    }
});