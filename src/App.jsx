import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import './App.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

function App() {

  const toggleMode = () => {
    if (Mode === "light") {
      setDarkMode();
      setMode("dark")
      showAlert("Dark mode Enabled");
      // console.log("dark mode set")
      // document.body.style.backgroundColor="black";
    }
    else {
      setLightMode();
      setMode("light")
      showAlert("Light mode Enabled");

      // console.log("light mode set")
    }
  }
  const setDarkMode = () => {
    document.body.style.backgroundColor = "rgb(20, 38, 68)"
    document.body.style.color = "white"
    document.getElementById("myTextarea").style.backgroundColor = "rgb(14, 21, 39)"
    document.getElementById("myTextarea").style.color = "white"
    document.getElementById("myNavbar").style.backgroundColor = "rgb(33 37 41)"
    document.getElementById("myNavbar").style.color = "white"
  }

  const setLightMode = () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.getElementById("myTextarea").style.backgroundColor = "white"
    document.getElementById("myTextarea").style.color = "black"
    document.getElementById("myNavbar").style.backgroundColor = "#e5e5e5"
    document.getElementById("myNavbar").style.color = "black"
  }

  const showAlert = (value, message) => {
    setAlert({
      val: value,
      msg: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const [Mode, setMode] = useState("light")
  const [alert, setAlert] = useState("")

  const router = createBrowserRouter([{
    path: "/",
    element:      <> <Navbar Heading="Textutils" Mode={Mode} toggleMode={toggleMode} /><Alert alert={alert} />
<TextForm Heading="Enter your Text here to Analyze" Mode={Mode} showAlert={showAlert} /></>
  },
  {
    path: "/about",
    element: <><Navbar Heading="Textutils" Mode={Mode} toggleMode={toggleMode} /><Alert alert={alert} /><About /></>
  }])

  return (
    <>

      
      <RouterProvider router={router} />
    </>
  )
}

export default App
