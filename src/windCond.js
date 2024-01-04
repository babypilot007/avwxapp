import React from "react"

function windConds(windir, windspd, wgust){


    if(wgust === null){

    return(

        <p>
           Winds <span className="VFR">Calm</span>
        </p>

    )}else if(windir < 100){
    
    return(

        <p>
             Winds from <span className="VFR">{0}{windir}°</span> at <span className="VFR">{windspd}</span> Kts
            <p>Gusts <span className="gust">{wgust}</span> Kts (Gust Factor<span className="gust"> {(wgust-windspd)/2}</span> Kts)</p>
        </p>
    )}else 
         return(
            <p>
            Winds from <span className="VFR">{windir}°</span> at <span className="VFR">{windspd}</span> Kts
           <p>Gusts <span className="gust">{wgust}</span> Kts (Gust Factor<span className="gust"> {(wgust-windspd)/2}</span> Kts)</p>
            </p>
         )

    
    
  

}

export default windConds