import React from "react";
import "../bill-desc/billdesc.css";
import Card from "../pateint-card/Card";
import { PATIENT_DATA } from "../../data/data";

const BillDesc = () => {
  return (
    <div className="bill-desc-main">
      <div className="card-parent">
        {PATIENT_DATA.map((patient) => {
          return <Card data={patient} />;
        })}
      </div>
      <div className="bill">
        <div className="bill-content">
          <div className="bill-head">
            <h2>Billing details</h2>
            <button className="print-btn">Print bill</button>
          </div>
          <div>
            <div className="patient-detail">
              <div>
                <span>Patient Name</span>
                <p>Sourabh sigh</p>
              </div>

              <div>
                <span>Age/Gender</span>
                <p>20/Male</p>
              </div>

              <div>
                <span>Bill No</span>
                <p>011234</p>
              </div>

              <div>
                <span>Date/Time</span>
                <p>02/02/2023, 6:23PM</p>
              </div>

              <div>
                <span>Reciept No</span>
                <p>74838923798</p>
              </div>
            </div>
          </div>
          <div className="content-table">
            <div className="detail-row-1">
              <div className="serial-num">
                 <b>Sr.no</b>
                 <b>Service Name</b> 
              </div>
              <div className="pricing">
                  <b>Price</b>
                  <b>Quantity</b>
                  <b>Amount</b>
              </div>
            </div>
            <div className="detail-row-2">
                <div>
                   <div className="detail-col">
                    <p>1</p>
                    <p>Consultation</p>
                   </div>
                   <div className="detail-col">
                    <p>2</p>
                    <p>x-ray</p>
                   </div>
                </div>
                <div>
                    <div className="detail-col">
                      <p>500</p>
                      <p>1</p>
                      <p>500</p>
                    </div>
                    <div className="detail-col">
                      <p>1500</p>
                      <p>2</p>
                      <p>3000</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="bill-footer">
             <div className="footer-details">
                 <div>
                  <p>Mobile Number</p>
                  <p>Tax</p>
                  <p>Discount</p>
                 </div>
                 <div>
                  <p>9327167743</p>
                  <p>200</p>
                  <p>50</p>
                 </div>
             </div>
             <div className="bill-total">
                 <b>Total</b>
                 <p>23456</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDesc;
