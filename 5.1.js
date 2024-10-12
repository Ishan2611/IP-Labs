function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject('Both arguments must be valid numbers.');
            return;
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero is not allowed.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation. Please use +, -, *, or /.');
        }
    });
}

const args = process.argv.slice(2); 
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2]; 


console.log(`Inputs: Number 1 = ${num1}, Number 2 = ${num2}, Operation = ${operation}`);

calculator(num1, num2, operation)
    .then(result => console.log('Result:', result))
    .catch(error => console.log('Error:', error));