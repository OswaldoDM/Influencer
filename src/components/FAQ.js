import {FaArrowRight} from "react-icons/fa";

export function FAQ() {

return(

<>
<section className= "bg-gray-100 antialiased">

    <div className= 
    {`container mx-auto
    flex flex-col lg:flex-row
    items-center justify-between
    px-8 py-10 md:px-10 
    lg:px-4 lg:py-48 xl:px-8    
    `}>

        <div className=
        {`flex-1 flex flex-col items-center 
        lg:items-start text-center lg:text-start
        `}>

            <h1 className= 
            {`text-[40px] lg:text-[45px] 2xl:text-[67px] 
            leading-tight lg:leading-[1.20] 
            font-extrabold font-manrope
            pb-10 lg:pb-0 
            `}>
                Any questions?<br/>We got you.

            </h1>

            <p className= 
            {`mt-10 mb-14
            font-medium text-base lg:text-sm 
            xl:text-base font-manrope
            hidden lg:block            
            `}>

            Yet bed any for travelling assistance indulgence unpleasing.<br/> 
            Not thoughts all exercise blessing. 
            Indulgence way everything<br/> joy alteration boisterous the attachment.

            </p>

            <a href="#" className= 
            {`lg:flex items-center gap-2 
            text-myPurple hover:text-indigo-
            hidden
            `}>

                <h3 className=
                {`font-manrope text-sm font-bold                
                `}>
                    More FAQs

                </h3>

                <div className="text-[9px]"><FaArrowRight/></div>
            </a>
        </div>

        <div className="flex-1">

            <div className="flow-root">

                <div className="divide-y divide-gray-400">

                    <details className="group py-8" open>

                        <summary className=
                        {`flex cursor-pointer items-center 
                        justify-between font-manrope
                        `}>

                            <h2 className="text-lg font-bold ">
                            How this works?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            </span>
                        </summary>

                        <p className= 
                        {`mt-4 leading-relaxed
                        font-normal text-sm lg:text-sm 
                        xl:text-base font-manrope
                        `}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                            veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                            nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                            corporis earum similique!
                        </p>
                    </details>

                    <details className="group py-4">

                        <summary className=
                        {`flex cursor-pointer items-center 
                        justify-between font-manrope
                        `}>

                                <h2 className="text-lg font-bold">
                                Are there any additional fee?
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                </span>
                        </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                                veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                                nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                                corporis earum similique!
                            </p>
                    </details>

                    <details className="group py-4">

                        <summary className=
                        {`flex cursor-pointer items-center 
                        justify-between font-manrope
                        `}>

                                <h2 className="text-lg font-bold">
                                How can I get the app?
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                </span>
                        </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                                veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                                nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                                corporis earum similique!
                            </p>
                    </details>

                    <details className="group py-4">

                        <summary className=
                        {`flex cursor-pointer items-center 
                        justify-between font-manrope
                        `}>

                                <h2 className="text-lg font-bold">
                                What features do you offer?
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                </span>
                        </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                                veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                                nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                                corporis earum similique!
                            </p>
                    </details>
                </div>
                
            </div>
        </div>     
            
    </div>
    
</section>


        
</>
)
}
