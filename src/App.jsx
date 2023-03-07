import React from 'react';
import illustrationMockups from './images/illustration-mockups.svg';
import logo from './images/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const App = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='container'>
          <img src={logo} alt='logo' className='logo' />
        </div>
      </header>
      <main>
        <section className='section-info'>
          <div className='container grid grid--2-cols'>
            <div className='img-box'>
              <img src={illustrationMockups} />
            </div>
            <div className='cta-box'>
              <h1 className='heading-primary'>
                Build The Community Your Fans Will Love
              </h1>
              <p className='heading-description'>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <a className='btn' href='#'>
                Register
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='container'>
          <ul className='social-links'>
            <li>
              <a className='social-link' href='#'>
                <FaFacebookF className='social-icon' />
              </a>
            </li>
            <li>
              <a className='social-link' href='#'>
                <FaTwitter className='social-icon' />
              </a>
            </li>
            <li>
              <a className='social-link' href='#'>
                <FaInstagram className='social-icon' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;
