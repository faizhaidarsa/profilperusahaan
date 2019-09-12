import React, { Component } from 'react'

export class Home extends Component {
    state={
        height:0
    }
    componentDidMount() {
        this.setState({height:window.innerHeight*0.08})
    }
    
    render() {
        return (
            <div className='container'>
                <div style={{height:this.state.height}}></div>
                <h1 className='display-4 text-center'><strong>Non-Destructive Testing (NDT)</strong></h1>
                <h1 className='h-4 text-center'>SERVICE AND TRAINING</h1>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Home