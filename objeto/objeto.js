const pessoa = {
    nome: "Henrique",
    sobrenome: "Góes",
    idade: 16,
    time: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function () {return this} //retorna o próprio objeto
};
 
console.log(pessoa.nomeCompleto() + " tem " + pessoa.idade + " anos, é torcedor do " +
    pessoa.time + ", mora no estado de " + pessoa.estado + ", no país " + pessoa.pais);