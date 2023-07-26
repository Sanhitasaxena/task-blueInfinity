import React from 'react'
import "../bill-desc/billdesc.css"
import Card from '../pateint-card/Card'
import {PATIENT_DATA} from "../../data/data"

const BillDesc = () => {
  return (
    <div className='bill-desc-main'>
      <div>
        {
          PATIENT_DATA.map((patient)=>{
             return <Card data = {patient}/>
          })
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default BillDesc