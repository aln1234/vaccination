
import vaccine from "../public/images/vaccine.png"
import { motion } from "framer-motion"
import Image from 'next/image'


function Single() {
    return (
        <section className="flex mx-48 my-24">
            <div>
                <div className="flex items-center gird gird-cols-2 space-x-12">
                    <motion.div
                   whileHover={{scale:1.1}}
                   transition ={{type:"spring", stiffness:300}}
                    
                    
                    
                    className="flex   bg-gray-100 rounded-3xl hover:shadow-2xl cursor-pointer ">
                    <div className="relative h-52 w-36   bottom-16 ">
                      
                      <Image src={vaccine} 
                   objectFit="contain"
                   layout="fill"
                   
                  
                  
                   />
                
                      </div>
                      <div className="flex flex-col h-44 w-44 pr-8 pt-4 ">
                      <h1 className="text-xl font-semibold pt-4 pr-8">Sinovac</h1>
                      <p className="text-red-400 whitespace-normal ">2 times injection dose</p>
                      <p className="text-red-400 px-3 py-1 mt-4 h-10 w-28 border-2 border-red-400 rounded-full ">Get Vaccine</p>
                      </div>
                        </motion.div>
                 
                    <div>
                      
                    <motion.div  className="flex   bg-gray-100 rounded-3xl  hover:shadow-2xl cursor-pointer "
                     whileHover={{scale:1.1}}
                     transition ={{type:"spring", stiffness:300}}
                     >
                    <div className="relative h-52 w-36   bottom-16 "
                     
                      >
                      
                      <Image src={vaccine} 
                   objectFit="contain"
                   layout="fill"
                   
                  
                  
                   />
                
                      </div>
                      <div className="flex flex-col h-44 w-44 pr-8 pt-4 ">
                      <h1 className="text-xl font-semibold pt-4 pr-8">Sinovac</h1>
                      <p className="text-red-400 whitespace-normal ">2 times injection dose</p>
                      <p className="text-red-400 px-3 py-1 mt-4 h-10 w-28 border-2 border-red-400 rounded-full ">Get Vaccine</p>
                      </div>
                        </motion.div>
                    </div>
                    <div>
                       
                    <motion.div  className="flex   bg-gray-100 rounded-3xl hover:shadow-2xl cursor-pointer "
                     whileHover={{scale:1.1}}
                     transition ={{type:"spring", stiffness:300}}
                    
                    
                    >
                    <div className="relative h-52 w-36   bottom-16 "
                      whileHover={{scale:1.1}}
                      transition ={{type:"spring", stiffness:300}}
                    
                    >
                      
                      <Image src={vaccine} 
                   objectFit="contain"
                   layout="fill"
                   
                  
                  
                   />
                
                      </div>
                      <div className="flex flex-col h-44 w-44 pr-8 pt-4  ">
                      <h1 className="text-xl font-semibold pt-4 pr-8">Sinovac</h1>
                      <p className="text-red-400 whitespace-normal ">2 times injection dose</p>
                      <p className="text-red-400 px-3 py-1 mt-4 h-10 w-28 border-2 border-red-400 rounded-full ">Get Vaccine</p>
                      </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </section>
    )
}

export default Single
