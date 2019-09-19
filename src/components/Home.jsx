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
                <div style={{height:'250px'}}></div>
                <h1 className='display-4 text-center text-white'><strong>Non-Destructive Testing (NDT)</strong></h1>
                <h1 className='h-4 text-center text-white'>SERVICE AND TRAINING</h1>
                <div className='row px-5'>
                    <div className='col-6 mx-auto mt-5'>
                        <button className='btn btn-block btn-success'>View Our Course</button>
                    </div>
                </div>
                <div style={{height:'250px'}}></div>
            </div>
        )
    }
}

export default Home
