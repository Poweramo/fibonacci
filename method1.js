function fibonacci(n) {
	if (n === 0 || n === 1) return 1;

	return fibonacci(n - 2) + fibonacci(n - 1);
}

const tests = [];
for (let i = 0; i <= 100; i++) tests.push(i);
const results = [];
