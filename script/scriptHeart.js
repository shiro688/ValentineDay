let clickCount = 0;
const heart = document.querySelector('.heart');
const text = document.querySelector('.text');

heart.addEventListener('click', () => {
    clickCount++;

    // Grow the heart with each click
    const newSize = 50 + clickCount * 5; // Increase size with each click
    heart.style.fontSize = `${newSize}px`;

    // Update the text after every 5 clicks before the 20th click
    if (clickCount <= 20) {
        if (clickCount % 5 === 1) {
            text.textContent = "More clicks!";
        } else if (clickCount % 5 === 2) {
            text.textContent = "Keep clicking!";
        } else if (clickCount % 5 === 3) {
            text.textContent = "Spam Me!";
        } else if (clickCount % 5 === 4) {
            text.textContent = "You're doing great!";
        } else if (clickCount % 5 === 0) {
            text.textContent = "KEEP SPAMMING!";
        }
    }

    // After the 20th click, change the text to a new set
    if (clickCount > 20) {
        if (clickCount % 5 === 1) {
            text.textContent = "Just a bit more!";
        } else if (clickCount % 5 === 2) {
            text.textContent = "Click FASTER";
        } else if (clickCount % 5 === 3) {
            text.textContent = "Keep going!";
        } else if (clickCount % 5 === 4) {
            text.textContent = "Almost there!";
        } else if (clickCount % 5 === 0) {
            text.textContent = "You got this!";
        }
    }

    // After the 50th click, change the text to a new set
    if (clickCount > 50) {
        if (clickCount % 5 === 1) {
            text.textContent = "You're so close!";
        } else if (clickCount % 5 === 2) {
            text.textContent = "Just a few more!";
        } else if (clickCount % 5 === 3) {
            text.textContent = "Keep clicking!";
        } else if (clickCount % 5 === 4) {
            text.textContent = "Almost there!";
        } else if (clickCount % 5 === 0) {
            text.textContent = "FASTERRR!";
        }
    }
    
    // After the 80th click, change the text to a new set
    if (clickCount > 80) {
        if (clickCount % 5 === 1) {
            text.textContent = "Nearly there!";
        } else if (clickCount % 5 === 2) {
            text.textContent = "You're doing it!";
        } else if (clickCount % 5 === 3) {
            text.textContent = "Just a bit more!";
        } else if (clickCount % 5 === 4) {
            text.textContent = "Hang in there!";
        } else if (clickCount % 5 === 0) {
            text.textContent = "Just A FEEWWWW MOREEE!";
        }
    }

    // After 100 clicks
    if (clickCount === 100) {
        if (text && heart) {
            text.style.opacity = "0"; // Hide the text after 100 clicks
            heart.style.transform = "scale(20)"; // Make the heart the size of the page

            // After 1 second, pop the heart and redirect to new page
            setTimeout(() => {
                heart.style.transition = 'transform 1s ease';
                heart.style.transform = 'scale(0)'; // Simulate heart popping by shrinking it

                setTimeout(() => {
                    // Redirect to the next page
                    window.location.href = 'valentinePage.html'; // Use relative path
                }, 1000); // Redirect after the pop animation
            }, 500); // Wait a moment before starting the pop effect
        } else {
            console.error("Text or heart element is missing!");
        }
    }
    });
