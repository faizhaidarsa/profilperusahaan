import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

export class Client extends Component {
    
    state={
        height:0,
    }

    

    render() {

        
        return (
            <div className='container-fluid border-top border-bottom'>
            <div style={{height:'60px'}}></div>
            <h1 className='display-4 text-center'><strong>Our Client</strong></h1>
                <Row className='px-5'>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/1920px-GMF_AeroAsia_logo.svg.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/1280px-LOGO_SJ_VERTIKAL.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/di.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/suco.png" alt=""/></Col>
                </Row>
                <div style={{height:'60px'}}></div>
            </div>
        )
    }
}

export default Client
