function colourFlipper(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
    
};
function colourChanger(){
    const newColor = colourFlipper();
    document.body.style.background = newColor;
};

