document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://cors-anywhere.herokuapp.com/https://hook.eu2.make.com/ob6jz9596rxmhwfvvf453liq7thcn8c2', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            window.location.href = 'thankyou.html';
        } else {
            throw new Error('Error submitting the form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});
