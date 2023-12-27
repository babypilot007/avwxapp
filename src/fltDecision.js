import React from "react"


function fltDecision(getSee, getCloud){

   
        if(getSee === 'VFR' && getCloud === 'VFR'){

            return <span className="VFR">- VFR</span>
            
        } else if((getSee === 'MVFR' || getCloud === 'MVFR') && (getSee !== 'IFR','VFR','LIFR' || getCloud !== 'IFR','VFR','LIFR') ){
            return <span className="MVFR">- MVFR</span>

        }else if((getSee === 'IFR' || getCloud === 'IFR') && (getSee !== 'LIFR' || getCloud !== 'LIFR')){
            return <span className="IFR">- IFR</span>
        }else {
            return <span className="LIFR">- LIFR</span>
        }

}

export default fltDecision