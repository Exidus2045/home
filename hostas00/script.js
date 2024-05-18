document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.txt')
        .then(response => response.text())
        .then(data => {
            console.log('Users data:', data); // Log the data to see if it's fetched correctly
            const users = data.split('\n').map(line => line.split(','));
            console.log('Parsed users:', users); // Log the parsed users to see if it's formatted correctly
            const user = users.find(user => user[0] === username && user[1] === password);

            if (user) {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('error').textContent = 'Invalid username or password';
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
});
