


function clouds(skyCover){

    let skcover = parseInt(skyCover)


    if(skcover >= 3000 )
    {   
        

        return (<span>Bases at <span className="VFR"> {skcover} Ft AGL</span></span>)

    }else if(skcover <3000 && skcover >1000 ){

        return (<span>Bases at <span className="VFR"> {skcover} Ft AGL</span></span>)
       
    }else if(skcover <= 1000 && skcover > 500){

        return (<span>Bases at <span className="VFR"> {skcover} Ft AGL</span></span>)
      
    }else if(skcover <= 500){

        return (<span>Bases at <span className="VFR"> {skcover} Ft AGL</span></span>)
         
    }   else return ""

}

export default clouds