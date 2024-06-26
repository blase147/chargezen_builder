import React from 'react';
import './login_page.scss';
import logo from '../images/builder-logo.bff0faae.png';
import google from '../images/google.jpeg';
import github from '../images/github.jpeg';
import t1 from '../images/t1.png';
import t2 from '../images/t2.png';
import everlane from '../images/everlane.png';
import zapier from '../images/zapier.png';
import jcrew from '../images/jcrew.jpg';
import serasa from '../images/serasa.png';
import afterpay from '../images/afterpay.png';

function LoginPage() {
  return (
    <div id="login_page">
      <section id="login_text_content">
        <div>
          <h1>
            Everything
            <img id="t1" src={t1} alt="Logo" />
            digital
            <img id="t2" src={t2} alt="Logo" />
            teams need to build and optimize, faster
          </h1>
        </div>
        <div id="partners">
          <p>
            YOU&apos; RE IN GOOD COMPANY
            <span style={{ color: 'gold !important' }}> &#x2198;</span>
          </p>
          <div>
            <img id="everlane" src={everlane} alt="Logo" style={{ width: '100px', height: '50px' }} />
            <img id="zapier" src={zapier} alt="Logo" style={{ width: '100px', height: '50px' }} />
            <img id="jcrew" src={jcrew} alt="Logo" style={{ width: '100px', height: '50px' }} />
            <img id="serasa" src={serasa} alt="Logo" style={{ width: '100px', height: '50px' }} />
            <img id="afterpay" src={afterpay} alt="Logo" style={{ width: '100px', height: '50px' }} />
          </div>
        </div>
      </section>
      <section id="login_card">
        <div id="login_params">
          <img id="logo" src={logo} alt="Logo" />
          <h2>Log In</h2>
          <p>
            Don&apos;t have an account yet?
            <a href="https://wwww.example.com"> Sign up</a>
          </p>
          <div id="google_signup">
            <div id="img_cont">
              <img id="google" src={google} alt="Logo" style={{ width: '30px', height: '30px' }} />
            </div>
            <button type="button">Continue with Google</button>
          </div>
          <div id="github_signup">
            <div id="img_cont">
              <img id="github" src={github} alt="Logo" style={{ width: '30px', height: '30px' }} />
            </div>
            <button type="button">Continue with Github</button>
          </div>
          <div id="email_option">
            <div className="divider" />
            <p>Or, log in with your email</p>
            <div className="divider" />
          </div>
        </div>
        <div id="login_form">
          <form action="/login" method="post">
            <label htmlFor="username">
              Work Email
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
        <div id="login_error">
          <p><a href="www.example.com">Log In with SSO</a></p>
          <p><a href="example.com">Forgot your password?</a></p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
