const inputvalue = document.getElementById('inputvalue');


function press(num){
    inputvalue.textContent += num;
    
}
function clean(){
    inputvalue.textContent = '';
}
function equal(){
    const overallValue = eval(inputvalue.textContent);
    inputvalue.textContent = overallValue
}