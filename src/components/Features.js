import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'

export function Features() {

return(

<>

<section className="bg-white antialiased">

    <div className= 
    {` container mx-auto 
    px-8 lg:px-8 pb-10 2xl:px-16 pt-16 lg:pt-32
    `}>

        <h2 className= 
        {`pb-14 lg:pb-12 
        text-center lg:text-left text-4xl 
        font-manrope font-extrabold 
        `}>
            One platform to increase<br/> followers on all social media.
        </h2>

        <div className= 
        {`flex flex-wrap md:flex-nowrap justify-center 
        lg:justify-between md:flex-row gap-[22px] md:gap-4 lg:gap-0`}>

            <div className= 
            {`flex flex-col items-center lg:items-start gap-3 
            text-center lg:text-left pb-7`}>
                
                <div><img src= {frame1} className= {`h-[26px]`}/></div>
                

                
                <h3 className= 
                {`font-manrope font-bold text-lg
                `}>
                    100% Secure
                </h3>
                

                
                <p className= 
                {`font-manrope font-medium text-[13px]
                md:px-4 lg:px-0
                `}>
                    From they fine john he give of rich he.<br className= "md:hidden lg:block"/>
                    They age and draw mrs like. 
                    Improving<br className= "md:hidden lg:block"/> 
                    end distrusts may instantly.
                </p>
                
            </div>

            <div className= 
            {`flex flex-col items-center lg:items-start gap-3 
            text-center lg:text-left pb-7  `}>
                
                <div><img src= {frame2} className= {`h-[26px]`}/></div>
                

                
                <h3 className= 
                {`font-manrope font-bold text-lg
                `}>
                    No Cookies Required
                </h3>
                

                
                <p className= 
                {`font-manrope font-medium text-[13px]
                md:px-4 lg:px-0
                `}>
                    From they fine john he give of rich he.<br className= "md:hidden lg:block"/>
                    They age and draw mrs like. 
                    Improving<br className= "md:hidden lg:block"/> 
                    end distrusts may instantly.
                </p>
                
            </div>

            <div className= 
            {`flex flex-col items-center lg:items-start gap-3 
            text-center lg:text-left pb-7  `}>
                
                <div><img src= {frame3} className= {`h-[26px]`}/></div>
                

                
                <h3 className= 
                {`font-manrope font-bold text-lg
                `}>
                    Login Info Not Required
                </h3>
                

                
                <p className= 
                {`font-manrope font-medium text-[13px]
                md:px-4 lg:px-0
                `}>
                    From they fine john he give of rich he.<br className= "md:hidden lg:block"/>
                    They age and draw mrs like. 
                    Improving<br className= "md:hidden lg:block"/> 
                    end distrusts may instantly.
                </p>
                
            </div>
            
            <div className= 
            {`flex md:hidden lg:flex flex-col items-center lg:items-start gap-3 
            text-center lg:text-left pb-7  `}>
                
                <div><img src= {frame4} className= {`h-[26px]`}/></div>
                

                
                <h3 className= 
                {`font-manrope font-bold text-lg
                `}>
                    Moneyback Guarantee
                </h3>
                

                
                <p className= 
                {`font-manrope font-medium text-[13px]
                
                `}>
                    From they fine john he give of rich he.<br/>
                    They age and draw mrs like. 
                    Improving<br/> end distrusts may instantly.
                </p>
                
            </div>

        </div>
            

    </div>

</section>
        
</>

)
}