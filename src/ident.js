import React from "react";



function ident(code){




        switch (code){
            case "-RA BR":
                return <p className='prectype'>Light Rain with Mist</p>
            case "RA BR":
                return <p className='prectype'>Rain with Mist</p>
            case "+RA BR":
                return <p className='prectype'>Heavy Rain with Mist</p>
            case "BR":
                return <p className='prectype'>Mist</p>
            case "TSRA":
                return <p className='prectype'>Thunderstorm with rain</p>
            case "+TSRA":
                return <p className='prectype'>Thunderstorm with Heavy rain</p>
            case "-RA":
                return <p className='prectype'>light rain</p>
            case "RA":
                return <p className='prectype'> rain</p>
            case "+RA":
                return <p className='prectype'>Heavy rain</p>


            default :
                return <p className="no_precip"></p>
    }



}

export default ident