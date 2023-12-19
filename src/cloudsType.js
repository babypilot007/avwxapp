


function clouds(skyCover){

    let skcover = parseInt(skyCover)


    if(skcover >= 3000 )
    {   
        

        return <span className="VFR">{skcover} Ft AGL</span>

    }else if(skcover <3000 && skcover >1000 ){

        return <span className="MVFR">{skcover} Ft AGL</span>
       
    }else if(skcover <= 1000 && skcover > 500){

        return <span className="IFR">{skcover} Ft AGL</span>
      
    }else if(skcover <= 500){

        return <span className="LIFR">{skcover} Ft AGL</span>
         
    }

}

export default clouds