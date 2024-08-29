let score = 0;
let clicks = 0;
const maxClicks = 20;

// Function to handle clicks in the game area
function gameAreaClick(event) {
    if (clicks < maxClicks) {
        clicks++;
        document.getElementById('message').textContent = `Attempts left: ${maxClicks - clicks}`;

        // If clicked on a hidden object, call the foundObject function
        if (event.target.classList.contains('hidden-object')) {
            foundObject(event.target);
        }
    }

    if (clicks >= maxClicks) {
        document.getElementById('message').textContent = "Game over! You've reached the maximum number of attempts.";
        disableClicks();
    }
}

// Function to handle found objects
function foundObject(element) {
    if (element.style.display === 'none') return; // Prevent counting if already found

    // Hide the object when found
    element.style.display = 'none';

    // Increment the score
    score++;
    document.getElementById('score').textContent = score;

    // Check if all objects have been found
    if (score === 10) {
        document.getElementById('message').textContent = "Congratulations! You found all 10 objects!";
        disableClicks();
    }
}

// Function to disable further clicks
function disableClicks() {
    document.getElementById('game-area').removeEventListener('click', gameAreaClick);
}

// Add event listener to the game area
document.getElementById('game-area').addEventListener('click', gameAreaClick);
