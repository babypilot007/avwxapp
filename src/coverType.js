

function coverType(cover){


    switch(cover){
       
        case "FEW":
            return "Cover Type - Few Clouds"
        case "BKN" :
            return "Broken"
        case "OVC" :
            return "Over-cast"
        case "SCT" :
            return "Scattered"
        default :
                return (<span className="MVFR">Sky Clear</span>)
    }
}

export default coverType