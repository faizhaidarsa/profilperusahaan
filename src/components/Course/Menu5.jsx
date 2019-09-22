import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Card, CardImg,  Row, Col } from 'reactstrap';
import {lecture} from '../../data/index'

export class Menu5 extends Component {
   
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
       
        this.state = {
          modal: false,
          height:0,
          lecture:lecture,
          selectedLecture:{},
        };
      }

      toggleModal(id) {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
        this.setState({selectedLecture:this.state.lecture[id]})
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
            <div>
                <Row>
                {this.renderList()}
                </Row>
                {this.modal()}
            </div>
        )
    }
}

export default Menu5
