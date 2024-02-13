document.getElementById('home').addEventListener('click', function() {
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
