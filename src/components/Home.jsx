import React, { Component } from 'react'

export class Home extends Component {
    state={
        height:0
    }
   
    componentDidMount() {
        this.setState({height:window.innerHeight})
    }
    
    render() {
        return (
            <div id='homenya' className='container-fluid bg-secondary'>
                <div style={{height:'120px'}}></div>
                <h1 className='display-4 text-center text-white'><strong>Non-Destructive Testing (NDT)</strong></h1>
                <h1 className='h-4 text-center text-white'>SERVICE AND TRAINING</h1>
                <div className='row px-5'>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                    <div className='col-12 col-sm-6 col-md-3 p-3'><img className='border border-silver rounded-lg' width='100%' src="images\info-logo-circle_318-947.jpg" alt=""/></div>
                </div>
                <div style={{height:'120px'}}></div>
            </div>
        )
    }
}

export default Home
