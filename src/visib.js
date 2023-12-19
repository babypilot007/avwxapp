


function visib(vis){


let intVis = parseInt(vis)

if(intVis >= 10 )
{   
    

    return <span className="VFR">{intVis} sm</span>
    
}else if(intVis <3000 && intVis >1000 ){

    return <span className="MVFR">{intVis} sm</span>

}else if(intVis <= 1000 && intVis > 500){

      return <span className="IFR">{intVis} sm</span>

}else if(intVis <= 500){

    return <span className="LIFR">{intVis} sm</span>     
}

    
}
export default visib





