

function rawTaf(getTaf){


        if(getTaf){
            


            // let taf_data = getTaf.map((forcast)=>{
            // console.log(forcast)

            //             let clouds_forcast = forcast.clouds.map((clouds)=>{


            //                     return (<p>base- {clouds.base} cover - {clouds.cover}</p>)
            //             })

            //         return (<li>visibility - {forcast.visib} winds - {forcast.wdir} {forcast.wspd} kts gusts - {forcast.wgst} kts {clouds_forcast}</li>)
            // })

            // var parser = new DOMParser();
	        // var doc = parser.parseFromString(getTaf, 'text/html');


           
            const apnd = document.getElementsByClassName('taf')

            var new_div = document.createElement("div");

            new_div.innerHTML = '<h1>TAF</h1>';
            
           
            
            console.log(apnd)




            

        }


    }

export default rawTaf