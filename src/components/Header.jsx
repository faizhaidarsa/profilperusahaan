import React, { Component } from 'react'
import { NavLink,Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem 
  } from 'reactstrap';

export class Header extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      onClickNav = ()=>{
        this.setState({isOpen:false})
      }
    
    render() {
        return (
            <div>
              <div style={{height:'60px'}}></div>
              <div className='fixed-top'>
                <Navbar color="dark" light expand="md">
          <Link className='navbar-brand text-white' to="/">NDT Solution</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.onClickNav} to="/" className='nav-link text-white'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.onClickNav} to="/about" className='nav-link text-white'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.onClickNav} to="/course" className='nav-link text-white'>Course</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.onClickNav} to="/client" className='nav-link text-white'>Client</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.onClickNav} to="/contact" className='nav-link text-white'>Contact</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
        </div>
            </div>
        )
    }
}

export default Header
