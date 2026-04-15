function loop(){
    let texto = "";
    let 1 = 0;

    do{
        texto += "O numero é " + i + "<br>";
        i++;
    }while (i < 10);

    document.getElementById("demo").innerHTML = texto;
}