import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Main'
import Sub from './Sub'


import { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route path='/sub' component={Sub}/>
      </BrowserRouter>
      </div>
    )
  }
}

export default App

