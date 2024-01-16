import React from "react";



function ident(code){


     if(code){
    let break_ident = code.split(" ")
     

        var final_descp = ""

        for(var i=0 ; i < break_ident.length ; i++)
        {
               var space = ""
               
               for (var j = 0; j < break_ident.length ; j++ ){
                    
                    if(j > 0 && j < break_ident.length){
                         
                         space =  ","
                         j++

                    }else space = ''


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
                }else
                if(break_ident[i] === '-FZRA')
                {
                    final_descp = final_descp +" Light Freezing Rain" + space
                }else
                if(break_ident[i] === 'FZRA')
                {
                    final_descp = final_descp +" Moderate Freezing Rain" + space
                }else
                if(break_ident[i] === '+FZRA')
                {
                    final_descp = final_descp +" Heavy Freezing Rain" + space
                }else
                if(break_ident[i] === 'DZ')
                {
                    final_descp = final_descp +" Moderate Drizzle" + space
                }else
                if(break_ident[i] === '-DZ')
                {
                    final_descp = final_descp +" Light Drizzle" + space
                }else
                if(break_ident[i] === '+DZ')
                {
                    final_descp = final_descp +" Heavy Drizzle" + space
                }else
                if(break_ident[i] === 'PL')
                {
                    final_descp = final_descp + " moderate Ice Pelletes " + space
                }else
                if(break_ident[i] === '-PL')
                {
                    final_descp = final_descp + " Light Ice Pelletes " + space
                }else
                if(break_ident[i] === '+PL')
                {
                    final_descp = final_descp + " Heavy Ice Pelletes " + space
                }



                else final_descp = null
               
               
        }
     }
        if(final_descp){
        return <p className="prectype">{final_descp}</p>
        }
    }
       
export default ident