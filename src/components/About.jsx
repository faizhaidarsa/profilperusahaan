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
          <div className="container-fluid border-top border-bottom py-5">
            
            <h1 className="display-4 text-center">
              <strong>About Us</strong>
            </h1>
            <div className='container'>
            <div className="row d-flex align-items-center py-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <Card>
                  <CardBody>
                    <CardTitle className="h2 text-center">
                      Aim and Objective
                    </CardTitle>

                    <CardText className="text-justify">
                      TO server and train the industrial society with the
                      qualified and certified personnel of Levels I, II and III
                      in the Nondestructive Ultrasonic Testing techniques: The
                      training and certification process is performed according
                      to the American Society of Nondestructive Teesting
                      Recomended Practice SNT-TC-1A and or NAS 410/EN 417q. The
                      performance of service in industry will be responsible by
                      ASNT/NAS410/EN4179 NDT level III.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center pt-5 pt-md-0 px-5">
                <img width='100%' height='100%' src="images\missiondsb.png" alt="" />
              </div> 
            </div>
            <div className="row px-3 px-sm-5 px-md-0">
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 p-3">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "yellow",
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img width="100%" height='100%' src="images\Experience.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Experiences</h5>
                  <p>NDT For Boeing-747, A330, A320, B737 series, ATR etc.</p>
                  <p>NDT For Fabrication, Refinery, Power Plant, Pipe etc.</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 p-3">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "yellow",
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img width="100%" height='100%' src="images\mission.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Mission Statement</h5>
                  <p>
                    to be the premier NDT education company in Indonesia and
                    Asia, and to provide industry-leading consulting and
                    auditing service. We strive to exceed our clients
                    expectations, and to provide an unmatched level of service
                    in our field.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 p-3">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "yellow",
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img width="100%" src="images\corebeliefs.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Core Beliefs</h5>
                  <p>
                    Our core beliefs are built upon: our mission, our
                    investment, our commitment and our culture as illustrated by
                    the chart below.
                  </p>
                </div>
              </div>
            </div>
            
            </div>
          </div>
        );
    }
}

export default About
