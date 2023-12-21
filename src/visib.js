

 function visib(vis){


let intVis = parseInt(vis)

if(intVis >= 10 )
{   
    return <span className="VFR">{intVis} sm</span>
    
}else if(intVis <10 && intVis >5 ){
   
    return <span className="MVFR">{intVis} sm</span>

}else if(intVis <= 5 && intVis > 3){

    return <span className="IFR">{intVis} sm</span>

}else if(intVis <= 3){
    
     return <span className="LIFR">{intVis} sm</span>     
}
   

}

export default visib



