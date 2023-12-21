


function visib(vis){


let intVis = parseInt(vis)
var visConds = 1  //default is VFR

if(intVis >= 10 )
{   
    
    visConds = 1
    return (
            visConds
            )
    
}else if(intVis <3000 && intVis >1000 ){

    return <span className="MVFR">{intVis} sm</span>

}else if(intVis <= 1000 && intVis > 500){

      return <span className="IFR">{intVis} sm</span>

}else if(intVis <= 500){

    return <span className="LIFR">{intVis} sm</span>     
}

    return visConds
}
export default visib





