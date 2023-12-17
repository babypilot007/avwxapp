import dayjs from "dayjs";
import React from "react";


function newtime(){

    const date = dayjs();
    const ctime = date.$H

    return(
        <div>
           
           {
              (() => {
                if((24 - ctime) >= 12){
                  return <h3>Refreshed at {date.format("hh:mm:ss")} AM </h3>
                }
                else { return <h3>Refreshed at {date.format("hh:mm:ss")} PM</h3>}
             })()
            }
    
        </div>
    )
}

export default newtime