import React from 'react'
import Title from '../../common/Title'
import Documento from './Documento'


const Documentos :  React.FC<{}> = ()=> {


    return (
        <div>

            <div className="container">

                <div className="row">
                    <div className="col">
                        <Title title="Documentos"/>
                    </div>
                </div>
                
                
                <div className="row p-2">
                    <div className="col-12 col-md-6 offset-md-3 text-center">
                        <input className="form-control" type="text" placeholder="Buscar..."/>
                    </div>
                </div>




                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
                        {[0,1,2,3,4].map((d, index)=> {
                            return (
                                <div key={index}>
                                    <Documento/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                

            </div>

            
        </div>
    )
}

export default Documentos