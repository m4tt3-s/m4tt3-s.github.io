document.getElementById('home').addEventListener('click', function() {
    document.getElementById('ticket').style.display = 'block'; // Show ticket div
    document.getElementById('ticket').classList.add('slide-in'); // Add animation class if needed
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
