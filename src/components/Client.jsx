import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

export class Client extends Component {
    
    state={
        height:0,
    }

    componentDidMount() {
        this.setState({height:window.innerHeight*0.08})
    }
    

    render() {

        
        return (
            <div className='container'>
            <div style={{height:this.state.height}}></div>
            <h1 className='display-4 text-center mb-3'><strong>Our Client</strong></h1>
                <Row>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/1920px-GMF_AeroAsia_logo.svg.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/1280px-LOGO_SJ_VERTIKAL.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/di.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/suco.png" alt=""/></Col>
                </Row>
            </div>
        )
    }
}

export default Client
