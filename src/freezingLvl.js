
import React from "react";


function freezingLvl(temp){

    const freezingLvl = (((parseInt(temp))) / 2) * 1000;

    return(
        <div className="freeze">
           
          Freezing Level - {freezingLvl} Feet
        
        </div>
    )
}

export default freezingLvl
