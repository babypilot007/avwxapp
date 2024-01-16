import   { useState } from "react";


function Taf_api(input_Taf) {

    const [Taf_id, setTaf_id] = useState(input_Taf);
    const [metarData, setMetarData] = useState('');

    
        
        

    async function fetchTaf (input_Taf) {

            if(input_Taf)

            {

                let change_input = 'kteb'

                if(input_Taf.indexOf(' ')>=0){
            
            
                        change_input = input_Taf.replaceAll(' ',',')
                        
            
                } else change_input = input_Taf


            try{
                 const taf_url = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Ftaf%3Fids%3D' + change_input + '%26format%3Dhtml%26metar%3Dfalse';
                 const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Fmetar%3Fids%3D'+ change_input + '%26format%3Dhtml';
                 
                 const response = await fetch(apiUrl);
                 var data = await response.text(response);

                 const taf_response = await fetch(taf_url)
                 const new_taf_data = await taf_response.text(taf_response);
            
                setMetarData(data)
                setTaf_id(new_taf_data)
                
            
            }catch (error) {
                console.error(error);

         }

        } else input_Taf="kteb"
    }

        
    
        fetchTaf(input_Taf)
            
        console.log(metarData)



        return [metarData , Taf_id]



  

}

export  default Taf_api