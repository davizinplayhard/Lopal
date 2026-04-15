function ternario(){
    let dia;
    let data = new Date().getDay();

    dia = data == 0 ? "Domingo" :
      data == 1 ? "Segunda" :
      data == 2 ? "Terça" :
      data == 3 ? "Quarta" :
      data == 4 ? "Quinta" :
      data == 5 ? "Sexta" : 
      "Sábado";

      document.getElementById("demo").innerHTML = "Hoje é " + dia;
}