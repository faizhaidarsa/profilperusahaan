import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardImg,Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export class Course extends Component {
   
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

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
                <h1 className='display-3 text-center mb-4'>Course</h1>
                <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Training and Certification Methodology
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Course Outlines
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Course Coordinator and Lecture
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Fee and Accomodation
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs="12">
                <Card className='p-4'>
                <ol>
                    <li>Syllabus of the training course is prepared according the Recomended Practice of the American Society of Non-Destructive Testing (SNT-TC-1A). The exams are composed of three tests, General Test, Specific Test and Practical Test.</li>
                    <li>Training includes theoretical and practical sessions. Testing equipment and samples with artificial defects are used during training.</li>
                    <li>The Spesific Section of the training will be performed using Section V of the ASME Boiler and Pressure Vessel Code. Whoever, if the customer is applying another standard or code, it could be used in the training process as a substitute to section V.</li>
                    <li>Each candidate has to pass three exams: General, Specific and practical.</li>
                </ol>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Col xs="12">
            <Card className='p-4'>
                <ol>
                    <li>Module (1) general: Discontinues in Metals and alloys, overview of NDT techniques, qualification of NDT personnel, QA for UT.</li>
                    <li>Module (2) Ultrasonic Testing:
                        <ul>
                            <li>Ultrasonic waves, nature and propagation.</li>
                            <li>Pulse Echo Flaw Detector, Electric Configuration and Scan Presentation.</li>
                            <li>Calibration of the test Equipment.</li>
                            <li>Flaw detection and sizing.</li>
                            <li>Applying acceptance/rejection criteria.</li>
                        </ul>
                        Module (2) Penetrant Testing: (as SNT-TC-1A) <br/>
                        Module (2) Magnetic Particle Testing: (as SNT-TC-1A)
                    </li>
                    <li>Module (3) ASME Code Requirements for Ultrasonic Testing (Related Articles "1 and 5", of ASME Code Section V) or others Standards (AWS or others)</li>
                    <li>Module (4) Practical Session and Report Writing.</li>
                    <li>Examinations: Each Module is followed by the certification exams which are prepared according to the requirements of the American Society of Nondestructive Testing ASNT-TC-1A Recomended Practice. The exams are composed of three tests, General Test, Specific Test and Practical Test.</li>
                </ol>
                </Card>
                </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
                <Col xs='12'>
                    <Card className='px-4'>
            <Row>
              <Col xs='12' sm='6' md='3' className='p-3'><Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              <Col xs='12' sm='6' md='3' className='p-3'>
              <Card>
                <CardImg top width="100%" src="/images/info-logo-circle_318-947.jpg" alt="Card image cap" />
                </Card>
              </Col>
              
            </Row>
            </Card>
            </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col xs="12">
                <Card className='p-4'>
                <h4 className=' text-center'>Fee</h4>
                <h6 className='text-center'>The fee for the course includes training and Student Package (Folder, Manual, Hand-outs, etc.)<br/>
                Issue of the certificate<br/>
                Buffet lunch, coffee/tea morning and afternoon of each day.</h6>
                <h4 className=' text-center'>Acomodation</h4>
                <h6 className='text-center'>Acomodation is not included in the course fee. However, our staff can arrange for any required accomodation at the time of booking.</h6>
                </Card>
              </Col>
              
            </Row>
          </TabPane>
        </TabContent>
            </div>
        )
    }
}

export default Course
