function calculadora(){
    let resultado = 0.0;
    let operando1;
    let operando2;
    let operador;

    operando1 = parseFloat( prompt("Digite o primeiro numero") );
    operando2 = parseFloat( prompt("Digite o segundo numero") );
    operador = prompt("Digite uma das operaçoes ( + - * / ) :");
    if ( operador == "+" ){
        resultado = operando1 + operando2;
    } else if ( operador == "-"){
        resultado = operando1 - operando2;    
    } else if ( operador == "*"){
        resultado = operando1 * operando2;
    } else if ( operador == "/"){
        resultado = operando1 / operando2;
    } else {
        alert("operador invalido")
        return
    }

    alert("Resultado: " +
        operando1 + "" + operador + "" + operando2 + " = " + resultado);
}