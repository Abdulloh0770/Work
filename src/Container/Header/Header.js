import React, { Component } from 'react';
import "./Header.css"
import user from "../../img/user.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {
  state = { hideHeader: false }

  toggleHeader = () => {
      this.setState((state) => {
          console.log(state);
          return { hideHeader: !state.hideHeader }
      })
  } 
    render() {
        return (
          <header className="px-5 py-3">
                <div className="d-flex justify-content-between align-items-center">
              <div>
                  <img src={user} className="logo" alt="rasm" />
                
              </div>
                   
                   <div className={`nav__menu ${this.state.hideHeader && "show__nav" || ""} `}>
                   <ul className="list d-flex m-0">
                        <li><a className="text-decoration-none " href="#">Product</a></li>
                        <li><a className="text-decoration-none " href="#">Templates
                        <span className="badge bg-danger ms-2 ">new</span>
                        </a></li>
                        <li><a className="text-decoration-none " href="#">Pricing</a></li>
                        <li><a className="text-decoration-none " href="#">Customers</a></li>
                        <li><a className="text-decoration-none " href="#">Learn</a></li>
                    </ul>
                    <Button color="white" className="btn__close" onClick={this.toggleHeader}><FontAwesomeIcon icon={faTimes}/></Button>
                   </div>

                   <div className="d-flex">
                   <Button color="primary" className="d-none d-lg-flex me-3">Log in</Button>
                   <Button color="light" className="d-none d-lg-flex me-3">Start free trial</Button>
                   <Button color="white" className="btn__open" onClick={this.toggleHeader}><FontAwesomeIcon icon={faBars}/> </Button>
                   </div>
            </div>
          </header>
          
        )
    }
}
