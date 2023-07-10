
import React, {useEffect} from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner'
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {

  useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then ((data) => {console.log(data)})
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />    
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;
