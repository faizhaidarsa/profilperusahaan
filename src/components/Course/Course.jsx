import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
import Menu3 from './Menu3'
import Menu4 from './Menu4'
import Menu5 from './Menu5'
import Menu6 from './Menu6'

export class Course extends Component {
   
      
        state = {
          menu:1
        };
      

    clickMenu=(value)=>{
      this.setState({menu:value})
    }

    renderInfo=()=>{
      switch(this.state.menu){
        case 1:
          return <Menu1/>
        case 2:
          return <Menu2/>
        case 3:
          return <Menu3/>
        case 4:
          return <Menu4/>
        case 5:
          return <Menu5/>
        case 6:
          return <Menu6/>
        default:
          return <Menu1/>
      }
    }

    render() {
        return (
            <div className='container-fluid border-top border-bottom pb-5'>
                
                
                <div className='row'>
                <div className='bg-dark col-12' style={{height:'60px'}}></div>
                  <div className='col-12' style={{backgroundImage:`url(images/istockphoto-937257284-1024x1024e.jpg)`,backgroundSize:'cover',backgroundPosition:'center'}}>
                  <h1 className='display-4 text-center text-white py-5'><strong>Course</strong></h1>
                   
                  </div>
                </div>
                  <div className='container mt-5'>
                  <div className='row'>
                  <div className='col-12 col-sm-12 col-md-3'>
                    
                        <Link onClick={()=>{this.clickMenu(1)}} className='nav-link p-0 py-2' to='#'>Courses & Inspection Training</Link>
                    
                        <Link onClick={()=>{this.clickMenu(2)}} className='nav-link p-0 py-2' to='#'>Training and Certification Methodology</Link>
                   
                        <Link onClick={()=>{this.clickMenu(3)}} className='nav-link p-0 py-2' to='#'>Course Outline</Link>
                    
                        <Link onClick={()=>{this.clickMenu(4)}} className='nav-link p-0 py-2' to='#'>Course Schedule</Link>
                   
                        <Link onClick={()=>{this.clickMenu(5)}} className='nav-link p-0 py-2' to='#'>Instructor/Examiner</Link>
                
                        <Link onClick={()=>{this.clickMenu(6)}} className='nav-link p-0 py-2' to='#'>Fee and Accomodation</Link>
                  
                    </div>
                    <div className='col-12 col-md-9 mt-3 mt-md-0'>
                      <div className='card p-4'>{this.renderInfo()}</div>
                  </div>
                  </div>
                  </div>


            </div>
        )
    }
}

export default Course
