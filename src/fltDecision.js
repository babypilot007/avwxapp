import React from "react"


function fltDecision(getSee, getCloud){

   
        if(getSee === 'LIFR' || getCloud === 'LIFR'){

            return <span className="LIFR">- LIFR</span>
            
        } else if(getSee === 'IFR' || getCloud === 'IFR')
        {
            return <span className="IFR">- IFR</span>

        }else if(getSee === 'MVFR' || getCloud === 'MVFR'){

            return <span className="IFR">- IFR</span>

        }else return <span className="VFR">- VFR</span>


    }

export default fltDecision