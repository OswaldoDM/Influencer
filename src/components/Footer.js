

export function Footer() {

return(

<>

<section className="antialiased bg-[#1B1C31]">

    <div className= 
    {`container mx-auto 
    md:px-8 pt-10 pb-16 
    flex flex-col md:flex-row 
    gap-16 md:gap-0
    `}>

        <div className="flex-1 text-center md:text-start">

            <h2 className= 
            {`text-3xl font-bold
            md:pb-[2px] lg:pb-0 text-gray-100
            `}> Influencer
            </h2>

            <p className= 
            {`mt-5 px-16 md:pl-0 md:pr-10 lg:px-0 
            font-medium text-base md:text-sm xl:text-base text-gray-500  
            font-manrope                 
            `}>

            Yet bed any for travelling assistance indulgence unpleasing.<br/> 
            Not thoughts all exercise blessing. 
            Indulgence way everything<br className="hidden lg:block"/>
            joy alteration boisterous the attachment.

            </p>

        </div>

        <div className= 
        {`flex-1 flex justify-around 
        md:justify-between lg:justify-around 
        text-gray-300 font-manrope
        `}>

            <div className="flex flex-col gap-3 ">

                <h2 className="font-semibold text-lg mb-2">Company</h2>
                <p className="text-sm">About Us</p>
                <p className="text-sm">Careers</p>
                <p className="text-sm">Blog</p>
                <p className="text-sm">Pricing</p>

            </div>

            <div className="flex flex-col gap-3 ">

                <h2 className="font-semibold text-lg mb-2">Product</h2>
                <p className="text-sm">Facebook Followers</p>
                <p className="text-sm">Instagram Followers</p>
                <p className="text-sm">Twitter Followers</p>
                <p className="text-sm">Tik Tok Followers</p>

            </div>

            <div className="flex flex-col items-center gap-3">

                <h2 className="font-semibold text-lg ">Contact</h2>

                <a 
                href="https://api.whatsapp.com/send/?phone=4244181500&text&type=phone_number&app_absent=0" 
                target= "_blank">

                    <i className ="fa-brands fa-whatsapp text-xl"></i>
                </a>                

                <a 
                href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" 
                target= "_blank" >
                    
                    <i className ="fa-brands fa-linkedin text-xl"></i>
                </a>

                <a 
                href="mailto:oswaldoe1992@gmail.com" 
                target= "_blank" >
                    
                    <i className ="fa-solid fa-square-envelope text-xl"></i>
                </a>

            </div>

        </div> 

    </div>

</section>
        
</>

)
}
    

