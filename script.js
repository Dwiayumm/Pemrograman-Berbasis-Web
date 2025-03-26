// Fungsi untuk mengevaluasi operasi matematika dengan aman
const hitung = () => {
    let inputOperasi = document.getElementById("Operasi").value;

    // Validasi: hanya angka dan operator yang diperbolehkan
    if (!/^[0-9+\-*/.%() ]+$/.test(inputOperasi)) {
        alert("Operasi tidak valid! Gunakan angka dan operator matematika (+-*/%) saja bro.");
        return;
    }

    try {
        // Ubah input menjadi array angka dan operator
        let angkaDanOperator = inputOperasi.match(/[0-9]+|[\+\-\*\/%]/g);

        if (!angkaDanOperator) throw new Error("Ekspresi kosong!");

        // Ambil operator pertama sebagai patokan
        let operator = angkaDanOperator.find(op => ["+", "-", "*", "/", "%"].includes(op));

        if (!operator) throw new Error("Operator tidak ditemukan!");

        // Ambil angka sebagai array tanpa operator
        let numbers = angkaDanOperator.filter(num => !["+", "-", "*", "/", "%"].includes(num)).map(Number);

        // Panggil fungsi kalkulator
        let hasil = kalkulator(operator, ...numbers);

        document.getElementById("result").innerText = hasil;
    } catch (error) {
        document.getElementById("result").innerText = "Error!";
    }
};

// Fungsi kalkulator dengan spread operator
const kalkulator = (operator, ...numbers) => {
    switch (operator) {
        case "+":
            return numbers.reduce((a, b) => a + b, 0);
        case "-":
            return numbers.reduce((a, b) => a - b);
        case "*":
            return numbers.reduce((a, b) => a * b, 1);
        case "/":
            return numbers.reduce((a, b) => a / b);
        case "%":
            return numbers.reduce((a, b) => a % b);
        default:
            return "Operator tidak valid! Gunakan +, -, *, /, atau %.";
    }
};
