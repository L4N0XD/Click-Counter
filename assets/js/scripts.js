var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0
const span = document.getElementsByTagName('span')[0]


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber == 0) {
    span.style.color = 'gray' 
    } 
    if (currentNumber >= 10) {
        let Mais = document.querySelector(".Mais");
        Mais.disabled = true;}
    if (currentNumber >-10) {
        let Menos = document.querySelector(".Menos");
        Menos.disabled = false; 
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
    span.style.color = 'red'       
    } if (currentNumber < 10) {
        let Mais = document.querySelector(".Mais");
        Mais.disabled = false; }
    if (currentNumber == -10) {
        let Menos = document.querySelector(".Menos");
        Menos.disabled = true; }  
    }

          