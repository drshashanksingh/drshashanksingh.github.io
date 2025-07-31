document.addEventListener('DOMContentLoaded', function() {
        const myButton = document.getElementById('myButton');

        if (myButton) {
            myButton.addEventListener('click', function() {
                Swal.fire({
                    title: 'Hello!',
                    text: 'This is a SweetAlert on GitHub Pages.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            });
        }
    });