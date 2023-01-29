import React from 'react';
import './App.css';
import Button from './components/Button';
import TextArea from './components/Textarea';


const handleClick = () => {
  alert("Hello World")
}

function App() {
    return (
        <div>
            <nav class="navbar background" id="nav_background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={"https://cdn-icons-png.flaticon.com/512/1905/1905047.png"} alt="logo"/>
                    </div>
                    <li><a href="https://github.com/rekram1-node/plagiarism-detection-backend">Documentation</a></li>
                </ul>
  
                <div class="rightNav">
                    
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Plagiarism Detector
                        </h1>
                        <p class="text-small">
                          Paste Passages into the text boxes below.
                        </p>
                    </div>
                </div>
            </section>
            <div class="text-area">
              <TextArea id="leftbox" ></TextArea>
              <TextArea id="rightbox"></TextArea>
            </div>
            <div id="button">
              <Button label="Compare" handleClick={handleClick}></Button>
            </div>

            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    Made by Aiden Cline, David Herring, Justin Herring, and Kieran Kahler
                </p>
            </footer>
        </div>
    )
}
  
export default App