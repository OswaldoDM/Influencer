import { useState } from "react"
import { MdOutlineCancel} from "react-icons/md";
import { BiMenuAltRight} from "react-icons/bi";

export function NavBar() {

    const [open, setOpen] = useState(false)

return(
<>
<nav className="bg-gray-100 antialiased">

    <div className= 
    {`container mx-auto h-24
    flex justify-between items-center
    px-4 sm:px-2 md:px-3 xl:px-8 2xl:px-16
    `}>     
          
        <h2 className= 
        {`text-3xl md:text-xl lg:text-3xl font-bold
        md:pb-[2px] lg:pb-0
        `}> Influencer
        </h2>
      

      <div className= 
      {`hidden md:flex items-center md:gap-5 lg:gap-7 
      text-sm lg:text-base font-semibold
      `}>

        <a href="#" className= "flex items-center gap-1 dropdown" >

            <p className= 
            {`cursor-pointer transition duration-300 
            hover:text-myPurple  
            `}>Product
            </p>

            <i className= 
            {`uil uil-angle-down 
            cursor-pointer text-lg
            `}>

            </i>

            <div className="dropdown-content">
                <a href="#" className="">Link 1</a>
                <a href="#" className="">Link 2</a>
                <a href="#" className="">Link 3</a>
            </div>

        </a>
    
        <a href="#" className= "flex items-center gap-1 dropdown">

            <p className= 
                {`cursor-pointer transition duration-300 
                hover:text-myPurple
                `}>Packages
            </p>

            <i className= 
            {`uil uil-angle-down 
            cursor-pointer text-lg
            `}>

            </i>

            <div className="dropdown-content">
                <a href="#" className="">Link 1</a>
                <a href="#" className="">Link 2</a>
                <a href="#" className="">Link 3</a>
            </div>

            
        </a>
        
        <a href="#" className= 
        {`hover:text-myPurple cursor-pointer 
        transition duration-300
        `}>
            Features
        </a>
        
        <a href="#" className= 
        {`hover:text-myPurple cursor-pointer 
        transition duration-300
        `}>
            Testimonials
        </a>
          

    </div>

      <div className= 
      {`hidden md:flex items-center gap-8 md:gap-9 lg:gap-8
      text-sm font-semibold
      py-5`}>

          <a href="#" className="cursor-pointer">Sign In</a>

          <a href="#" className= 
          {`bg-myPurple
          text-gray-100 
          py-3 px-9 md:px-7 lg:py-3 lg:px-9
          cursor-pointer
          hover:bg-indigo-700 transition duration-300`}>
              Start Free
          </a>

      </div>

      <div className="md:hidden">

          <button onClick={() => setOpen(!open)} 
          className= {`text-myPurple p-2 `} >            
                          
              {open ? 

              <MdOutlineCancel className="h-8 w-8"/>

              :

              <BiMenuAltRight className="h-8 w-8"/>            

              }              

          </button>          

      </div>     
              
    
    </div>

    {open ? 

        <div className= 
        {`md:hidden flex justify-between items-center     
        text-lg font-semibold h-[50px] transition-css
        px-12 sm:px-24 
        `}>            

            <a className="hover:text-myPurple focus:text-myPurple" href="/#">
                    Product
            </a>
                
            <a className="hover:text-myPurple focus:text-myPurple" href="/#">
                    Packages
            </a>

            <a className="hover:text-myPurple focus:text-myPurple" href="/#">
                    Features
            </a>

            <a className="hover:text-myPurple focus:text-myPurple" href="/#">
                    Testimonials
            </a>
            
        </div>

        :

        <div className= "h-0 transition-css"></div>

        
        }      
      
</nav>

</>
)
}





