//função que vai configurar o jogo
function batalhaNaval () {
var posicaoAleatoria = 1 + Math.floor(Math.random() * 5);
//As três variáveis vão criar o navio de forma aleatória
var parte1 = posicaoAleatoria;
var parte2 = parte1+1;
var parte3 = parte2 +1;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

//O Ciclo while serve para que o jogo só acabe quando o navio for afundado
while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");
//O if impossibilita jogadas com valor maior que 7 e menor que 1
   if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}
//Cálcula a precisão do jogador
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);

}