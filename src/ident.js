import React from "react";



function ident(code){


    let break_ident = code.split(" ")

        console.log(break_ident)

        var final_descp = ""

        for(var i=0 ; i < break_ident.length ; i++)
        {
               var space = ""
               
               for (var j = 0; j < break_ident.length ; j++ ){
                    
                    if(j > 0 && j < break_ident.length){
                         
                         space =  ","
                         console.log(space)
                         j++

                    }else space = ''

                    console.log(space)

               }

                if(break_ident[i] === 'RA')
                {   
                    final_descp =  " Moderate Rain" + space
                }else
                if(break_ident[i] === '+RA')
                {   
                    final_descp =   " Heavy Rain" + space


                }else
                if(break_ident[i] === '-RA')
                {
                     final_descp =  " Light Rain" + space


                }else
                if(break_ident[i] === 'SN')
                {
                    final_descp = final_descp + " moderate Snow " + space
                }else
                if(break_ident[i] === '-SN')
                {
                    final_descp = final_descp + " Light Snow " + space
                }else
                if(break_ident[i] === '+SN')
                {
                    final_descp = final_descp + " Heavy Snow " + space
                }else
                if(break_ident[i] === 'HZ')
                {
                    final_descp = final_descp + " Haze" + space
                }else
                if(break_ident[i] === 'TSRA')
                {
                    final_descp = final_descp +" Thunderstorms with Rain" + space
                }else
                if(break_ident[i] === '+TSRA')
                {
                    final_descp = final_descp +" Thunderstorms with Heavy Rain" + space
                }else
                if(break_ident[i] === 'BR')
                {
                    final_descp = final_descp +" Mist" + space
                }
                else final_descp = null
               
               
                console.log(final_descp)


        }

        if(final_descp){
        return <p className="prectype">{final_descp}</p>
        }
    }
       
export default ident