// triangle
function calculateTriangle() {
    const traingleBase = document.getElementById('triangleBase').value;
    const base = parseFloat(traingleBase);

    const triangleHeight = document.getElementById('triangleHeight').value;
    const height = parseFloat(triangleHeight)

    const triangleResult = document.getElementById('triangleResult');

    if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
        const area = 0.5 * (base * height);
        triangleResult.innerText = area.toFixed(2);
    } else {
        triangleResult.innerText = 'Invalid';
    }

}

// rectangle
const calculateRectangle = () => {
    const rectangleW = document.getElementById('rectangleW').value;
    const w = parseFloat(rectangleW);

    const rectangleI = document.getElementById('reactangleI').value;
    const i = parseFloat(rectangleI);

    const rectangleResult = document.getElementById('rectangleResult');

    if (!isNaN(w) && !isNaN(i) && w > 0 && i > 0) {
        const area = w * i;
        rectangleResult.innerText = area.toFixed();
    } else {
        rectangleResult.innerText = 'Invalid';
    }

}

// parallelogram
const calculateParallelogramH = () => {
    const b = getInputValueById('parallelogramB');
    const h = getInputValueById('parallelogramH');

    const area = b * h;
    setCalculationResult('parallelogramResult', area);
}

// rhombus
function calculateRhombus() {
    const d1 = getInputValueById('rhombusD1');
    const d2 = getInputValueById('rhombusD2');

    const area = 0.5 * (d1 * d2);
    setCalculationResult('rhombusResult', area)
}

// pentagon
function calculatePentagon() {
    const p = getInputValueById('pentagonP');
    const b = getInputValueById('pentagonB');

    const area = 0.5 * (p * b);

    setCalculationResult('pentagonResult', area)
}


// ellipse
function calculateEllipse() {
    const a = getInputValueById('ellipseA');
    const b = getInputValueById('ellipseB');

    const area = 3.143 * (a * b);

    setCalculationResult('ellipseResult', area)
    
}

// reusable functions get value by ids
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.innerText;
    const value = parseFloat(inputValueText);
    return value
}

// set inner value
function setCalculationResult (elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area.toFixed(2);

}

// ------------------color section-------------
// color generator
const colorGenerator = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

// triangle
function triangleColor () {
    const card = getColorId('triangle');
    setBackgroundColor(card) 
}

// rectangle
function rectangleColor() {
    const card = getColorId('rectangle');
    setBackgroundColor(card) 
}

// parallelogram
function parallelogramColor() {
    const card = getColorId('parallelogram');
    setBackgroundColor(card) 
}

// rhombus
function rhombusColor() {
    const card = getColorId('rhombus');
    setBackgroundColor(card) 
}

// pentagon
function pentagonColor() {
    const card = getColorId('pentagon');
    setBackgroundColor(card) 
}

// ellipse
function ellipseColor() {
    const card = getColorId('ellipse');
    setBackgroundColor(card) 
}

// give me the id
function getColorId (elementId) {
    const id = document.getElementById(elementId)
    return id;
}

// set the color
function setBackgroundColor(card) {
    const color = colorGenerator();
    card.style.backgroundColor = color;
}


// footer
const yearText = document.getElementById('year');
const fullYear = new Date().getFullYear();
yearText.innerText = fullYear;