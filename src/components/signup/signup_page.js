import React from "react";

const SignupPage = () => {
  return (
    <div>
      <section>
        <h1>Everythingdigital teamsneed to build and optimize,faster</h1>
        <h3>YOU'RE IN GOOD COMPANY </h3>
        <div>
          <img
            src="https://www.datocms-assets.com/20955/1606829820-teams.png"
            alt="teams"
          />
          <img
            src="https://www.datocms-assets.com/20955/1606829820-teams.png"
            alt="teams"
          />
          <img
            src="https://www.datocms-assets.com/20955/1606829820-teams.png"
            alt="teams"
          />
        </div>
      </section>
      <section>
        <div id="login_params">
          <img src="https://www.datocms-assets.com/20955/1606829820-teams.png" alt="teams" />
          <h2>Log In</h2>
          <div id="google_signup">
            <img src="https://www.datocms-assets.com/20955/1606829820-teams.png" alt="teams" />
            <p>Continue with Google</p>
          </div>
          <div id="github_signup">
            <img src="https://www.datocms-assets.com/20955/1606829820-teams.png" alt="teams" />
            <p>Continue with Github</p>
          </div>
          <p>Or, log in with your email</p>
        </div>
        <div id="login_form">
          <form action="/login" method="post">
            <label htmlFor="username">Work Email</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
      <div id="login_error">
        <p>Log In with SSO</p>
        <p>Forgot your password?</p>
      </div>
    </div>
  );
};

export default SignupPage;
