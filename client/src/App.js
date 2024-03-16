import { useEffect , useState } from "react";
import Aos from "aos";
import React from "react"

import Header from "./components/Header";
import Feature from "./components/Feature";
import Contact from "./components/Contact";

import About from "./components/About";
import Testimonal from "./components/Testimonal";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  const [isAuthenticated , setIsAuthenticated] = useState(false);
  const [tasks , setTasks] = useState([]);
  const [user, setUser] = useState({});
  const [taskType, setTaskType] = useState("Tasks")


  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Header setTasks={setTasks} tasks={tasks} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setTaskType={setTaskType}/>
       <Routes>
        <Route path="/register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
       
       </Routes>
      </BrowserRouter>
     
    
     <Feature/>
    
    
     <About/>
     <Testimonal/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
