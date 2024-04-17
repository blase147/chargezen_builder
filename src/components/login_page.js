import React from "react";

const LoginPage = () => {
  return (
    <section>
      <h1>Everythingdigital teamsneed to build and optimize,faster</h1>
      <h3></h3>
    </section>
    <section>
        <div id="login_params"></div>
        <div id="login_form">
            <form action="/login" method="post">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </section>
        <div id="login_error">
            <p>Log In with SSO</p>
            <p>Forgot your password?</p>
        </div>
  );
}