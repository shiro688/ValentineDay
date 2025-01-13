 function startBouncing(heart) {
            let gameBox = document.querySelector('.game');
            let x = Math.random() * (gameBox.offsetWidth - heart.offsetWidth);
            let y = Math.random() * (gameBox.offsetHeight - heart.offsetHeight);
            let dx = (Math.random() < 0.5 ? 1 : -1) * 1.5; // Slower horizontal speed
            let dy = (Math.random() < 0.5 ? 1 : -1) * 1.5; // Slower vertical speed

            function moveHeart() {
                x += dx;
                y += dy;

                // Check for collisions with the game box boundaries
                if (x <= 0 || x + heart.offsetWidth >= gameBox.offsetWidth) {
                    dx *= -1;
                }
                if (y <= 0 || y + heart.offsetHeight >= gameBox.offsetHeight) {
                    dy *= -1;
                }

                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;

                if (!heart.classList.contains('clicked')) {
                    requestAnimationFrame(moveHeart);
                }
            }

            moveHeart();
        }

        function spawnHearts() {
            const gameBox = document.querySelector('.game');

            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.className = 'click-me';
                heart.textContent = '❤️';
                heart.style.position = 'absolute';
                heart.style.left = '0';
                heart.style.top = '0';

                heart.addEventListener('click', function() {
                    heart.classList.add('clicked');
                    heart.style.transition = 'opacity 0.3s ease';
                    heart.style.opacity = '0';
                    setTimeout(() => {
                        heart.remove();
                        checkCompletion();
                    }, 300); // Remove after fade-out
                });

                gameBox.appendChild(heart);
                startBouncing(heart);
            }
        }

        function checkCompletion() {
            // Check if there are no hearts left in the game container
            const hearts = document.querySelectorAll('.click-me');

            if (hearts.length === 0) {
                window.location.href = '/page/mainValentine.html'; // Redirect to mainValentine.html
            }
        }

        window.onload = function() {
            spawnHearts();
        };
