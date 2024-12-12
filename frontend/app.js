const API_URL = "http://localhost:5000";

async function register() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    const message = document.getElementById('registerMessage');
    if (response.status === 201) {
        message.style.color = 'green';
        message.textContent = 'Registration successful!';
    } else {
        message.style.color = 'red';
        message.textContent = result.message;
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    const message = document.getElementById('loginMessage');
    if (response.status === 200) {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        localStorage.setItem('token', result.token);
    } else {
        message.style.color = 'red';
        message.textContent = result.message;
    }
}
