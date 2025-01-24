var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if (nivel === 'insano') {
    criarMosquitoTempo = 750
}

function adjustGameSize() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

adjustGameSize()

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function randomPosition() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = ('src/imgs/coracao_vazio.png')
            vidas++
        }
    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    var mosquito = document.createElement('img')
    mosquito.src = 'src/imgs/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

    console.log(randomSize())
    console.log(randomSide())
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}