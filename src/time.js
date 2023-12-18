import dayjs from "dayjs";
import React from "react";


function newtime(getTime){

    const date = dayjs();
    const ctime = date.$H

    return(
        <div>
            {getTime}
           {
              (() => {
                if((24 - ctime) >= 12){
                  return <p>Refreshed at {date.format("hh:mm:ss")} AM </p>
                }
                else { return <p>Refreshed at {date.format("hh:mm:ss")} PM</p>}
             })()
            }
    
        </div>
    )
}

export default newtime