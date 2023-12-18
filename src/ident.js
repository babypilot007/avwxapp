
function ident(code){




        switch (code){
            case "-RA BR":
                return "Light Rain with Mist"
            case "RA BR":
                    return "Rain with Mist"
            case "+RA BR":
                return "Heavy Rain with Mist"
            case "BR":
                return "Mist"
            case "TSRA":
                return "Thunderstorm with Rain"
            case "+TSRA":
                    return "Thunderstorm with heavy Rain"
            case "-RA":
                return "light Rain"
            case "RA":
                return "Rain"
            case "+RA":
                return "Heavy Rain"

            default :
                return "Clear"
    }



}

export default ident