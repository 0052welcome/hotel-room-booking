// Array to store booking history
const bookingHistory = [];

// Handle the booking form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const roomType = document.getElementById('room-type').value;

    // Set price based on room type
    let price = 0;
    switch (roomType) {
        case 'single':
            price = 100;
            break;
        case 'double':
            price = 150;
            break;
        case 'suite':
            price = 250;
            break;
    }

    // Calculate number of nights
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const nights = Math.floor((checkout - checkin) / (1000 * 60 * 60 * 24));

    // Calculate total price
    const totalPrice = nights * price;

    // Create booking details
    const bookingDetails = {
        name: name,
        roomType: roomType,
        checkinDate: checkinDate,
        checkoutDate: checkoutDate,
        totalPrice: totalPrice
    };

    // Store the booking in the history
    bookingHistory.push(bookingDetails);

    // Display booking confirmation
    displayBookingConfirmation(bookingDetails);
});

// Display the booking confirmation message
function displayBookingConfirmation(bookingDetails) {
    document.getElementById('booking-details').innerText = `
        Name: ${bookingDetails.name}
        Room Type: ${bookingDetails.roomType}
        Check-in: ${bookingDetails.checkinDate}
        Check-out: ${bookingDetails.checkoutDate}
        Total Price: $${bookingDetails.totalPrice}
    `;
    document.getElementById('confirmation-message').style.display = 'block';
    displayBookingHistory();
}

// Display booking history
function displayBookingHistory() {
    const historyList = document.getElementById('booking-history-list');
    historyList.innerHTML = '';  // Clear previous history
    bookingHistory.forEach((booking) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${booking.name} booked a ${booking.roomType} from ${booking.checkinDate} to ${booking.checkoutDate}. Total: $${booking.totalPrice}`;
        historyList.appendChild(listItem);
    });
}
