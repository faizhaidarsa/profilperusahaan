import React, { Component } from 'react'
import {
    Card, 
    // CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    // CardSubtitle, 
    // Button
  } from 'reactstrap';

export class About extends Component {
    
    state={
        height:0
    }
    

    render() {
        return (
            <div className='container'>
               <div style={{height:'60px'}}></div>
               <h1 className='display-4 text-center'><strong>About Us</strong></h1> 
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 p-3 '>
                    <Card>
        <CardBody>
          <CardTitle className='h2 text-center'>Aim and Objective</CardTitle>
          
          <CardText className='text-justify'>TO server and train the industrial society with the qualified and certified personnel of Levels I, II and III in the Nondestructive Ultrasonic Testing techniques: The training and certification process is performed according to the American Society of Nondestructive Teesting Recomended Practice SNT-TC-1A and or NAS 410/EN 417q. The performance of service in industry will be responsible by ASNT/NAS410/EN4179 NDT level III.</CardText>
          
        </CardBody>
      </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 p-3 '>
                    <Card style={{height:'100%'}}>
        <CardBody>
          <CardTitle className='h2 text-center'>Experiences</CardTitle>
          
          
              <ol>
                  <li>NDT For Boeing-747, A330, A320, B737 series, ATR etc.</li>
                  <li>NDT For Fabrication, Refinery, Power Plant, Pipe etc.</li>
              </ol>
          
          
        </CardBody>
      </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
