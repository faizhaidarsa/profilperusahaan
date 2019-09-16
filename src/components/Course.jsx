import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Course extends Component {
   
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false,
          activeTab: '1',
          height:0,
          lecture:[{
            id:1,  
            nama:'Ir. Saenal Aladin Rapi, MM',
            deskripsi:'a NDT professional for aircraft who has performed extensive appplication work in the Garuda Maintenance Facility including: Boeing-747, B737 series, B737NG, A330, A-320 etc. He is certified as NDT-Level III. He has been involved in submitting ASNT conference in US and training to various industrial sectors. He has been responsible for the professional training programs in the fields of welding, casting, airframe, NDT standards etc at National Standardization Bard and Indonesian Societies of NDT. He is also Auditor ISO-17020 on behalf of National Accreditation Board. Presently, he is a NDT consultant, Trainer and Examiner',
            foto:'images/info-logo-circle_318-947.jpg'
          },{
              id:2,
            nama:'Ir. Aladin Rapi Saenal, MM',
            deskripsi:'a NDT professional for aircraft who has performed extensive appplication work in the Garuda Maintenance Facility including: Boeing-747, B737 series, B737NG, A330, A-320 etc. He is certified as NDT-Level III. He has been involved in submitting ASNT conference in US and training to various industrial sectors. He has been responsible for the professional training programs in the fields of welding, casting, airframe, NDT standards etc at National Standardization Bard and Indonesian Societies of NDT. He is also Auditor ISO-17020 on behalf of National Accreditation Board. Presently, he is a NDT consultant, Trainer and Examiner',
            foto:'images/info-logo-circle_318-947.jpg'
        },{
            id:3,
            nama:'Ir. Rapi Saenal Aladin, MM',
            deskripsi:'a NDT professional for aircraft who has performed extensive appplication work in the Garuda Maintenance Facility including: Boeing-747, B737 series, B737NG, A330, A-320 etc. He is certified as NDT-Level III. He has been involved in submitting ASNT conference in US and training to various industrial sectors. He has been responsible for the professional training programs in the fields of welding, casting, airframe, NDT standards etc at National Standardization Bard and Indonesian Societies of NDT. He is also Auditor ISO-17020 on behalf of National Accreditation Board. Presently, he is a NDT consultant, Trainer and Examiner',
            foto:'images/info-logo-circle_318-947.jpg'
        }],
        selectedLecture:{}
        };
      }

      toggleModal(id) {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
        this.setState({selectedLecture:this.state.lecture[id]})
    }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    

    

    modal = ()=>{
        if(this.state.selectedLecture){
        return (
            <div>
                <Modal size='lg' isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>{this.state.selectedLecture.nama}</ModalHeader>
          <ModalBody>
            <Row>
              <Col xs='12' sm='6'  className='d-flex align-items-center'><img style={{width:'100%'}} src={this.state.selectedLecture.foto} alt=""/></Col>
              <Col xs='12' sm='6' className='text-justify' >{this.state.selectedLecture.deskripsi}</Col>
            </Row>
            
          </ModalBody>
        </Modal>
            </div>
        )}
        else{
            return null
        }
    }

    renderList=()=>{
        let hasil = this.state.lecture.map((item,key)=>{
            return(
                <Col key={key} xs='12' sm='6' md='3' className='py-3 px-5 px-sm-3'><Card>
                    <CardImg onClick={()=>{this.toggleModal(key)}} top width="100%" src={item.foto} alt="Card image cap" />
                    </Card>
                  </Col>
            )
        })
        return hasil
        
    }

    render() {
        return (
            <div className='container-fluid bg-secondary'>
                <div style={{height:'60px'}}></div>
                <h1 className='display-4 text-center text-white mb-3'><strong>Course</strong></h1>
                <div className='row'>
                  <div className='col-lg-11 mx-auto'>
                <Nav tabs>
          <NavItem>
            <Button
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Training and Certification Methodology
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Course Outlines
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Course Coordinator and Lecture
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Fee and Accomodation
            </Button>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className='mb-3'>
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
              {this.renderList()}
              
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
                <h4 className=' text-center mt-3'>Acomodation</h4>
                <h6 className='text-center'>Acomodation is not included in the course fee. However, our staff can arrange for any required accomodation at the time of booking.</h6>
                </Card>
              </Col>
              
            </Row>
          </TabPane>
        </TabContent>
        </div>
        </div>
        {this.modal()}
        <div style={{height:'60px'}}></div>
            </div>
        )
    }
}

export default Course
