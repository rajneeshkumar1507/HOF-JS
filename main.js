function parseInput(input) {
    if (!input) {
        console.log("Input is empty or null.");
        return [];
    }
    let inputArray = input
        .split(/[ ,;]+/)
        .map(Number)
        .filter(n => !isNaN(n));
    console.log("Parsed Input Array:", inputArray);
    
    return inputArray;
}

function executeHOF() {
    const input = prompt("Enter Numbers (separated by space, comma, or semicolon):");
    const hofSelect = prompt("Select HOF: \n1. Mapping Array Elements\n2. Filtering Data\n3. Reducing Arrays");
    const outputElement = document.getElementById("output");

    const inputArray = parseInput(input);
    if (inputArray.length === 0) {
        outputElement.textContent = "Invalid input or empty array";
        return;
    }

    let result;
    switch (hofSelect) {
        case "1":
            result = mapArray(inputArray);
            break;
        case "2":
            result = filterArray(inputArray);
            break;
        case "3":
            result = reduceArray(inputArray);
            break;
        default:
            outputElement.textContent = "Please select a valid function.";
            return;
    }
    outputElement.textContent = `Output: ${JSON.stringify(result)}`;
}

function mapArray(arr) {
    return arr.map(num => num * 2);
}

function filterArray(arr) { 
    return arr.filter(num => num % 2 === 0);
}

function reduceArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
