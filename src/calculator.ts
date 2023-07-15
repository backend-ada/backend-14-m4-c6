const calculator = {
	add: (a: number, b: number) => a + b,
	subtract: (a: number, b: number) => a - b,
	multiply: (a: number, b: number) => a * b,
	divide: (a: number, b: number) => Number((a / b).toFixed(3)),
	pow: (a: number, b: number) => a ** b,
};

export { calculator };
