var caixa = document.querySelector("#caixa")
var linha = document.querySelector("#linha")
var coluna = document.querySelector("#coluna")
var jogar = document.querySelector("#jogar")

tabuleiro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

jogada = 0
alert("O jogador 1 começa")

function desenhar() {
    caixa.innerHTML = ''
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (tabuleiro[i][j] == 0) {
                var div = document.createElement('div')
                var texto = document.createTextNode("")
                div.setAttribute('class', 'conteudo')
                div.appendChild(texto)
                caixa.appendChild(div)
            } else if (tabuleiro[i][j] == 1) {
                var div = document.createElement('div')
                var img = document.createElement('img')
                img.src = 'x.fw.png'
                div.setAttribute('class', 'conteudo')
                div.appendChild(img)
                caixa.appendChild(div)
            } else if (tabuleiro[i][j] == -1) {
                var div = document.createElement('div')
                var img = document.createElement('img')
                img.src = 'circulo.fw.png'
                div.setAttribute('class', 'conteudo')
                div.appendChild(img)
                caixa.appendChild(div)
            }
        }
    }
}

function game() {
    if (linha.value <= 0 || linha.value > 3 || coluna.value <= 0 || coluna.value > 3) {
        alert("Valores digitados invalidos")
        linha.value = ''
        coluna.value = ''
    } else {

        if (tabuleiro[linha.value - 1][coluna.value - 1] === 0) {
            if (jogada % 2 == 0) {
                tabuleiro[linha.value - 1][coluna.value - 1] = 1
                linha.value = ''
                coluna.value = ''
            } else if (jogada % 2 == 1) {
                tabuleiro[linha.value - 1][coluna.value - 1] = -1
                linha.value = ''
                coluna.value = ''
            }
        } else {
            alert("Este lugar ja esta ocupado")
            jogada = jogada - 1
        }
        desenhar()
        jogada = jogada + 1


        if (jogada % 2 == 0 && ganhou() != 1) {
            alert("Agora é a vez do jogador 1")
        } else if (jogada % 2 == 1 && ganhou() != 1) {
            alert("Agora é a vez do jogador 2")
        }
    }
}


function ganhou() {
    soma = 0
    for (i = 0; i < 3; i++) {
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]
        if (soma == 3) {

            alert("Jogador 1 venceu!!")
            setInterval(() => {
                document.location.reload()
            }, 5000);
            return 1
        } else if (soma == -3) {

            alert("Jogador 2 Venceu!!")
            setInterval(() => {
                document.location.reload()
            }, 5000);
            return 1
        }
    }
    for (i = 0; i < 3; i++) {
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]
        if (soma == 3) {

            alert("Jogador 1 venceu!!")
            setInterval(() => {
                document.location.reload()
            }, 5000);
            return 1
        } else if (soma == -3) {

            alert("Jogador 2 Venceu!!")
            setInterval(() => {
                document.location.reload()
            }, 5000);
            return 1

        }
    }
    diagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
    diagonal2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]
    if (diagonal1 == 3 || diagonal2 == 3) {

        alert("Jogador 1 venceu!!")
        setInterval(() => {
            document.location.reload()
        }, 5000);

        return 1
    } else if (diagonal1 == -3 || diagonal2 == -3) {

        alert("Jogador 2 Venceu!!")
        setInterval(() => {
            document.location.reload()
        }, 5000);
        return 1
    }

}