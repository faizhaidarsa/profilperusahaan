import React from 'react';

import Home from './Home'

import About from './About'
import Contact from './Contact'
import Client from './Client'
import Course from './Course'


import { Component } from 'react'

export class App extends Component {
  
  state={
    nav:'collapse navbar-collapse'
  }

  onClickItem=()=>{
    console.log(this.state.nav);
    this.setState({nav:'collapse navbar-collapse'})
    console.log(this.state.nav);
    
  }

  render() {
    return (
      
      
      <div>

<nav id='navbarnya' className="navbar navbar-expand-sm bg-transparent navbar-dark fixed-top">  
<a className='navbar-brand text-white' href="#home">NDT Solution</a>
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
  <div id='navbarSupportedContent' className='collapse navbar-collapse'>
  <ul className="navbar-nav ml-auto">
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
  </div>
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

</div>
    
      
    )
  }
}

export default App

