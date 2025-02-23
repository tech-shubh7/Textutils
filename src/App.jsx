import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom"



function App() {
  const [mode,setMode]=useState('light');   //whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })  
  
    setTimeout(() => {
      setAlert(null);
    }, 1500);

}


const toggleMode = () => {
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#12141a";
    showAlert("Dark mode has been enabled","success");
    document.title="Textutils - Dark Mode";
  }
  
  else
  {
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");
    document.title="Textutils - Light Mode";
  }
}

  return (
    <>
    {/* <Router>    */}
     <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm  showAlert={showAlert} heading="Enter the text you want to analyze below" mode={mode}  />
      {/* <Routes>
             <Route exact path='/' element={<TextForm  showAlert={showAlert} heading="Enter the text you want to analyze below" mode={mode}  />} />
           <Route exact path='about' element={<About />} />
      </Routes> */}

    {/* <TextForm  showAlert={showAlert} heading="Enter the text you want to analyze below" mode={mode}  />
    <About/> */}
    </div>
    {/* </Router> */}

    </>
  )
}

export default App
