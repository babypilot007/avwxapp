import React from "react"

 function visib(vis){


    let intVis = vis

if(vis === null){
 intVis = 1
} else intVis = parseInt(vis)

if(intVis <= 10 && intVis >= 5 )
{   
    return <p>Visibility - <span className="VFR">{intVis} sm</span></p>
    
}else if(intVis < 5 && intVis >=3 ){
   
    return <p>Visibility - <span className="MVFR">{intVis} sm</span></p>

}else if(intVis < 3 && intVis >= 1){

    return <p>Visibility - <span className="IFR">{intVis} sm</span></p>

}else if(intVis < 1){
    
    return <p>Visibility - <span className="LIFR">{intVis} sm</span></p>     
}
   
    console.log()
}

export default visib



