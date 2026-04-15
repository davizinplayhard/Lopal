async function lagarta(){
    let lagarta = "()()()()()()( ͡° ͜ʖ ͡°)"
    let espaco = " ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < 20; i++){
        lagarta = espaco + lagarta;
        console.log(lagarta)
        await sleep (145);
        console.clear();
    }
}