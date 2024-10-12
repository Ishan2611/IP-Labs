function* generatePrimes(limit) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function getLimitFromCommandLine() {
    const args = process.argv.slice(2);
    const limit = Number(args[0]);
    
    if (isNaN(limit) || limit <= 1) {
        console.error('Error: Please provide a valid limit greater than 1.');
        process.exit(1);
    }

    return limit;
}

function main() {
    const limit = getLimitFromCommandLine();
    const primeGenerator = generatePrimes(limit);

    console.log(`Prime numbers up to ${limit}:`);
    for (const prime of primeGenerator) {
        console.log(prime);
    }
}

main();
