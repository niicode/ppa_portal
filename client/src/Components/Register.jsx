import React from "react";
import "./hoc/Register.css";
import "./hoc/hoc.css";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <h1 className="heading-m">Organisation</h1>
        <div className="row">
          <form>
            <div className="col-6 main_div">
              <div>
                <select name="">
                  <option value="select">Entity Name</option>
                  <option value="">Accountant Generals Department</option>
                  <option>kdkdkdk</option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
                <input type="email" placeholder="Entity email" />
                <input type="text" placeholder="Entity Phonenumber" />
              </div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Department" />
              <input type="text" placeholder="Position" />
              <div>
                <input type="email" placeholder="Personal Email" />
                <input type="text" placeholder="Phone Number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <select value="">
              <option value="select">Select</option>
              <option value="select">Select</option>
              <option value="select">Select</option>
              <option value="select">Select</option>
            </select>
            <input type="checkbox" />
            first Date
            <input type="checkbox" />
            second Date
            <div className="col-6"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
