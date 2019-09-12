import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Client from './Client'
import Course from './Course'
import { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
      
      <BrowserRouter>
      <Header/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/client' component={Client}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/course' component={Course}/>
      </BrowserRouter>
    
      </div>
    )
  }
}

export default App

