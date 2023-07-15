import { calculadora } from './calculator';

(function main(): void {
	const resultadoSuma = calculadora.sumar(25, 90);
	const resultadoPotencia = calculadora.potenciar(2, 16);

	console.log(resultadoSuma);
	console.log(resultadoPotencia);
})();
