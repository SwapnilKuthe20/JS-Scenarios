// Check if a Number is Prime od Not

const isPrime = (num) => {

    if (num < 2) {
        console.log(`${num} is not a Prime Number.`);
        return
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} is not a Prime Number.....`);
            return
        }
    }

    console.log(`${num} is the Prime Number.`);
}

isPrime(15)
