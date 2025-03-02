import React, { useState } from 'react'

export default function About() {

const [darkMode,setDarkMode]=useState({
    color:'#151513',
    backgroundColor:'white'
});

const [btnText,setBtnText]=useState("Enable Dark Mode")

const toggleStyle = ()=> {
    if(darkMode.color=='white'){
        setDarkMode({
            color:'#151513',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
    }
    else{
        setDarkMode({
            color:'white',
            backgroundColor:'#151513',
            border:'1px solid white'
        })
        setBtnText("Enable Light Mode")
    }
}

  return (
    <>
    
            <div className='container'style={darkMode}>
                <h2 className='my-2'>About us</h2>
            <div className="accordion" id="accordionExample" style={darkMode}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={darkMode}>
               <b> Analyze your text</b>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body" style={darkMode}>
               Textutils gives you a way to analyze your text quickly and efficiently.
                Be it word count, character count.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={darkMode}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={darkMode}>
                <b>Free to use</b>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body">
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given
                text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkMode}>
               <b> Browser Compatible</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body">
                This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera.
                It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
       <div className="container">
       <button  className='btn btn-info my-3'onClick={toggleStyle} >{btnText}</button>
       </div>
            </div>      
            </>
  )
}
