import React, {useState} from 'react'
import Loading from '../../common/Loading'


const Encuesta :  React.FC<{}> = ()=> {


       
    const [loading, setLoading] = useState(false)
    const [hover, setHover] = useState(false)

    return (
        <div>
        <div
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            className={"shadow-sm list-group-item list-group-item-action flex-column align-items-start p-1 px-2 " + (hover ? "aplicacion" : "") }>
            <div className=" d-flex w-100 justify-content-between">
                <div>
                    <h5 className="mb-1">Titulo</h5>
                    <p className="mb-1">Descripcion</p>
                
                

                </div>
                
                {loading ? (
                    <div className={"d-flex align-self-center"}>
                        <Loading Loading={loading} Hidetext={true}/>
                    </div>
                ): (
                    <div>
                        <button className={ "btn"}>
                            <i className="fa fa-arrow-right fa-2x text-primary align-items-end" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
            
            </div>
        </div>
    </div>
    )
}

export default Encuesta