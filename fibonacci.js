function fibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries;
}

let n = 10; // Ubah sesuai kebutuhan
console.log("Program dimulai...");
console.log(`Deret Fibonacci hingga ${n} angka:`, fibonacci(n));
console.log("Program selesai...");
