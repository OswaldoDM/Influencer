import sVector from '../assets/SVector.png'
import image4 from '../assets/Image4.png'

export function Services2() {

return(
    
<>
<section className="bg-white antialiased">

    <div className= 
    {`container mx-auto
    flex flex-col sm:flex-row items-center justify-between sm:gap-10
    px-8 sm:pr-10 md:pr-5 lg:pr-8 lg:pl-0 xl:pr-10 2xl:pr-32 2xl:pb-20
    `}>

        <div className= {`order-2 sm:order-1`}>
            <img src= {image4} className= {``}/>
            
        </div>

        
        <div className= {`order-1 sm:order-2`}>

                <h1 className= 
                {`text-[40px] lg:text-[45px] 2xl:text-[60px] 
                leading-10 lg:leading-[1.20] 
                font-extrabold font-manrope
                
                `}>

                Daily active users<br/>on social media

                </h1>

                <p className= 
                {`mt-5 mb-14
                font-medium text-base lg:text-sm 
                xl:text-base font-manrope
                `}>

                Yet bed any for travelling assistance indulgence unpleasing.<br/> 
                Not thoughts all exercise blessing. 
                Indulgence way everything<br/> joy alteration boisterous the attachment.

                </p>

                <a href="#" className= 
                {`bg-myPurple
                text-gray-100 
                py-3 px-9 md:px-7 lg:py-3 lg:px-12
                cursor-pointer
                hover:bg-indigo-700 transition duration-300`}>

                Start Free

                </a>

                <img src= {sVector} className=
                {`relative bottom-16 left-48 
                sm:left-40 sm:bottom-20
                md:bottom-16 md:left-40
                lg:left-48
                h-16 md:h-auto 
                `}/>

        </div>
        

    </div>

</section>
</>

)
}