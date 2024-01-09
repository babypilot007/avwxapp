import React from "react";



function ident(code){


    let break_ident = code.split(" ")

        console.log(break_ident)

        var final_descp = ""

        for(var i=0 ; i < break_ident.length ; i++)
        {


                if(break_ident[i] === 'RA')
                {
                    final_descp = "Moderate Rain" + " & " + final_descp
                }else
                if(break_ident[i] === '+RA')
                {
                    final_descp = final_descp + " "+"Heavy Rain"
                }else
                if(break_ident[i] === '-RA')
                {
                    final_descp = final_descp + " "+"Light Rain"
                }else
                if(break_ident[i] === 'SN')
                {
                    final_descp = final_descp + " "+"moderate Snow"
                }else
                if(break_ident[i] === '-SN')
                {
                    final_descp = final_descp + " "+"Light Snow"
                }else
                if(break_ident[i] === '+SN')
                {
                    final_descp = final_descp + " "+"Heavy Snow"
                }else
                if(break_ident[i] === 'HZ')
                {
                    final_descp = final_descp + " "+"Haze"
                }else
                if(break_ident[i] === 'BR')
                {
                    final_descp = final_descp + " "+"Mist"
                }
                else final_descp = null
               
               
                console.log(final_descp)


        }

        if(final_descp){
        return <p className="prectype">{final_descp}</p>
        }
    }
       
export default ident