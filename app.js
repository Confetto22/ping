const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const resetButton = document.querySelector("#reset")
const playTo = document.querySelector("#playto")
const bodyEl = document.body
const darkModeButton = document.querySelector("#darkmode")


darkModeButton.addEventListener("click", function () {
    bodyEl.classList.toggle("switchdark")
})


let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
isGameOver = false;

function increase1Score() {
    p1Button.addEventListener("click", function () {
        if (!isGameOver) {
            p1Score++;
            p1Display.textContent = p1Score;

            if (p1Score === winningScore) {
                p1Display.classList.add("winner")
                p2Display.classList.add("loser")
                isGameOver = true;
                p1Button.disabled = true;
                p2Button.disabled = true;
            }
        }
        
    })
}


function increase2Score() {
    p2Button.addEventListener("click", function () {
        if (!isGameOver) {
            p2Score++;
            p2Display.textContent = p2Score;

            if (p2Score === winningScore) {
                p2Display.classList.add("winner")
                p1Display.classList.add("loser")
                isGameOver = true;
                p1Button.disabled = true;
                p2Button.disabled = true;
            }
        }
        
    })
}

increase1Score();
increase2Score();


playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value)
    reset();
    
})


resetButton.addEventListener("click", reset)

// function resetScores() {
//     resetButton.addEventListener("click", function () {
//         isGameOver = false;
//         p1Score = 0;
//         p2Score = 0;
//         p1Display.textContent = 0;
//         p2Display.textContent = 0;
//         p1Display.classList.remove("winner")
//         p2Display.classList.remove("loser")
//     })
// }
// resetScores();


function reset() {
        isGameOver = false;
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = 0;
        p2Display.textContent = 0;
        p1Display.classList.remove("winner", "loser")
        p2Display.classList.remove("loser", "winner")
        p1Button.disabled = false;
        p2Button.disabled = false;
}
