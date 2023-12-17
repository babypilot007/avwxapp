import React from "react";

function ident(){

    const date = dayjs();
    const ctime = date.format("hh:mm:ss") + " PM"


    return(
        <div>
            New Time {ctime}
        </div>
    )
}

export default ident