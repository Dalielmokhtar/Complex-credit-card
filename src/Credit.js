import React, { Component } from 'react'
import sim from './sim.png'
import mastercard from "./mastercard.jpg"
export default class Credit extends Component {
    constructor(props){
        super(props)
        this.state={
            serial:"",
            date:"",
            name:""
        }
    }
     

    testserial=(e)=>{
        
        
        if(e.target.value.match(/^[0-9]/g) && (e.target.value.length<20))
        this.setState({
            serial: e.target.value.replace(/\s/gi, '')
        })
        if(e.target.value === '')
        this.setState({
            serial: e.target.value.replace(/\s/gi, '')
        })
    }


    test_date=(e)=>{
        if(e.target.value.match(/^[0-9]/g) && (e.target.value.length<5))
        this.setState({
            date: e.target.value
        })
        if(e.target.value === '')
        this.setState({
            date: e.target.value
        })
    }
    test_name=(e)=> {

        if(e.target.value.match(/^[a-z]/g) && (e.target.value.length<21))
        this.setState({
            name: e.target.value
        })
    }
    f_split=(x)=>{
        return (
            x.replace(/(.{4})/gi, '$1 ').trim()
        )
    }
    
    f_remove=(y)=>{
        return(
            y.replace(/(.{2})/gi,'$1/').substr(0,5)
        )
    }
  render() {
    return (
      
             <div className='global'>
        <div className="Application">
            <h1 className='text'>Credit Card</h1>
            <img className='simCard' src={sim} alt='sim' />
            <div className="CardNumberBack"><span className='CardNumber'  >{this.f_split(this.state.serial.padEnd(16,'*'))}</span></div>
            <div className='validation colWhite'>
                <span className='colWhite code' >5422</span>
                <div className='ValiDate'><p className='val'> VALID <br /> THRU</p>
                    <div ><p className='date'>MONTH/YEAR</p>
                        <p className='colWhite code'></p>{this.f_remove(this.state.date.padEnd(5,'*'))}</div>
                    <img className='masterCard' src={mastercard} alt='sim' />
                </div>
            </div>
            <p className='colWhite cardHolder'>{this.state.name.toUpperCase()}</p>
        </div>
        <div className='field'>
             <label >code</label><input className='fields' type='text' onChange={this.testserial} value={this.f_split(this.state.serial)}/>
             <label >date</label><input className='fields' type='text' onChange={this.test_date} value ={this.state.date}/>
             <label >name</label><input className='fields' type='text' onChange={this.test_name} value ={this.state.name}/>
        </div>
        
        </div>
    )
}
      
    
  
}
