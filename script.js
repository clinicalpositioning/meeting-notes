document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://hook.eu2.make.com/ob6jz9596rxmhwfvvf453liq7thcn8c2', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        alert('Form submitted successfully!');
        window.location.href = 'thankyou.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});
