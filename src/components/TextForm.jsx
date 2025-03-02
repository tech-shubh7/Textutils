import React, {useState} from 'react'


export default function TextForm(props) {

  const  handleUpClick = () => {
       // console.log("clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const  handleLoClick = () => {
      // console.log("clicked"+text);
       let newText= text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to lowercase!","success");
   }
   const  handleCamelClick = () => {
    // console.log("clicked"+text);
     let newText= text.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
     setText(newText);
     props.showAlert("Converted to Capitalcase!","success");
 }
const  handleOnChange = (event) => {
       // console.log("clicked")
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard!","success");
    }

    const handleExtraSpaces = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces!","success");
    }

    const [text, setText] = useState('');
      //  text="new text";  //WRONG WAY TO CHANGE THE STATE
      //  setText("new text"); //RIGHT correct WAY TO CHANGE THE STATE

    
  return (
    <>
<div className="container" style={{color: props.mode=='dark'?'white':'black'}}>
    <h2 className='mb-2'>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}  
     id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode=='dark'?'grey':'white', color: props.mode=='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary  mx-2 my-2" onClick={handleUpClick}>Convert To UPPERCASE</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To lowercase</button>
    <button className="btn btn-primary  mx-2  my-2" onClick={handleCamelClick}>Convert To Camelcase</button>
    <button className="btn btn-primary  mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary  mx-2  my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>It will take {0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
