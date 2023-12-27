
import React from "react";


function freezingLvl(temp){

    const freezingLvl = (((parseInt(temp))) / 2) * 1000;

    return(
        <p className="freeze">
           
         <span className="title">Freezing level</span> - {freezingLvl} Feet
        
        </p>
    )
}

export default freezingLvl
