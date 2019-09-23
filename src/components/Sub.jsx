import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Consultant from './Consultant/Consultant'
import Course from './Course/Course'
import Contact from './Contact'

export class Sub extends Component {
    render() {
        return (
          <div>
            <nav
              id="navbarnyasub"
              className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
            >
              <Link className="navbar-brand text-white" to='/'>
                NDT Solution
              </Link>
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
                    <Link className="nav-link" to='/'>
                      Home Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#course">
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#consultant">
                      Consultant
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <div id="home">
              <Home />
            </div> */}
            <div id="course">
              <Course/>
            </div>
            <div id="consultant">
              <Consultant/>
            </div>
            
            <div style={{height:'120px'}}></div>
            <div className='footer fixed-bottom bg-dark text-white text-center'>
                <h6 className='my-3'>Any Question? Please Call 08129258446 Or Email Us sarndtservice@gmail.com</h6></div>
          </div>
        );
    }
}

export default Sub
