function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multyply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}


const result: number = addNumbers(1, 3);
const result2: string = addNumbersArrow(1, 3);
const multiplyResult: number = multyply(5);



console.log({ result, result2, multiplyResult });

export { };