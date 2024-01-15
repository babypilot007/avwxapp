

import React, {useState } from "react";
import Taf_api from "./Taf_api";






 function Taf_screen() {


    const [inputValue, setInputValue] = useState('kteb');

   



        return(
            <div>
                <p className="input_Taf">ICAO ID - </p>

              <input className="input_Taf" type="text" onChange={(e) => setInputValue(e.target.value)}/>

                     <div className="taf" dangerouslySetInnerHTML={{__html : Taf_api(inputValue)}}></div>


            </div>
    
        )
    }
    







export  default Taf_screen