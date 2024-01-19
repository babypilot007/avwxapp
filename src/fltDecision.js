import React from "react"


function fltDecision(getSee, getCloud){

   
        if(getSee === 'LIFR' || getCloud === 'LIFR'){

            return <span className="LIFR_header">LIFR</span>
            
        } else if(getSee === 'IFR' || getCloud === 'IFR')
        {
            return <span className="IFR_header">IFR</span>

        }else if(getSee === 'MVFR' || getCloud === 'MVFR'){

            return <span className="MVFR_header">MVFR</span>

        }else return <span className="VFR_header">VFR</span>


    }

export default fltDecision