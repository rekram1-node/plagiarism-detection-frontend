import React from "react";

const AreaStyle = {
    label: {
    }, textarea: {
        resize: "none",
        padding: "30px"
        
    }
};

export default function TextArea() {
    return (
    <>
      <label style={AreaStyle.label}>
      </label>
        <textarea style={AreaStyle.textarea} rows={40} cols={50} placeholder="Paste text here..."/>
    </>
    );
  }
  