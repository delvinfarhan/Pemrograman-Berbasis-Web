const calculateFib = () => {
    const n = document.getElementById('fibInput').value;
    const sequence = [...getFibSequence(n)];
    document.getElementById('fibResult').textContent = sequence.join(', ');
};

const getFibSequence = (n) => {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence;
};

const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    const operations = {
        '+': (...numbers) => numbers.reduce((a, b) => a + b),
        '-': (...numbers) => numbers.reduce((a, b) => a - b),
        '*': (...numbers) => numbers.reduce((a, b) => a * b),
        '/': (...numbers) => numbers.reduce((a, b) => a / b)
    };

    const result = operations[operator](...[num1, num2]);
    document.getElementById('calcResult').textContent = `Hasil: ${result}`;
};