document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://hook.eu2.make.com/ob6jz9596rxmhwfvvf453liq7thcn8c2', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            const progressBar = document.querySelector('.progress');
            progressBar.style.width = '100%';
            document.querySelector('.success-message').style.display = 'block';
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 1000);
        } else {
            alert('Error submitting the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});