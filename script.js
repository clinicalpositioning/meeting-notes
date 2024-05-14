document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const progressBar = document.querySelector('.progress');
    const successMessage = document.querySelector('.success-message');

    fetch('https://hook.eu2.make.com/ob6jz9596rxmhwfvvf453liq7thcn8c2', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            progressBar.style.width = '100%';
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 1000);
        } else {
            throw new Error('Error submitting the form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});
