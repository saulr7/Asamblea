import React from 'react'
import UserModal from './../pages/usuario/UserModal';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar : React.FC<{}> = ()=> {

    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light my-card">
                    <h2 className="navbar-brand  font-weight-bolder m-0 p-0 pr-1" >Asamblea</h2>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto">
                    
                            <li className="nav-item font-weight-bold d-inline p-0 m-0 mt-1 px-2">
                                <i className="fa fa-file-text text-primary " aria-hidden="true"></i>
                                <Link className="nav-link text-primary d-inline font-weight-normal" to="/">Documentos</Link>
                            </li>
                    
                            <li className="nav-item font-weight-bold d-inline p-0 m-0 mt-1 px-2">
                                <i className="fa fa-pencil-square-o text-primary " aria-hidden="true"></i>
                                <Link className="nav-link text-primary d-inline font-weight-normal" to="/encuestas">Encuentas</Link>
                            </li>

                        </ul>

                        <UserModal/>
                    
                    </div>

                </nav>
            </Router>
        </div>
    )
}


export default NavBar