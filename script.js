document.getElementById('submit-button').addEventListener('click', function() {
    var ticket = document.getElementById('ticket');
    ticket.style.display = 'block'; // Ensure it's visible
    setTimeout(() => {
        ticket.style.transform = 'translateY(0)'; // Slide in
    }, 10); // Timeout to ensure the transition is applied after display changes
});

let ticketState = 1; // Track which ticket is showing

document.getElementById('ticket').addEventListener('click', function() {
    if (ticketState === 1) {
        document.getElementById('ticketImage').src = 'ticket2.png';
        ticketState = 2;
    } else {
        document.getElementById('ticketImage').src = 'ticket1.png';
        ticketState = 1;
    }
});

function updateDateTime() {
    const now = new Date();
    const currentDateElement = document.getElementById('date');
    const currentTimeElement = document.getElementById('time');
    currentDateElement.textContent = now.toLocaleDateString('en-US');
    currentTimeElement.textContent = now.toLocaleTimeString('en-US');
}

setInterval(updateDateTime, 1000); // Update the date and time every second

const textInput = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');
const ovalElement = document.getElementById('oval');

submitButton.addEventListener('click', function() {
    const enteredText = textInput.value;
    ovalElement.textContent = enteredText;
});