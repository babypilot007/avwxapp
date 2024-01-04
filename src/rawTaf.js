import React from "react"


function rawTaf(getTaf){


        if(getTaf){
            
           let split_Taf = getTaf.split("FM").map((split)=>{
            
                split.split(" ")



                return <ul> <li>{split}</li></ul>

        
        })
            
            
           console.log(split_Taf)

           

           return <div className="taf">{split_Taf}</div>

        }


    }

export default rawTaf