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
                
            </div>
        )
    }
}

export default Client
