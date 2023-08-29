import React from "react";
import Style from "./Footer.module.css";

const componentName = (props) => {
  return (
    <div className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.text}>
          <h3>Smart ClinicX</h3>
          <p>
            A one-stop solution for Patient Registration, Doctor’s Appointment
            Management, Patient Serial Management, Doctor’s Chamber Management,
            E-Prescription, Patient Health Indicators Graph, and much more.
          </p>
          <button>
          Register Now!
          </button>
        </div>
        <div className={Style.icon}>
            <ul>
                <li><a href="">Home <span>|</span></a></li>
                <li><a href="">Features <span>|</span></a></li>
                <li><a href="">Panels <span>|</span></a></li>
                <li><a href="">Benefits <span>|</span></a></li>
                <li><a href="">FAQ <span>|</span></a></li>
                <li><a href="">More</a></li>
            </ul>
        </div>
      </div>
      <p className={Style.footer_text}>Copyright © HEALTHX Ventures. All rights reserved.</p>
    </div>
  );
};

export default componentName;