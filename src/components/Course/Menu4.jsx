import React, { Component } from 'react'
import {schedule} from '../../data/index'

export class Menu4 extends Component {
    
    state={
        schedule:schedule
    }

    componentDidMount(){

    }

    numberWithCommas=(x)=> {
        var parts = x.toString().split(".");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
        return parts.join(",");
        }

    renderTable=()=>{
        return this.state.schedule.map((item,key)=>{
            return (
                <tr key={key}>
                    <td>{item.course}</td>
                    <td>Rp {this.numberWithCommas(item.price)}</td>
                    <td>{item.schedule}</td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <div>
                <table className='table table-bordered w-100'>
                    <thead className='bg-silver'>
                        <tr>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Menu4
