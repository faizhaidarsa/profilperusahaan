import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Utama from './Utama'
import Sub from './Sub'


import { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        <Route exact path='/' component={Utama}/>
        <Route path='/sub' component={Sub}/>
      </BrowserRouter>
      </div>
    )
  }
}

export default App

