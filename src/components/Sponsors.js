import logos from '../assets/Logos.png'
import logo1 from '../assets/Logo1.png'
import logo3 from '../assets/Logo3.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'


export function Sponsors() {

return(

<>
<section className="bg-gray-100 antialiased">

    <div className= 
    {` container mx-auto 
    px-8 mb-2 lg:px-8 2xl:px-16
    flex flex-col items-center justify-center
    
    `}>

        <div>
            <h2 className= 
            {`font-manrope font-bold 
            pb-10 lg:pb-10 pt-5 text-center lg:text-start
            `}>
                Trusted By Over 100+ Startups and freelance business
            </h2>
        </div>

        <div className= {`flex flex-wrap gap-4 sm:gap-6 items-center justify-center`}>
            <img src= {logos} className= 
            {`hidden lg:block 2xl:pr-5
            `}/>        

            <img src={logo1} className= 
            {` w-[138px] h-[22px]
            hidden md:inline lg:hidden
            `}/>
            
            <img src={logo3} className= 
            {`w-[138px] h-[30px]
            lg:hidden
            `}/>
            
            <img src={logo5} className= 
            {`w-[138px] h-[26px]
            lg:hidden
            `}/>

            <img src={logo6} className= 
            {`w-[138px] h-[29px]
            lg:hidden
            `}/>

        </div>

    </div>


</section>

</>
)
}
            
            