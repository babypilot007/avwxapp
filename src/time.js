import dayjs from "dayjs";
import React from "react";


function newtime(getTime){

    const date = dayjs();
    var isCurrent = ""
    let reptime = getTime.split(" ")
    let reptime2 = reptime[1].split(":")

    let reportTime = parseInt(reptime2[1])

    if(reportTime <= 12){

        reportTime = (reportTime + 12) - 5
    }else {
        reportTime = ((reportTime) - 12) - 5
    }

    if(reportTime - parseInt(date.format("hh")) <= 0)
        {
           isCurrent = <p className="VFR">{isCurrent = "Data is Current"}</p>
        }else isCurrent = <p className="IFR">{isCurrent = "Data is not Current"}</p>


    return(
        <div>
            {getTime}
           {
              (() => {
                if(date.format("HH") < 12){
                  return <p>Refreshed at {date.format("hh:mm:ss")} AM </p>
                }
                else { return <p>Refreshed at {date.format("hh:mm:ss")} PM</p>}
             })()
            }
            <p>{isCurrent}</p>
        </div>
    )
}

export default newtime