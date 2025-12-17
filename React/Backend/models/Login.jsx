const bcrypt = require('bcrypt');
const signup_schema = require('./SignupSchema');

const loginUser = async (email, password) => {
    try {
        const user = await signup_schema.findOne({ email });
        if (!user) {
            return { success: false, message: "User not found" };
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { success: false, message: "Invalid credentials" };
        }
        
        return { 
            success: true, 
            message: "Login successful", 
            user: { email: user.email, username: user.username } 
        };
    } catch (error) {
        return { success: false, message: "Login failed", error: error.message };
    }
};

const renderLoginPage = () => {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
        body { font-family: Arial; max-width: 400px; margin: 50px auto; padding: 20px; }
        .form-group { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; }
        input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .message { margin: 10px 0; padding: 10px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
    </style>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <div class="form-group">
            <label>Email:</label>
            <input type="email" id="email" required>
        </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="password" id="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
    <div id="message"></div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const result = await response.json();
                if (result.success) {
                    messageDiv.innerHTML = \`<div class="message success">\${result.message}</div>\`;
                } else {
                    messageDiv.innerHTML = \`<div class="message error">\${result.message}</div>\`;
                }
            } catch (error) {
                messageDiv.innerHTML = \`<div class="message error">Login failed</div>\`;
            }
        });
    </script>
</body>
</html>`;
};

module.exports = { loginUser, renderLoginPage };