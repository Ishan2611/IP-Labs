function* createSquareIterator(numbers) {
    for (const number of numbers) {
        yield number ** 2;
    }
}

const args = process.argv.slice(2);

const numbers = args.map(arg => {
    const num = Number(arg);
    if (isNaN(num)) {
        console.error(`Error: '${arg}' is not a valid number.`);
        process.exit(1);
    }
    return num;
});

const squareIterator = createSquareIterator(numbers);

for (const result of squareIterator) {
    console.log(result);
}