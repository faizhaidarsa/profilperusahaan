import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

export class Contact extends Component {
    
    state={
        height:0,
    }

    componentDidMount() {
        this.setState({height:window.innerHeight})
    }
    
    render() {
        return (
            <div className='container-fluid bg-secondary'>
                <div style={{height:'60px'}}></div>
            <h1 className='display-4 text-center mb-3'><strong>Contact Us</strong></h1>
            <Row>
                <Col xs='12' sm='12' md='6' className=''>
                <div id="map" className='rounded-lg' style={{height:this.state.height*0.5}}></div>
                </Col>
                <Col xs='12' sm='12' md='6' className='d-flex align-items-center'>
                    
                    <div>
                        <h4><img width='40px' src="images/mail.svg" className='mr-2' alt=""/>sarndtservice@gmail.com</h4>                    
                        <h4><img width='40px' src="images/phone.svg" className='mr-2' alt=""/>08129258446</h4>
                    </div>
                
                </Col>
            </Row>
            <div style={{height:'200px'}}></div>
            <div className='footer fixed-bottom bg-dark text-white text-center'>
                <h6 className='my-3'>Copyright ASNT Corporate Partner 2019</h6></div>
            </div>
        )
    }
}

export default Contact
