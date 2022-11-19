import {FaArrowRight} from "react-icons/fa";

export function CTA() {

return (

<>
<section className= 
{`antialiased bg-[#1B1C31] 
border-b-2 border-gray-600
`}>

    <div className="container mx-auto px-8 py-20">

        <div className= 
        {`flex flex-col gap-10 
        items-center justify-center 
        text-center
        `}>

            <h1 className= 
            {`text-gray-100 font-manrope 
            font-[400] text-6xl leading-tight
            `}>
                Join millions of<br/>creative people with us
            </h1>

            <a href="#" className= 
            {`bg-myOrange
            flex justify-evenly items-center gap-3
            text-sm text-black font-normal font-manrope
            py-4 px-8 mb-5 rounded-[4px]
            cursor-pointer
            transition duration-300 hover:bg-orange-400`}>

                <p>Join the Waitlist</p>
                
                <div className="text-[9px]"><FaArrowRight/></div>

            </a>

        </div>

    </div>

</section>

</>

)
}
