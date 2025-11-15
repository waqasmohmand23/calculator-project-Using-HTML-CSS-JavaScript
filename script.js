let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{button.addEventListener('click',(e) => {
   if (e.target.innerHTML == '=') {

    // Handle cases like 450-20%
    let expr = string;

    // Find patterns like: number operator number%
    expr = expr.replace(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)%/g, function(_, num1, op, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (op === '+' || op === '-') {
            // Example: 450 - 20% → 450 - (20/100 * 450)
            return num1 + op + ((num2 / 100) * num1);
        } else {
            // Example: 200 * 10% → 200 * (10/100)
            return num1 + op + (num2 / 100);
        }
    });

    let result = eval(expr);
    input.value = result;
    string = result.toString();
}

    else if(e.target.innerHTML == 'AC'){
        string ="";
        input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string.length-1);
        input.value=string;
    }
    else if (e.target.innerHTML == '%') {
    string += '%';
    input.value = string;
    }

    else{
        string += e.target.innerHTML;
        input.value = string;
    }

})})