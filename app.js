let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const guessStatus = document.querySelector('.guess_status')
const more_or_less = document.querySelector('.more_or_less')

const guessField = document.querySelector('.guessField')
const guessSubmit = document.querySelector('.guessSubmit')
const reset = document.querySelector('.reset')

let guessCount = 1
let resetButton

guessField.focus()

guessSubmit.addEventListener('click', checkGuess)

document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ) checkGuess()
  })

function checkGuess() {
    if (guessField.value) {
        let enteredNumber = Number(guessField.value)
        if (isNaN(enteredNumber)) {
            alert('Это не число!')
        }
        else {
            if (guessCount === 1) {
                guesses.textContent = 'Твои введенные числа: '
            }
            guesses.textContent += enteredNumber + ' '
            if (enteredNumber === randomNumber) {
                guessStatus.style.background = 'green'
                guessStatus.textContent = `Молодец! Это действительно ${randomNumber}!`
                gameOver()
            }
            else if (guessCount === 10) {
                guessStatus.style.background = '#a31414'
                guessStatus.textContent = `Шеф! Всё пропало! Это было число ${randomNumber}!`
                gameOver()
            }
            else {
                guessStatus.textContent = 'Неправильно!'
                if (enteredNumber < randomNumber) {
                    guessStatus.style.background = 'hsl(240, 30%, 60%)'
                    more_or_less.textContent = 'Твоё число меньше.'
                }
                else {
                    guessStatus.style.background = 'hsl(0, 100%, 70%)'
                    more_or_less.textContent = 'Твоё число больше.'
                }
            }
            guessCount++
            guessField.value = ''
            guessField.focus();
        }
    }
}

function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    more_or_less.textContent = ''
    reset.style.display = 'block'
    reset.addEventListener('click', event => {
        reset.style.display = 'none'
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.focus()
        guessCount = 1
        guesses.textContent = ''
        guessStatus.textContent = ''
        guessStatus.style.background = 'none'
        randomNumber = Math.floor(Math.random() * 100) + 1
    })
}