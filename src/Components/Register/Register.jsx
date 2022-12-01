import React from 'react';
import '../Register/Register.css';

import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Register(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <legend className="text-center header">Register New User</legend>
                                <br /><br /><br /><br /><br />

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="fname" name="name" type="text" placeholder="First Name" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Last Name" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="Dtype" name="documentype" type="scroll" placeholder="Document Type" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="docnumber" name="docnumber" type="number" placeholder="No. Document" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="Username" name="Username" type="text" placeholder="Username" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="email" name="email" type="email" placeholder="e-mail" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="password" name="password" type="password" placeholder="password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="password" name="password" type="password" placeholder="Re-Enter the password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}