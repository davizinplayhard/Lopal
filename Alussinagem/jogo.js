let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");
let modulolunar = {
    posicao:{
        x: 700,
        y: 100
    },
    ângulo: Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: -1.5,
        y: 0
    },
    motorLigado: false,
    combustível: 1000,
    rotaçãoHorario: false,
    rotaçãoAntihorario: false
}
function mostrarCombustível(){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "White";
    contexto.fillText(
        `Combustível: ${(modulolunar.combustível * 0.1).toFixed(0)} %`,
        50,
        80
    );
}
function mostrarVelocidadeVertical(){
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseline = "middle";
    contexto.fillStyle = "White";
    contexto.fillText(
        `Velocidade: ${(modulolunar.velocidade.y * 10).toFixed(2)}`,
        50,
        60
    );
}
function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = "#000123"
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    contexto.restore();
}
function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(modulolunar.posicao.x, modulolunar.posicao.y)
    contexto.rotate(modulolunar.ângulo);
    contexto.rect(modulolunar.largura * -0.5, modulolunar.altura * -0.5,
        modulolunar.largura, modulolunar.altura);
    contexto.fillStyle = modulolunar.cor;
    contexto.fill();
    contexto.closePath();
   
    if(modulolunar.motorLigado){
        desenharChama();
        modulolunar.combustível--;
        if(modulolunar.combustível <= 0){
            modulolunar.motorLigado = false;
        }  
    }
   
    contexto.restore();
}
function desenharChama(){
    contexto.beginPath();
    contexto.moveTo(modulolunar.largura * -0.5, modulolunar.altura * 0.5);
    contexto.lineTo(modulolunar.largura * 0.5, modulolunar.altura * 0.5);
    contexto.lineTo(0, modulolunar.altura * 0.5 + Math.random() * 35);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}
function desenhar(){
    atraçãoGravitacional();
    desenharFundo();
    desenharModuloLunar();
    mostrarCombustível();
    mostrarVelocidadeVertical();
 
    if(modulolunar.posicao.y > canvas.height -modulolunar.altura * 0.5){
       if(modulolunar.velocidade.y <= 0.5){
            mostrarResultado("Você Aterrissou na Lua com Sucesso!", cor = "green");
        } else{
            mostrarResultado("Você Espatifou a Nave na Lua!", cor = "red");
        }
        return
    }
    requestAnimationFrame(desenhar);
}
function mostrarResultado(mensagem, cor){
    contexto.font = "bold 30px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText(mensagem, canvas.width * 0.5, canvas.height * 0.5);
    cancelAnimationFrame(desenharModuloLunar, mostrarCombustível, mostrarVelocidadeVertical)
 
}
document.addEventListener("keydown", teclaPressionada);

function teclaPressionada(evento) {
    if (evento.key == "w" && modulolunar.combustível > 1) {
        modulolunar.motorLigado = true;
    } else if (evento.key == "d") {
        modulolunar.rotaçãoHorario = true;
    } else if (evento.key == "a") {
        modulolunar.rotaçãoAntihorario = true;
    }
}

document.addEventListener("keyup", teclaSolta);

function teclaSolta(evento) {
    if (evento.key == "w") {
        modulolunar.motorLigado = false;
    } else if (evento.key == "d") {
        modulolunar.rotaçãoHorario = false;
    } else if (evento.key == "a") {
        modulolunar.rotaçãoAntihorario = false;
    }
}
const gravidade = 0.01;
function atraçãoGravitacional(){
    modulolunar.posicao.x += modulolunar.velocidade.x;
    modulolunar.posicao.y += modulolunar.velocidade.y;
    modulolunar.velocidade.y += gravidade;
 
    if(modulolunar.rotaçãoHorario){
        modulolunar.ângulo += Math.PI/180;
    } else if(modulolunar.rotaçãoAntihorario){
        modulolunar.ângulo -= Math.PI/180;
    }
    if(modulolunar.motorLigado){
        modulolunar.velocidade.y -= 0.02 * Math.cos(modulolunar.ângulo)
        modulolunar.velocidade.x += 0.02 * Math.sin(modulolunar.ângulo)
    }
}
desenhar();
 