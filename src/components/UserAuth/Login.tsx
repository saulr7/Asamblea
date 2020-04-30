import React,  {useState} from 'react'

import './Login.css'
import Loading from '../common/Loading';
import CredencialesModel from '../../models/CredencialesModel';

import { SignInService } from '../../services/AuthService';
import { AlertWarning } from '../../services/AlertService';
import TipoAutenticacionEnum from '../../enums/Tipoautenticacion';



const Login : React.FC <{}> = () => {

 
    const [usuario, setUsuario]     = useState("")
    const [codigo]                  = useState(0)
    const [password, setPasswors]   = useState("")
    const [loading, setLoading]     = useState(false)

    async function SignIn()
    {
        if(!ValidateData())
            return

        setLoading(true)
        var model : CredencialesModel = {
                              Usuario : usuario, 
                              CodeUser : codigo, 
                              Password : password, 
                              TipoAutenticacion : TipoAutenticacionEnum.ActiveDirectory}
        await SignInService(model)
        setLoading(false)

    }

    function ValidateData() : boolean {
        if (!usuario)
        {
            AlertWarning("Es necesario un usuario")
            return false
        }
        if (!password)
        {
            AlertWarning("Es necesaria la contrasena")
            return false
        }

        return true
    }

    function OnEnterPress(e : any){
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          SignIn()
        }
      }


     

    return (
            
        <div className="col-10 col-md-6 col-lg-4 offset-1  offset-md-3 offset-lg-4 mt-4 py-4 card-box bg-white text-center" id="cardLogin" >
          
                <h3 className="font-weight-bold p-3">Inicio de sesión</h3>

                
                
                <label className="sr-only" htmlFor="txtUsuario">Usuario</label>
                <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="txtEmpleadoCodigo" 
                        id="txtUsuario" 
                        value = { usuario } 
                        placeholder="Usuario" 
                        onChange={(e)=> setUsuario(e.target.value)}/>
                </div>
        
        
                <label className="sr-only" htmlFor="txtPassword">Password</label>
                <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-key " aria-hidden="true"></i>
                        </div>
                    </div>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="txtPassword" 
                        id="txtPassword" 
                        value = { password } 
                        placeholder="Password"  
                        onKeyDown={OnEnterPress}
                        onChange={(e)=> setPasswors(e.target.value)}/>
                </div>
        
                <div className="row"> 
                    <div className="col text-center">
                            <Loading Loading={loading}/>
                    </div>
                </div>


        
                <div className="form-group">
                    <div className="row py-4">
                        <div className="col col-sm-12 col-md-8 offset-md-2  justify-content-center d-flex pt-2 mt-2" >
                            <button 
                                    type="submit" 
                                    className="btn btn-primary btn-md btn-block" 
                                    disabled={loading}
                                    onClick={SignIn}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>


        </div>

    )
}






export default Login