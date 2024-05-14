document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const progressBar = document.querySelector('.progress');
    const successMessage = document.querySelector('.success-message');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hook.eu2.make.com/ob6jz9596rxmhwfvvf453liq7thcn8c2');

    xhr.upload.onprogress = function(event) {
        const percent = (event.loaded / event.total) * 100;
        progressBar.style.width = percent + '%';
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 1000);
        } else {
            alert('Error submitting the form. Please try again.');
        }
    };

    xhr.onerror = function() {
        console.error('Error submitting the form.');
        alert('Error submitting the form. Please try again.');
    };

    xhr.send(formData);
});
