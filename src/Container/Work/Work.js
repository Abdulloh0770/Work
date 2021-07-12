import React, { Component } from 'react';
import "./Work.css";
import user2 from "../../img/user2.png";
import user3 from "../../img/user3.png";


export default class Work extends Component {
    render() {
        return (
           <div className="work">
                <div className="container text-center">
                  <div className="row">
                      <div className="col-md-12 d-flex justify-content-center mt-5">
                         <div className="photo ">
                          <img src={user2}  alt="rasm2" />
                          </div>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center mt-5">
                          <div className="photo2 text-center">
                               <img className="w-100" src={user3} alt="rasm3" />
                           </div>
                      </div>
                  </div>
            </div>
           </div>
        )
    }
}
