
let count = 0;
let changingValue = document.getElementById("changingValue");
let desiredValue = document.getElementById("desiredValue");

function increase() {
    if (count == desiredValue.value) {
        alert("the value is now equal");
    }
    else {
        count += 1;
        console.log(count);
        changingValue.textContent = count;
    }

}


function decrease() {
    if (count == 0) {
        alert("the value is already equal to zero");
    }
    else {
        count -= 1;
        console.log(count);
        changingValue.textContent = count;
    }

}