

function freezingLvl(temp){

    const freezingLvl = ((15 - (parseInt(temp))) / 2) * 1000;

    return(
        <div className="freeze">
           
          Freezing Level - {freezingLvl} Feet
        
        </div>
    )
}

export default freezingLvl
