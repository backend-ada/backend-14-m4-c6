import { calculator } from './calculator';
import randomNumber from './random-number';

(function main(): void {
	const randomNumA = randomNumber();
	const randomNumB = randomNumber({ min: 10, max: 200 });
	const randomNumC = randomNumber({ min: 150 });
	const randomNumD = randomNumber({ max: 32 });

	console.log('|- Random numbers -|');

	console.table({
		A: randomNumA,
		B: randomNumB,
		C: randomNumC,
		D: randomNumD,
	});

	console.log(' ');

	const addResult = calculator.add(randomNumA, randomNumB);
	const powerResult = calculator.pow(2, randomNumD);
	const divisionResult = calculator.divide(randomNumC, randomNumD);

	console.log('A + B = ', addResult);
	console.log(2, '** D =', powerResult);
	console.log('C / D = ', divisionResult);
})();
