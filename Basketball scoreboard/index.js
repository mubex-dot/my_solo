let homePoints = document.getElementById("home-points")
let awayPoints = document.getElementById("away-points")
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let counthome = 0
let countaway = 0

// home score count

function add1home() {
    counthome += 1
    homeScore.textContent = counthome
}

function add2home() {
    counthome += 2
    homeScore.textContent = counthome
}
function add3home() {
    counthome += 3
    homeScore.textContent = counthome
}

// away score count

function add1away() {
    countaway += 1
    awayScore.textContent = countaway
}
function add2away() {
    countaway += 2
    awayScore.textContent = countaway
}
function add3away() {
    countaway += 3
    awayScore.textContent = countaway
}

// reset button
function reset() {
    homeScore.textContent = 0
    awayScore.textContent = 0
}

// minus points
function minus1home() {
    homeScore.textContent -= 1
}
function minus1away() {
    awayScore.textContent -= 1
}


