document.addEventListener("DOMContentLoaded", () => {
    // Function to update the countdown
    function updateCountdown() {
        const today = new Date();
        const valentinesDay = new Date("2025-02-14T00:00:00");

        // Check if today is Valentine's Day or after
        if (today >= valentinesDay) {
            // Redirect to the main Valentine's Day page
            window.location.href = 'heartPage.html';
        } else {
            // Calculate the difference in milliseconds
            const diffTime = valentinesDay - today;

            // Convert milliseconds into days, hours, minutes, and seconds
            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

            // Update the countdown message
            const messageElement = document.getElementById("message");
            const countdownElement = document.getElementById("countdown");

            messageElement.textContent = "Time left until Valentine's Day:";
            countdownElement.textContent = `${days} day${days === 1 ? '' : 's'} ${hours} hour${hours === 1 ? '' : 's'} ${minutes} minute${minutes === 1 ? '' : 's'} and ${seconds} second${seconds === 1 ? '' : 's'}`;
        }
    }

    // Run the countdown update immediately and every second
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second

    // Ensure the button exists before trying to add the event listener
    const button = document.getElementById("goToHeartPage");
    if (button) {
        button.addEventListener("click", () => {
            window.location.href = 'page/heartPage.html';  // Use relative path without leading "/"
        });
    } else {
        console.warn('Button with id "goToHeartPage" not found.');
    }
});
