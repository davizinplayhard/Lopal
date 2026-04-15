/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#jogo");
let ctx = canvas.getContext("2d");
 
let moduloLunar = {
    posicao: {
        x: 100,
        y: 100
    },
    largura: 20,
    altura: 20,
    cor: "#A0A3A1",
    velocidade: {
        x: 0,
        y: 1.5
    }
}
 
function desenhar() {
    //atração gravitacional
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
 
 
    //desenhar fundo da tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = "#0a0a32";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
 
    //desenhar módulo lunar
    ctx.save();
    ctx.beginPath();
    ctx.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    ctx.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, moduloLunar.largura, moduloLunar.altura);
    ctx.fillStyle = moduloLunar.cor;
    ctx.fill();
    ctx.restore();
 
    requestAnimationFrame(desenhar);
 
}
desenhar();
 