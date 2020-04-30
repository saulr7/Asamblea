import React from 'react';
import Login from '../../UserAuth/Login';

import Title from './../../common/Title';

function WelcomePage() {
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light my-card">
                <span className="navbar-brand font-weight-bolder m-0 p-0">
                    Asamblea accionistas
                </span>
            </nav>

            <div className="container">

                <div className="row pt-2 ">
                    <div className="col ">
                        <Title title="Inicio de sesisón"/>
                    </div>
                </div>


                <div className="row mt-3">
                    <div className="col">
                        <Login/>
                    </div>
                </div>
                                
                
            </div>


        </div>
    );
    
}


export default WelcomePage