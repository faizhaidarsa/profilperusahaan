import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Main'
import Sub from './Sub'
import Course from './Course/Course'
import Consultant from './Consultant/Consultant'

import { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route path='/sub' component={Sub}/>
        <Route path='/sub/course' component={Course}/>
        <Route path='/sub/consultant' component={Consultant}/>       
      </BrowserRouter>
      </div>
    )
  }
}

export default App

