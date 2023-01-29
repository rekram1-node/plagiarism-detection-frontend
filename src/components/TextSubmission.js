import React, { useState } from "react";
import Axios from 'axios';
import Response from "./Response";

export default function TextArea() {

  const [text1, setText1] = useState("Paste text here...")
  const [text2, setText2] = useState("Paste text here...")

  const [response, setResponse] = useState({sentences:[], paragraphs:[], overallsimilarityScore:0})

  myHeaders.append("Content-Type", "application/json");
    
  var text11 = "Normal science, the activity in which most scientists inevitably spend almost all their time, is predicated on the assumption that the scientific community knows what the world is like. Much of the success of the enterprise derives from the community's willingness to defend that assumption, if necessary at considerable cost. Normal science, for example, often suppresses fundamental novelties because they are necessarily subversive of its basic commitments (5).";
  var text2 = "Normal science, the activity in which most scientists inevitably spend almost all their time, is predicated on the assumption that the scientific community knows what the world is like. Some scientists say that the success of the enterprise comes from the community’s willingness to defend that assumption, if necessary at considerable cost. Normal science often suppresses fundamental novelties because they are necessarily subversive of its basic commitments."
  
  var raw = JSON.stringify({
    "documents": [
      text1, text2
    ]
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/plagiarism/compare", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  const handleChange1 = (event) => setText1(event.target.value)
  const handleChange2 = (event) => setText2(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({documents:[text1, text2]})
    Axios.post("http://localhost:3000/plagiarism/compare", {documents:[text1, text2]}).then(
      (Response) => {setResponse(Response)}).catch(err => {
          console.log(err);
      })
  }

  
  
  return (
    <form>
      <div>
        <label style={AreaStyle.label}></label>
        <textarea style={AreaStyle.textarea} rows={40} cols={50} value={text1} onChange={handleChange1}/>

        <label style={AreaStyle.label}></label>
        <textarea style={AreaStyle.textarea} rows={40} cols={50} value={text2} onChange={handleChange2}/>
      </div>

      <div>
        <button id="button" onClick={handleSubmit}>Compare</button>
      </div>
      <div>
        <Response sentences={ response.sentences } paragraphs={ response.paragraphs } overallsimilarityScore={ response.overallsimilarityScore } ></Response>
      </div>
    </form>

  );
}
  