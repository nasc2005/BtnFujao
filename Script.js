const noButton = document.getElementById('no');
        const yesButton = document.getElementById('yes');

        noButton.addEventListener('click', () => {
            const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

            noButton.style.position = 'absolute';
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        });

        yesButton.addEventListener('click', () => {
            alert('Ótimoooooo! Me mande uma mensagem: (11) 97253-7374');
        });