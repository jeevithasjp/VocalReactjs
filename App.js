import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [myText, setMyText] = useState('');
  const [aiText, setAiText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const handleFix = () => {
    if (myText.length <= 0) {
      return;
    }

    const postData = { text: myText };
    const url = 'https://helper-api-vignu.el.r.appspot.com/grammarly/fix';

    setLoading(true);
    setCopied(false);
    axios.post(url, postData)
      .then((resp) => {
        setMyText(resp.data.result);
        setAiText(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(myText).then(() => {
      setCopied(true);
    });
  };

  const handleReset = () => {
    setMyText('');
    setAiText(false);
    setCopied(false);
  };

  const applyDarkTheme = () => {
    document.documentElement.classList.add('dark');
    setDarkTheme(true);
  };

  const applyLightTheme = () => {
    document.documentElement.classList.remove('dark');
    setDarkTheme(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <p className="title">ProWriting</p>
        </div>
        <div className="theme-switcher" onClick={darkTheme ? applyLightTheme : applyDarkTheme}>
          <img src={darkTheme ? "sun.svg" : "moon.svg"} alt="Theme Switcher" className="theme-icon" />
        </div>
      </header>
      <main className="main-content">
        <div className="textarea-container">
          <textarea
            value={myText}
            className="textarea"
            placeholder="Write your text here..."
            onChange={(e) => setMyText(e.target.value)}
          />
          {loading && <p className="loading">Loading...</p>}
          {aiText && (
            <div className="actions">
              {!copied && <img src="/copy.svg" alt="Copy" className="action-icon" onClick={copyToClipboard} />}
              {copied && <img src="/done.svg" alt="Done" className="action-icon" onClick={copyToClipboard} />}
              <img src="/reload.svg" alt="Reload" className="action-icon" onClick={handleFix} />
            </div>
          )}
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleFix}>FIX</button>
          <button className="btn" onClick={handleReset}>Reset</button>
        </div>
       
      </main>
    </div>
  );
}

export default App