
import pic from "../public/images/pic.png"
import { motion } from "framer-motion"
import Image from 'next/image'



function Picture() {
    return (
        
        <section className="md:max-w-screen-md mx-48 ">
            <div>
            <div className=" items-center justify-between  grid grid-cols-2 space-x-80">
            <div className="relative w-[400px] h-[400px]">
            <Image src={pic} 
                   objectFit="contain"
                   layout="fill"
                   className="absolute "
                   
                  
                  
                   />

               
            </div>
            <div className="grid grid-rows-2 ">
                <div className="max-w-prose"> <h1 className="text-8xl whitespace-nowrap font-semibold pb-4  text-gray-500">Sinnovac<span className="text-red-500 text-6xl "></span></h1></div>
           
                    <h1 className="text-6xl whitespace-nowrap font-semibold text-gray-500">Vaccine</h1>
                   <div className="max-w-prose">
                   <p className="text-base font-semibold text-left  text-gray-500 pb-8">
                    These drugs are being used as vaccines for COVID-19. Limited to specific populations. Source: dda.gov.np
For informational purposes only. 
                        </p>

                   </div>
                 
            </div> 
        </div>
            </div>
            <div class="mt-16">
            <div className=" items-center justify-between  grid grid-cols-2 space-x-80">
      
            <div className="grid grid-rows-2 ">
                <div className="max-w-prose"> <h1 className="text-8xl whitespace-nowrap font-semibold pb-4  text-gray-500">Sinnovac<span className="text-red-500 text-6xl "></span></h1></div>
           
                    <h1 className="text-6xl whitespace-nowrap font-semibold text-gray-500">Vaccine</h1>
                   <div className="max-w-prose">
                   <p className="text-base font-semibold text-left  text-gray-500 pb-8">
                    These drugs are being used as vaccines for COVID-19. Limited to specific populations. Source: dda.gov.np
For informational purposes only. 
                        </p>

                   </div>
                 
            </div> 
            <div className="relative w-[400px] h-[400px]">
            <Image src={pic} 
                   objectFit="contain"
                   layout="fill"
                   className="absolute "
                   
                  
                  
                   />

               
            </div>
        </div>
            </div>
         
        </section>
       
    )
}

export default Picture
