const pontuacoes = [10, 20, 20, 0, 8, 25, 3, 0, 30, 1, 50, 0];

const pontuacaoRegistradas = (pontuacao) => {
  const array = [];
  let qtdRecordes = 0;
  let guardaPiorPontuacao = 0;
  let piorPontuacao = [];

  for (let index = 0; index < pontuacao.length; index++) {
    if (pontuacao[index] >= 0) {
      //Verifica se a pontuação e maior q 0 para n poder ter notas negativas
      if (pontuacao[index + 1] > pontuacao[index]) {
        // Compara a posição posterior coma anterior do array
        qtdRecordes++;
      } else if (pontuacao[index + 1] === 0) {
        //Verifica se tem pontuação == 0, se tiver atriui o indice dela na variavel
        guardaPiorPontuacao = index + 1;
        piorPontuacao.push(guardaPiorPontuacao); // Add as posoções das piores notas
      }
    } else {
      console.log(`Você informou uma número negativo: ${pontuacao[index]}`);
      break;
    }
  }
  if (qtdRecordes > 0 && guardaPiorPontuacao !== 0) {
    array.push(qtdRecordes);
    array.push(piorPontuacao);
    return `Quantidade do recorde batido: ${
      array[0]
    }\nPosições das piores notas: ${array[0 + 1]}`;
  } else if (qtdRecordes > 0) {
    array.push(qtdRecordes);
    return `Quantidade do recorde batido: ${array[0]}\nPosições inexistente`;
  } else {
    console.log("Recorde não batido");
  }
};
console.log(pontuacaoRegistradas(pontuacoes));
