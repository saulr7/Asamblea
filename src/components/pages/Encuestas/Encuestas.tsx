import React from 'react'
import Title from '../../common/Title'
import Encuesta from './Encuesta'



const Encuestas :  React.FC<{}> = ()=> {


    return (
        <div>

            <div className="container">

                <div className="row">
                    <div className="col">
                        <Title title="Encuestas"/>
                    </div>
                </div>

                <div className="row">

                    <div className="col">
                        <a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstore.stormfront.co.uk%2Fcontent%2Fimages%2Fthumbs%2F0008535_iphonexsmax-family-3up-angled-us-en-screenjpg.jpeg&f=1&nofb=1" target="_blank" download>Link 2</a>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
                        {[0,1,2,3,4].map((d, index)=> {
                            return (
                                <div key={index}>
                                    <Encuesta/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                

            </div>

            
        </div>
    )
}

export default Encuestas