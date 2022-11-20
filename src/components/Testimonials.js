import ellipseT from '../assets/EllipseT.png'
import q from '../assets/quotation.png'
import stars from '../assets/Stars.png'
import sa4 from '../assets/SA4.jpg'
import sa7 from '../assets/SA7.jpg'
import sa1 from '../assets/SA1.jpg'




export function Testimonials() {


return(

<>
<section className="bg-gray-100 antialiased">

    <div className=
    {`container mx-auto flex
    flex-col items-center justify-center 
    gap-5
    px-8 py-24 lg:py-0 lg:pb-10
    `}>

        <h3 className=
        {`font-manrope text-lg font-bold
        text-myPurple
        `}
        >Testimonials

        </h3>

        <h1 className=
        {`text-[40px] lg:text-[45px] 2xl:text-[60px]
        leading-10 lg:leading-[1.20] text-center
        font-extrabold font-manrope mb-10 lg:mb-5
        `}>
            What Our Happy<br/> Users Say
        </h1>

        <div className=
        {`flex flex-col lg:flex-row 
        items-center lg:justify-center gap-24 
        `}>

            <div className=
            {`flex flex-col items-center 
            text-center lg:text-start lg:items-start
            `}>

                <img src={ellipseT}/>
                <img src={q} className= "relative bottom-9 lg:left-4"/>
                <img src={stars} className= "mb-5"/> 

                <p className="mb-5 px-10 sm:px-14 md:px-28 lg:px-0">
                Cum soluta nobis est eligendi optio cumque nihil 
                impedit quo minus id quod maxime placeat facere possimus.
                </p>

                <div>

                    <div className=
                    {`flex-row gap-4 flex 
                    justify-center items-center
                    `}>

                        <div className="flex-shrink-0">
                            <div className="block relative">

                                <img alt="customer" src={sa4}
                                className= 
                                {`object-cover rounded-full 
                                h-10 w-10
                                `}/>

                            </div>
                        </div>

                        <div className=" flex flex-col">
                            <span className= 
                            {`text-gray-600 dark:text-white 
                            text-base font-medium
                            `}>
                                Charlie
                            </span>
                            <span className="text-gray-400 text-xs">
                                CTO
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <div className=
            {`flex flex-col items-center 
            text-center lg:text-start lg:items-start 
            `}>

                <img src={ellipseT}/>
                <img src={q} className= "relative bottom-9 lg:left-4"/>
                <img src={stars} className= "mb-5"/>  

                <p className="mb-5 px-10 sm:px-14 md:px-28 lg:px-0">
                Cum soluta nobis est eligendi optio cumque nihil 
                impedit quo minus id quod maxime placeat facere possimus.
                </p>

                <div>

                    <div className=
                    {`flex-row gap-4 flex 
                    justify-center items-center
                    `}>

                        <div className="flex-shrink-0">
                            <div className="block relative">

                                <img alt="customer" src={sa7}
                                className= 
                                {`object-cover rounded-full 
                                h-10 w-10
                                `}/>

                            </div>
                        </div>

                        <div className=" flex flex-col">
                            <span className= 
                            {`text-gray-600 dark:text-white 
                            text-base font-medium
                            `}>
                                David
                            </span>
                            <span className="text-gray-400 text-xs">
                                Programmer
                            </span>
                        </div>

                    </div>

                </div>                 

                
            </div>

            <div className=
            {`flex flex-col items-center 
            text-center lg:text-left lg:items-start
            `}>

                <img src={ellipseT}/>
                <img src={q} className= "relative bottom-9 lg:left-4"/>
                <img src={stars} className= "mb-5"/> 

                <p className="mb-5 px-10 sm:px-14 md:px-28 lg:px-0">
                Cum soluta nobis est eligendi optio cumque nihil 
                impedit quo minus id quod maxime placeat facere possimus.
                </p>

                
                <div>

                    <div className=
                    {`flex-row gap-4 flex 
                    justify-center items-center
                    `}> 

                        <div className="flex-shrink-0">
                            <div className="block relative">

                                <img alt="customer" src={sa1}
                                className= 
                                {`object-cover rounded-full 
                                h-10 w-10
                                `}/>

                            </div>
                        </div>

                        <div className=" flex flex-col">
                            <span className= 
                            {`text-gray-600 dark:text-white 
                            text-base font-medium
                            `}>
                                Ana
                            </span>
                            <span className="text-gray-400 text-xs">
                                Designer
                            </span>
                        </div>                        
                        
                    </div>
                </div>
                
            </div>

        </div>        
        
    </div>
</section>


</>

)
}
                

                


