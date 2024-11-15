document.addEventListener('DOMContentLoaded', function () {
    // Display the modal when the page loads
    const modal = document.getElementById('adblock-modal');
    modal.style.display = 'flex'; // Ensures modal is flex for centering

    // Close the modal when the close button is clicked
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
