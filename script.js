function makeBubbles() {
    for (let i = 1; i <= 102; i++) {
        let randomNumber = Math.round(Math.random() * 10)
        document.querySelector('.bottom_panel').innerHTML += `<div class="bubble">${randomNumber}</div>`
    }
}

function hitNumberGenerator() {
    document.querySelector('.hit_container div').innerText = Math.round(Math.random() * 10)
}

function timeReducer() {
    const timer = document.querySelector('.timer_container div')
    console.log(parseInt(timer.innerText))
    let timerText = parseInt(timer.innerText)
    if (timerText > 0) {
        timer.innerText = --timerText;
    } else {
        document.querySelector('.bottom_panel').innerHTML = '<h1 class="game_over">Game Over</h1>'
        clearInterval(myInterval);
    }
}

function similarityCheck() {
    document.querySelector('.bottom_panel').addEventListener('click', function (e) {
        const hit = parseInt(document.querySelector('.hit_container div').innerText)
        const clickedItem = parseInt(e.target.innerText)
        if (hit === clickedItem) {
            let score = parseInt(document.querySelector('.score_container div').innerText) + 10;
            document.querySelector('.score_container div').innerText = score;
            document.querySelector('.bottom_panel').innerHTML = '';
            makeBubbles();
            hitNumberGenerator();
        }
    })
}


const myInterval = setInterval(timeReducer, 1000)

makeBubbles()
hitNumberGenerator()
similarityCheck()