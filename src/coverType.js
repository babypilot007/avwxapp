

function coverType(cover){


    switch(cover){
       
        case "FEW":
            return (<span>Cloud Cover - <span className="MVFR">Few</span></span>)

        case "BKN" :
            return (<span>Cloud Cover - <span className="MVFR">Broken</span></span>)

        case "OVC" :
            return (<span>Cloud Cover - <span className="MVFR">Overcast</span></span>)

        case "SCT" :
            return (<span>Cloud Cover - <span className="MVFR">Scattered</span></span>)

        default :
                return (<span className="MVFR">Sky Clear</span>)
    }
}

export default coverType