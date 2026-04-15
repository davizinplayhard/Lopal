function classe(){
    class veiculo {
        constructor(nome, ano){
            this.nome = nome;
            this.ano = ano;
        }
        idade(){
            const data = new Date();
            return data.getFullYear() - this.ano;
        
        }
    }

    let meuveiculo = new veiculo("aereo", 2000)

    let frase = "o meu " + meuveiculo.nome + " " + meuveiculo.ano + 
    " tem " + meuveiculo.idade() + " idade"

    
    console.log(frase);
    meuveiculo.
    meuveiculo.
    console.log( meuveiculo.nome + " " meuveiculo.ano);
}

classe();