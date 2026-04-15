function votos(){
    let analfabeto_A = 0;
    let veio_B = 0;
    let corrupto = 0;
    let nulos = 0;
    let total = 0;
    let porcent_cand_a;
    let porcent_cand_b;
    let porcent_brancos;
    let porcent_nulos;
    let voto;
   
    do{
        voto = prompt("Escolhe o candidado menso pior ou desista do país pressionando zero\n" +
            " 1 -> analfabeto A\n" +
            " 2 -> veio B\n" +
            " 3-> corrupto\n" +
            "\nse digitar fora das escolhas nem vai ter seu voto\n" +
            "digite seu voto: ");

        if( voto == "0"){
            alert("votação encerada")
        } else if ( voto == "1" ){
            //analfabeto_A = analfabeto_A + 1;
            analfabeto_A ++
            alert("O candidato A tem " + analfabeto_A + " voto. ")
        } else if ( voto == "2" ){
            //veio_B = veio_B + 1;
            veio_B ++
            alert("O candidato B tem " + veio_B + " voto. ")
        } else if( voto = "3"){
            ++corrupto;
        } else if( voto != "0" || "1" || "2" || "3"){
            ++corrupto;
            alert("votos nulos: " + corrupto)
        }
    } while(voto != 0);

    total = analfabeto_A + veio_B + corrupto + nulos;

    if ( total >0){

        porcent_cand_a = (analfabeto_A * 100)/total;
        porcent_cand_b = (veio_B * 100)/total;
        porcent_brancos = (corrupto * 100)/total;
        porcent_nulos = ( nulos* 100)/total;

        alert("total de votos: " + total+ "\n" +
        "cadidato a: " + analfabeto_A + "voto(s)." +
        porcent_cand_a + "% do total. " +
        "cadidato b: " + veio_B + "voto(s)." +
        porcent_cand_b + "% do total. " +
        "branco: " + corrupto + "voto(s)." +
        porcent_brancos + "% do total. " +
        "nulos: " + nulos + "voto(s)." +
        nulos + "% do total. " +
    }
}
 