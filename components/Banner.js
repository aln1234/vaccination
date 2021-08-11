
import Image from 'next/image'
import vaccine from "../public/images/vaccine.png"
import { motion } from "framer-motion"

function Banner() {

    const rotateVariants ={
        animate:{
            rotate:90,
        }
    }





    return (
        <div>
            <section className="flex mx-48 my-24">
                <div className="grid grid-cols-3 gap-4">
                    <div className="grid grid-rows-2">
                    
                    <h1 className="text-6xl whitespace-nowrap font-semibold pb-4  text-gray-500">Get your <span className="text-red-500 text-6xl ">vaccine,</span></h1>
                    <h1 className="text-6xl whitespace-nowrap font-semibold text-gray-500">get your health</h1>
                   
                    <h1 className="text-xl  font-semibold text-left  text-gray-500 pb-8">
                    These drugs are being used as vaccines for COVID-19. Limited to specific populations. Source: dda.gov.np
For informational purposes only. 
                        </h1>
                
               <div className="flex items-center space-x-8 ml-8">
               <h1 className="text-lg px-6 py-8 my-2 shadow-3xl cursor-pointer font-semibold bg-red-500 text-white rounded-full">Get Your Vaccine</h1>
               <h1 className=" text-lg px-6 py-8 my-2 shadow-xl cursor-pointer border-2 border-red-400 text-red-400 font-semibold rounded-full">Learn More</h1>
                   </div>
                   
                      
                  
                    </div>
                    <div className="ml-48"> 
                    <motion.div
                     animate={{ scale:4 ,y:100 }}
                     transition={{ duration: 20, ease:"easeOut",yoyo:Infinity }}
                     className="absolute h-10 w-10 rounded-full bg-red-500 mt-12">
             


             </motion.div>
             <motion.div
                animate={{ scale:4 ,x:-50 }}
                transition={{ duration: 10, ease:"easeOut",yoyo:Infinity }}

              className="absolute h-4 w-4 rounded-full bg-purple-500 ml-80 ">
             </motion.div>
             <motion.div
              animate={{ scale:4 ,y:200 }}
              transition={{ duration: 10, ease:"easeOut",yoyo:Infinity }}
              className="absolute h-4 w-4 rounded-full bg-yellow-500 ml-96 mt-44 z-50">
             </motion.div>
             <motion.div
              animate={{ scale:1 ,y:20 }}
              transition={{ duration: 10, ease:"easeOut",yoyo:Infinity }}
              className="absolute h-52 w-52 rounded-full bg-green-500  mt-52 z-40 ">
             </motion.div>
             <div className="relative h-96 w-96 rounded-full bg-purple-500 ml-24 mt-12 ">
              
                 <motion.div    className=" absolute  rounded-full rotate-45 ml-32 mt-20 z-50 "
               animate={{ rotate: 360 }}
               transition={{ duration: 18, ease:"easeOut",yoyo:Infinity }}
                 >
                 <Image src={vaccine} 
                 objectFit="fill"
                 layout="fixed"
                
                 />

                 </motion.div>
           
               
             </div>
           
                    </div>
                  
                  
                 
                   

                </div>
            
              

            
            </section>
        </div>
    )
}

export default Banner
