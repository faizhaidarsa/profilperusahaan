import React from 'react';

import Home from './Home'

import About from './About'
import Contact from './Contact'
import Client from './Client'
import Course from './Course'


import { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
      
      <body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">  
<a className='navbar-brand text-white' href="#home">NDT Solution</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#about">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#course">Course</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#client">Client</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contact">Contact</a>
    </li>
  </ul>
</nav>

<div id="home">
  <Home/>
</div>
<div id="about">
  <About/>
</div>
<div id="course">
  <Course/>
</div>
<div id="client">
  <Client/>
</div>
<div id="contact">
  <Contact/>
</div>

</body>
    
      </div>
    )
  }
}

export default App

