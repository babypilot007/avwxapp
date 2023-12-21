

function fltDecision(getSee, getCloud){

   
        if(getSee === 'VFR' && getCloud === 'VFR'){

            return <span className="VFR">- VFR</span>
        } else if(getSee === 'MVFR' || getCloud === 'MVFR'){
            return <span className="MVFR">- MVFR</span>
        }else if(getSee === 'IFR' || getCloud === 'IFR'){
            return <span className="IFR">- IFR</span>
        }else if(getSee === 'LIFR' || getCloud === 'LIFR'){
            return <span className="LIFR">- LIFR</span>
        }

}

export default fltDecision