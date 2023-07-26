import React from 'react'
import "../pateint-card/card.css"
import patientPhoto from "../../assets/img/patient.png"


const Card = (props) => {
  // console.log(props.data)

  const { name , age, billNum, gender} = props.data
  // console.log(name)
  return (
    <div className='card-main'>
       <div className='img'>
          <img src = {patientPhoto}
          height="100px"
          width="90px"/>
       </div>
       <div className='person-desc'> 
          <p>{name}</p>
          <p>{age}, {gender}</p>
          <div className='bill-num'>
            <span>Bill No</span>
            <p>{billNum}</p>
          </div>
          
       </div>
    </div>
  )
}

export default Card