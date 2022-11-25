import {FaArrowRight} from "react-icons/fa";
import sa1 from './../../assets/SA1.jpg'
import sa2 from './../../assets/SA2.jpg'
import sa3 from './../../assets/SA3.jpeg'
import sa4 from './../../assets/SA4.jpg'
import sa5 from './../../assets/SA5.jpeg'
import sa6 from './../../assets/SA6.png'
import sa7 from './../../assets/SA7.jpg'
import orangeA from './../../assets/orangeA.png'



export function FlexBoxI() {

return (

<>

<div className= 
{`lg:w-[50%] lg:h-[466px] 
relative sm:text-center lg:text-left
flex flex-col sm:items-center lg:items-start
lg:block
`}>

    <h1 className= 
    {` text-6xl 2xl:text-[67px] leading-[4rem] 
    font-extrabold font-manrope
    
    `}>Increase your followers on social media
    </h1>

    <p className= 
    {`mt-5 mb-6
    font-medium text-base lg:text-sm 
    xl:text-base font-manrope
    `}>Yet bed any for travelling assistance indulgence unpleasing.<br/> 
        Not thoughts all exercise blessing. 
        Indulgence way<br/> everything joy alteration boisterous the attachment.
    </p> 

    <a href="#" className= 
    {`bg-myPurple
    flex justify-evenly items-center w-36
    text-xs text-gray-100 font-normal font-manrope
    py-3 mb-5 rounded-[4px]
    cursor-pointer
    transition duration-300 hover:bg-indigo-700`}>
        <p>Get Started</p>
        <div className="text-[9px]"><FaArrowRight/></div>
    </a>

    <div className="flex -space-x-2">
        
        <div>
            <img src={sa1} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <img src={sa2} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <img src={sa3} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <img src={sa4} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <img src={sa5} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <img src={sa6} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>
        
        <div>
            <img src={sa7} className= 
            {`inline-block h-8 w-8 
            rounded-full object-cover ring-2 ring-white
            `}/>
        </div>

        <div>
            <div className= 
            {`flex items-center justify-center  
            h-8 w-8 rounded-full bg-gray-600             
            text-[9px] text-white font-bold font-manrope
            `}>
                12k+
            </div>
        </div>        

    </div>

    <p className="mt-5 text-sm font-medium font-manrope">    
        Increase followers plan. Get started today!
    </p>

    <img src= {orangeA} className = 
    {`hidden lg:block 
    absolute lg:bottom-24 lg:right-20 
    xl:bottom-24 xl:right-20
    2xl:right-48 2xl:bottom-24
    lg:h-[55px] xl:h-auto 2xl:h-[80px]
    `}/>
      
</div>
</>
    )
}