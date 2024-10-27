import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram, FaReddit } from 'react-icons/fa';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    className="App-logo" 
                    alt="Logo" 
                />
<div className="intro">
  <h1>Hi, I'm <span className="name">Giuseppe </span></h1>
  <p className="role">Full Stack Developer</p>
  <p className="description">
    I specialize in building responsive web applications with <strong>React</strong> and developing native apps for <strong>iOS</strong> and <strong>Android</strong>. Let's create something amazing together!
  </p>
</div>
            </header>
            <div className="links">
                <a href="https://github.com" className="link">
                    <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/giuseppe-mastronardi-354422111/" className="link">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://www.instagram.com/giuseppemastronardi.dev" className="link">
                    <FaInstagram /> Instagram
                </a>
                <a href="https://www.reddit.com/user/Foreign_Explorer_982" className="link">
                    <FaReddit /> Reddit
                </a>
            </div>
            <footer>
                <p>Made with <span className="heart">&hearts;</span> by pygreco.it</p>
                <p className="small">&copy; 2024 All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default App;
