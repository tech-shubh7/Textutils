import React, { useState } from 'react'

export default function About() {

const [darkMode,setDarkMode]=useState({
    color:'white',
    backgroundColor:'black'
});

const [btnText,setBtnText]=useState("Enable Dark Mode")

const toggleStyle = ()=> {
    if(darkMode.color=='white'){
        setDarkMode({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
    }
    else{
        setDarkMode({
            color:'white',
            backgroundColor:'black',
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
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body" style={darkMode}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees 
                that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
                You can modify any of this with custom CSS or overriding our default variables.
                 It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={darkMode}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={darkMode}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees 
                that we use to style each element. These classNamees 
                control the overall appearance, as well as the showing and hiding via CSS transitions. 
                You can modify any of this with custom CSS or overriding our default variables. 
                It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkMode}>
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={darkMode}>
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees 
                that we use to style each element. These classNamees control the overall appearance, 
                as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or 
                overriding our default variables. It's also worth noting that just about 
                any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
