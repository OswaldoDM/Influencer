import sVector from '../assets/SVector.png'
import image1 from '../assets/Image1.png'



export function Services1 () {

return(

<>
<section className="bg-white antialiased">

    <div className= 
    {`container mx-auto
    flex flex-col items-center justify-between
    px-8 py-10 
    sm:pt-10 sm:pl-16 sm:flex-row
    md:pr-0 md:pl-10 
    lg:pl-8 lg:pb-0
    xl:px-8 xl:pt-14 xl:pb-6 2xl:px-16    
    `}>
        <div className= 
        {`sm:w-[50%] md:w-[70%] lg:w-[60%] 
        xl:w-[45%] 2xl:w-[45%]        
        `}>

            <h1 className= 
            {`text-[40px] lg:text-[45px] 2xl:text-[60px] 
            leading-10 lg:leading-[1.20] 
            font-extrabold font-manrope 
            
            `}>

            Get thousands<br/>of active followers

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
            h-16 md:h-auto 
            `}/>

        </div>

        <div>

            <img src= {image1} className="xl:ml-5"/>

        </div>

    </div>
    
</section>       
</>

)
}