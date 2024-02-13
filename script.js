document.getElementById('home').addEventListener('click', function() {
    var ticket = document.getElementById('ticket');
    ticket.classList.remove('hidden'); // Ensure it's not marked as hidden
    ticket.classList.add('slide-in'); // Apply the slide-in animation
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
