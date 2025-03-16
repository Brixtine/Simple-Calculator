const display = document.getElementById("display");
let currentInput = '';

document.querySelectorAll("button").forEach(button => { 
    button.addEventListener("click", () => handleChanges(button.textContent)); 
});

function handleChanges(keyPressed){
    //console.log(keyPressed);
    if(keyPressed === 'C' || keyPressed === 'Delete' || keyPressed === 'Escape'){
        currentInput = '';
        display.textContent = '0';
    } else if(keyPressed === '=' || keyPressed ==='Enter'){
        try{
            currentInput = currentInput.replace(/(\d+(\.\d+)?)%(?=[^0-9]|$)/g, (match, number) => `(${parseFloat(number)}/100)`);

            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch {
            display.textContent = "Error";
            currentInput = '';
        }
    } else if (keyPressed === '⬅️' || keyPressed ==='Backspace'){
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    } else if(/^[0-9+\-*/%().]$/.test(keyPressed)) {
        currentInput += keyPressed;
        display.textContent = currentInput;
    }
};

window.addEventListener("keydown", (e) => {
    const key = e.key;

    switch (key) {
        case '0': case '1': case '2':
        case '3': case '4': case '5':
        case '6': case '7': case '8':
        case '9': case '+': case '-':
        case '*': case '/': case '%':
        case '(': case ')':
        case 'Backspace': case '⬅️':
        case '=': case 'Enter':
        case 'C': case 'Delete': case 'Escape':
            handleChanges(key);
            break;
        default:
            break;
    }
})