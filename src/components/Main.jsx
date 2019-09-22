import React, { Component } from 'react'
import Home from './Home'

import About from './About'
import Contact from './Contact'
import Client from './Client'


export class Utama extends Component {
    render() {
        return (
          <div>
            <nav
              id="navbarnya"
              className="navbar navbar-expand-sm navbar-dark fixed-top"
            >
              <a className="navbar-brand text-white" href="#home">
                NDT Solution
              </a>
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#client">
                      Client
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="client">
              <Client />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <div className='footer fixed-bottom bg-dark text-white text-center'>
                <h6 className='my-3'>Copyright ASNT Corporate Partner 2019</h6></div>
          </div>
        );
    }
}

export default Utama
