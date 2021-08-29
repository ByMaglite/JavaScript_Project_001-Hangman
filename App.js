//Değişkenler

const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = documnet.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['aplication', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const corerectLetters = [];
const wrongLetters = [];

// show hidden word

function displayWord() {
    wordE1.innerHTML = `
    ${selectedWord
            .split('')
            .map(
                letter => `
        <span class = "letter">
        ${corerectLetters.includes(letter) ? letter : ''} 
        </span>
        `
            )
            .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! :)';
        popup.style.display = 'flex';
    }
}

// Update the wrong letters

function updateWrongLetterE1() {
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongletters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongletters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts

    figureParts.forEach((part, index) => {
        const errors = wrongletters.length;

        if (index < errors) {
            part.style.display = 'block'
        }
        else {
            part.style.display = 'none';
        }
    });

    // Check if lost

    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost.';
        popup.style.display = 'flex';
    }
}

// Show notification 

funtion showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Keydown letter press

window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!corerectLetters.includes(letter)) {
                corerectLetters.push(letter);

                displayWord();
            } else {
                showNotification()
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongletters.push(letter);

                updateWrongLetterE1();
            } else {
                showNotification();
            }
        }

    }
});

// Restart Game and play again

playAgainBtn.addEventListener('click',()=>{
    //Empty Arrays 
    corerectLetters.splice(0);
    wrongletters.splice(0);
    
    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();
    updateWrongLetterE1();

    popup.style.display = 'none';
});

displayWord();