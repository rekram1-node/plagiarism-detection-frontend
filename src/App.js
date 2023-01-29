import React from 'react';
import './App.css';
import TextSubmission from './components/TextSubmission'

function App() {
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
            <TextSubmission />
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not.
                        </p>
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