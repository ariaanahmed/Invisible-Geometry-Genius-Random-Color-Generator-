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

    const parallelogramB = document.getElementById('parallelogramB').innerText;
    const b = parseFloat(parallelogramB);

    const parallelogramH = document.getElementById('parallelogramH').innerText;
    const h = parseFloat(parallelogramH);

    const parallelogramResult = document.getElementById('parallelogramResult');

    const area = b * h;

    parallelogramResult.innerText = area;
}

// rhombus
function calculateRhombus() {
    const rhombusResult = document.getElementById('rhombusResult');

    const rhombusD1 = document.getElementById('rhombusD1').innerText;
    const d1 = parseFloat(rhombusD1);

    const rhombusD2 = document.getElementById('rhombusD2').innerText;
    const d2 = parseFloat(rhombusD2);

    const area = 0.5 * (d1 * d2);

    rhombusResult.innerText = area.toFixed(2);
}

// pentagon
function calculatePentagon() {
    const pentagonResult = document.getElementById('pentagonResult');

    const pentagonP = document.getElementById('pentagonP').innerText;
    const p = parseFloat(pentagonP);

    const pentagonB = document.getElementById('pentagonB').innerText;
    const b = parseFloat(pentagonB)

    const area = 0.5 * (p * b);
    pentagonResult.innerText = area.toFixed(2);

}


// ellipse
function calculateEllipse() {
    const ellipseResult = document.getElementById('ellipseResult');

    const ellipseA = document.getElementById('ellipseA').innerText;
    const a = parseFloat(ellipseA);

    const ellipseB = document.getElementById('ellipseB').innerText;
    const b = parseFloat(ellipseB);

    const area = 3.143 * (a * b);
    console.log('hello');

    ellipseResult.innerText = area;
    
}

// color generator
const colorGenerator = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// triangle.addEventListener('mouseover', () => {
//     const bgColor = colorGenerator()
//     triangle.style.backgroundColor = bgColor
// })

const triangle = document.getElementById('triangle');
triangle.style.backgroundColor = colorGenerator();

const rectangle = document.getElementById('rectangle');
rectangle.style.backgroundColor = colorGenerator();

const parallelogram = document.getElementById('parallelogram');
parallelogram.style.backgroundColor = colorGenerator();

const rhombus = document.getElementById('rhombus');
rhombus.style.backgroundColor = colorGenerator();

const pentagon = document.getElementById('pentagon');
pentagon.style.backgroundColor = colorGenerator();

const ellipse = document.getElementById('ellipse');
ellipse.style.backgroundColor = colorGenerator();

// footer function
const yearText = document.getElementById('year');
const fullYear = new Date().getFullYear();
yearText.innerText = fullYear;