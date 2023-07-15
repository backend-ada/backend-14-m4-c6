interface OptionalParams {
	min?: number;
	max?: number;
}

function getRandomNumber({ min = 0, max = 100 }: OptionalParams = {}) {
	const randomDecimalNumber = Math.random() * (max - min) + min;
	const randomInt = Math.trunc(randomDecimalNumber);
	return randomInt;
}

export default getRandomNumber;
