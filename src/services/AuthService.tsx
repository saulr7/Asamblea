
import Firebase from '../config/firebaseConfig'

import { axios } from "../config/config";

import CredencialesModel from "../models/CredencialesModel";
import { AlertError, AlertWarning } from "./AlertService";


export async function SignInService(model: CredencialesModel){

    if (!ValidatedSignInModel(model))
        return


        try {
        
            const resp = await Firebase.auth().signInWithEmailAndPassword(model.Usuario, model.Password)
            var token : loginResponModel =  {  user : resp.user  }
                model.Uid = token.user.uid;
            localStorage.setItem("token", token.user.xa)
            // localStorage.setItem("token", res.data.Token)
            window.location.reload()
    
        } catch (error) {
            console.log(error);
            var msg = error.response ? error.response.data.Message : "No se ha podido iniciar sesión, intenta de nuevo."
            AlertError( msg )
           
        }
}

interface loginResponModel {
    user : any
}


export async function RegistrarEnAplicacionService(IdAplicacion : Number )
{    
    try {
        
        const res = await axios.get('/login/LoginEnAplicacion/'+ IdAplicacion)
        window.open(res.data, '_blank');

    } catch (error) {
        var msg = error.response ? error.response.data.Message : "No se ha podido iniciar sesión, intenta de nuevo."
        AlertError( msg )
        console.log(error);
    }
    
}


export function IsLoggedIn()
{
    var token = localStorage.getItem("token")

    if (token)
        return true
    else 
        return false
}


export function LogOut()
{
    localStorage.removeItem("token")
    window.location.reload()
}

function ValidatedSignInModel(model : CredencialesModel) :boolean {
    if(!model.Usuario)
    {
        AlertWarning("Es necesario el usuario")
        return false;   
    }

    if(!model.Password)
    {
        AlertWarning("Es necesario el password")
        return false;   
    }


    return true;
}
