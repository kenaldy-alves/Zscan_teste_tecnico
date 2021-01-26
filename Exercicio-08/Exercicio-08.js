const printForValue = async () => {
    for (let i = 0; i <= 3; i++) {
        setTimeout(function () { console.log(i); }, 100);
    }
}
/*
 A) os valor impresso e o numero 4 para cada iteração.
  Isso ocorre por que o setTimeOut "agenda" a função callback para imprimir os valores no console após o intervalo 100 ms, e após esse intervalo de tempo o console irá
  imprimir o ultimo valor atibuido a variavel i, que no caso e 4, pois o "for" atribui o valor antes de realizar a verificação.
 */


/*
B)
Para imprimir os valores 0, 1, 2, 3 basta adicionar um parâmetro na função que será executada e informar o valor através da função setTimeOut, 
dessa forma você passa o valor de i no momento em que e chamado o setTimeOut
*/
const printForValue = async () => {
    for (let i = 0; i <= 3; i++) {
      setTimeout(function (i) { console.log(i); }, 100, i);
    }


}