function fibonacci(n) {
	const root5 = Math.sqrt(5);
	const phi = (1 + root5) / 2;

	const operation1 = (2 * phi) ** (n + 1);
	const operation2 = (2 * (phi - root5)) ** (n + 1);
	const operation3 = ((2 * phi) - 1) * (2 ** (n + 1));

	const result = (operation1 - operation2) / operation3;
	return Math.round(result);
}
