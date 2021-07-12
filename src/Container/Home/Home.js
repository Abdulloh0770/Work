import React, { Component } from 'react';
import "./Home.css";
import { Button } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
          <div className="home">
                <div className="container">
                   <div className="text-center">
                        <h1 className="display-2 fw-bolder">Where hiring <br /> comes together.</h1>
                        <p>Everything you need to organise your hiring and make a great impression.</p>
                    </div>
                    <div className="text-center">
                        <input className="my-4" placeholder="Work email" type="text" />
                        <Button color="primary">Start free trial</Button>
                        <p>Join thousands of teams hiring with Homerun</p>
                    </div>
          </div>
        </div>
        )
    }
}