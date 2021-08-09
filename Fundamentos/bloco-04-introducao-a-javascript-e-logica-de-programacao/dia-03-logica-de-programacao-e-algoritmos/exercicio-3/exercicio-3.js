let n = 5;
let asterisco = ""
let asterisco2 = "*"
let linha = "";
let espaco = " "


for(let index = 0; index < n; index ++){
    for(let index2 = n; index2 > index; index2 --){
        espaco = espaco + " ";
    }
    asterisco = asterisco + asterisco2
    linha = espaco + asterisco;
    console.log(linha);
    espaco = " "
}