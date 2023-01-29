import React, { useState } from "react";
import Axios from 'axios';
import Response from "./Response";

export default function TextArea() {

  const [text1, setText1] = useState("Paste text here...")
  const [text2, setText2] = useState("Paste text here...")

  const [response, setResponse] = useState({sentences:[], paragraphs:[], overallsimilarityScore:0})

  const AreaStyle = {
    label: {}, 
    textarea: {
      resize: "none",
      padding: "30px"
    }
  };

  const handleChange1 = (event) => setText1(event.target.value)
  const handleChange2 = (event) => setText2(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({documents:[text1, text2]})
    // Axios.post("http://localhost:3000/plagiarism/compare").then(
    //   (Response) => {setResponse(Response)}).catch(err => {
    //       console.log(err);
    //   })
  }
  
  return (
    <form>
      <div>
        <label style={AreaStyle.label}></label>
        {/* <textarea style={AreaStyle.textarea} rows={40} cols={50} value={text1} onChange={handleChange1}/> */}

        <label style={AreaStyle.label}></label>
        {/* <textarea style={AreaStyle.textarea} rows={40} cols={50} value={text2} onChange={handleChange2}/> */}
      </div>

      <div>
        {/* <button id="button" onClick={handleSubmit}>Compare</button> */}
      </div>
      <div>
        {/* <Response props={ response }></Response> */}
      </div>
    </form>

  );
}
  