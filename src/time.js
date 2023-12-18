import dayjs from "dayjs";
import React from "react";


function newtime(getTime){

    const date = dayjs();
    let reptime = getTime.split(" ")
    let reptime2 = reptime[1].split(":")

    let reportTime = parseInt(reptime2[0])

    if(reportTime <= 12){

        reportTime = (reportTime + 12) - 5
    }else {
        reportTime = ((reportTime) - 12) - 5
    }

    console.log(reportTime)

    return(
        <div>
            {getTime}
           {
              (() => {
                if(parseInt(reptime2[0]) >= 12){
                  return <p>Refreshed at {date.format("hh:mm:ss")} AM </p>
                }
                else { return <p>Refreshed at {date.format("hh:mm:ss")} PM</p>}
             })()
            }
    
        </div>
    )
}

export default newtime