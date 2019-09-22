import React, { Component } from 'react'
import { Button,Row,Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export class Modalnya extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        return (
            <div className='container'>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}>Nama</ModalHeader>
          <ModalBody >
            <Row>
              <Col xs='12' sm='12' md='6' className='d-flex align-items-center'><img style={{width:'100%'}} src="images/info-logo-circle_318-947.jpg" alt=""/></Col>
              <Col xs='12' sm='12' md='6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
            </Row>
            
          </ModalBody>
        </Modal>
            </div>
        )
    }
}

export default Modalnya
