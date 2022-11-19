import { useState } from "react"



export function CallToAction() {

    const [inputValue, setInputValue] = useState('')
    const [message, setMessage] = useState('')

    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleChange = (e) => setInputValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailRegex.test(inputValue)
        ?  setMessage('Subscribed ✓')
        :  setMessage('Invalid Email Address')
        
        inputValue === '' && setMessage('')
    }      

        
    

return(

<>

<section className= 
{`antialiased bg-CTA-pattern bg-cover 
h-auto relative before:block
before:h-[100%] before:w-[100%]
before:absolute before:bg-myTpurple
`}>    

    <div className= 
    {`container mx-auto py-36 px-8 
    md:px-16 lg:px-40 xl:px-8 
    relative flex items-center 
    justify-center
    `}>

        <div className= 
        {`bg-myPurple flex-1 
        flex flex-col justify-center 
        px-10 py-14 gap-5 rounded-xl
        `}>

            <h3 className="text-gray-100">JOIN WITH OUR COMMUNITY</h3>

            <h1 className= 
            {`font-manrope text-gray-100 font-extrabold 
            text-3xl sm:text-4xl
            `}>
                Set your social media<br/>growth on autopilot
            </h1>

            <form className="rounded-lg " onSubmit={handleSubmit}>

                <input
                value={inputValue} 
                onChange={handleChange}
                placeholder="Your Email Address" type= "email"
                className= 
                {`bg-[#a29ce8ba] placeholder:text-gray-800
                p-3 sm:p-4 text-xs sm:text-sm 
                font-manrope rounded-l-lg w-[70%]
                focus:outline-none
                `}>

                </input>

                <button className= 
                {`text-gray-100 font-manrope  
                p-3 sm:py-4 sm:px-6 text-xs sm:text-sm
                bg-myOrange rounded-r-lg
                hover:bg-orange-400 transition duration-300
                `}>
                    Subscribe

                </button>

                <p className= 
                
                // {` ${emailRegex.test(inputValue) 

                // ? 
                // `font-manrope mt-5 bg-green-500
                //  rounded-lg py-2 text-gray-100 
                //  text-center w-[30%] block `

                // : 
                // `font-manrope mt-5 bg-red-500
                //  rounded-lg py-2 text-gray-100 
                //  text-center w-[30%] block `

                // }
                
                // ${inputValue === '' && "bg-transparent"}
                
                // ` }
                
                
                { `font-manrope mt-5 text-gray-100 `}          
                
                >

                {message}

                </p>

            </form>

        </div> 

        <div className="xl:flex-1"></div>

    </div>

</section>
        
</>

)
}
   
