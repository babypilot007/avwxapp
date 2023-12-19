import React from "react"

function windConds(windir, windspd, wgust){



    if(wgust === "Null"){

    return(

        <p>
           Winds from <span>{windir}°</span> at <span>{windspd}</span> Kts
        </p>

    )}else  return(

        <p>
             Winds from <span>{windir}°</span> at <span>{windspd}</span> Kts
            <p>Gusts <span className="gust">{wgust}</span> Kts (Gust Factor<span className="gust"> {(wgust-windspd)/2}</span> Kts)</p>
        </p>
    )
    
  

}

export default windConds