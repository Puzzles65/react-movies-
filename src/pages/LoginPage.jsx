import React, { useState } from 'react';


export default function LoginPage() {
    const [username, setUsername] = useState("");

    function validateForm() {
        return username.length > 3;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button type='submit' disabled={!validateForm()}>Login</button>
            </form>
        </div>
    )
}