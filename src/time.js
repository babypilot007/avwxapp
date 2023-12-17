import dayjs from "dayjs";
import React from "react";
import fetchData from "./apiCall";

function newtime(){

    const date = dayjs();
    const ctime = date.format("hh:mm:ss") + " PM"


    return(
        <div>
            New Time {ctime}
        </div>
    )
}

export default newtime