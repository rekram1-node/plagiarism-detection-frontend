import React from 'react';
import './App.css';
import Button from './components/Button';
import TextArea from './components/Textarea';
import { useState } from 'react';
import Axios from 'axios';



function App() {

    const [response, setResponse] = useState("")

    const getResponse = () => {
        Axios.get("http://localhost:3000/plagiarism/compare").then(
            (Response) => {setResponse(Response)}).catch(err => {
                console.log(err);
                setResponse(Response)
            })
    }

    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" alt="burger"/>
                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href='#student'>Student</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
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
              <TextArea></TextArea>
              <TextArea></TextArea>
            </div>
            <div class="button">
              <Button handleClick={getResponse}>Compare</Button>
            </div>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                            { response && <p class="text-small">{ response }</p> }
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App