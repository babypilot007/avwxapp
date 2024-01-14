import  {   useState } from "react";


function Taf_api(input_Taf) {

    const [Taf_id, setTaf_id] = useState(input_Taf);



             async function fetchTaf (input_Taf) {

            if(input_Taf)

            {
       
            try{
                 const taf_url = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Ftaf%3Fids%3D' + input_Taf + '%26format%3Dhtml%26metar%3Dfalse';

                 const taf_response = await fetch(taf_url)
                 const new_taf_data = await taf_response.text(taf_response);
            
                setTaf_id(new_taf_data)
                
            
            }catch (error) {
                console.error(error);

         }

        } else fetchTaf('kteb')
    }

        fetchTaf(input_Taf)
            
        
        return Taf_id



  

}

export  default Taf_api