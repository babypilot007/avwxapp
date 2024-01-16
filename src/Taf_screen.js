

import React, {useState } from "react";
import Taf_api from "./Taf_api";






 function Taf_screen() {


    const [inputValue, setInputValue] = useState('kteb');

   
        if(inputValue !== null){


        return(
            <div>
                <div  className="input_Taf"><p>( Multiple ID's seperated by a space or a , )</p></div>

              <input className="input" placeholder = "ICAO ID" type="text" onChange={(e) => setInputValue(e.target.value)}/>

                     <div className="taf" dangerouslySetInnerHTML={{__html : Taf_api(inputValue)}}></div>


            </div>
    
        )
    } else 
        return (<div><p>Enter Correct Value</p></div>)
    
    // return "(<div><p>Enter Correct Value</p></div>)"
}
    







export  default Taf_screen