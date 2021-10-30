const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.transform = 'scale(1.3)';

    document.querySelector('form').style.backgroundColor = '#d3f674';

    document.querySelectorAll('input').forEach(input => {
        input.style.backgroundColor = 'black';
        input.style.color = 'white';
        input.style.transform = 'scale(0.7)';
    });
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#f5c2e0';
    button.style.color = 'black';
    button.style.transform = 'scale(1)';

    document.querySelector('form').style.backgroundColor = '#fcee54';

    document.querySelector('#user_id').classList.remove('white_placeholder');

    document.querySelectorAll('input').forEach(input => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.transform = 'scale(1)';
    });
});

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const userId = document.querySelector('#user_id').value;

    if (userId) {
        return fetch(`http://localhost:8000/api/users/login/${userId}`, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(response => {
            const { token } = response.json();
            chrome.storage.local.set({ userStatus: true, token }, () => {
                window.location.href = "popup-welcome-back.html";
            });
        });
    } else {
        document.querySelector('#user_id').placeholder = "Enter an user id.";
        document.querySelector('#user_id').style.backgroundColor = 'red';
        document.querySelector('#user_id').classList.add('white_placeholder');
    }
});