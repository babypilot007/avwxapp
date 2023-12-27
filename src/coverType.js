import React from "react";


function coverType(cover){


    switch(cover){
       
        case "FEW":
            return (<span>Cloud Cover - <span className="VFR">Few</span></span>)

        case "BKN" :
            return (<span>Cloud Cover - <span className="VFR">Broken</span></span>)

        case "OVC" :
            return (<span>Cloud Cover - <span className="VFR">Overcast</span></span>)

        case "SCT" :
            return (<span>Cloud Cover - <span className="VFR">Scattered</span></span>)

        default :
                return (<span className="VFR">Sky Clear</span>)
    }
}

export default coverType