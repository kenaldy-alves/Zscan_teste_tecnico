const RemainThreeAndFive = () => {
    let i;

    // Lógica:  Calculo o resto da divisão
    // Se o resto da divisao por 3 e igual zero o numero e multiplo de 3
    // Se o resto da divisao por 5 e igual zero o numero e multiplo de 5

    for (i = 1; i <= 100; i++) {
        // Verifica se e multiplo de 3
        if (i % 3 === 0 && i % 5 !== 0)
            console.log('Fizz', i)
        // Verifica se e multiplo de 5
        if (i % 3 !== 0 && i % 5 === 0)
            console.log('Buzz', i)
        // Verifica se e multiplo de 3 e 5
        if (i % 3 === 0 && i % 5 === 0)
            console.log('FizzBuzz', i)
    }

}