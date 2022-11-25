import woman from './../../assets/woman.png'
import video from './../../assets/video.png'
import playIcon from './../../assets/playIcon.png'
import blackA from './../../assets/blackA.png'
import guy from './../../assets/guy.png'
import ellipse from './../../assets/Ellipse.png'
import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {BiUpArrow} from "react-icons/bi";


export function FlexBoxII() {     
    
return (
    
<>    
    <div className= 
    {`h-[466px] w-[160px] 
    relative
    hidden lg:flex lg:flex-col
    pt-2 
    `}>
        <img src= {video}></img>
        <img src= {playIcon} className= "absolute top-10 left-16"></img>
    
        <h3 className= 
        {`text-[11px] font-extrabold 
        font-manrope leading-4 mt-2        
        `}>How to gain more followers on youtube?
        </h3>
    
        <div className= "bg-myLightGray h-3 w-[55px] mt-2"></div>
    
        <div className= "bg-myLightSky h-8 w-[100%] mt-6"></div>
    
        <div className= 
        {`flex lg:flex row lg:justify-center xl:flex-col gap-3 items-end 
        mt-5 
        lg:text-xl xl:text-lg text-myPurple
        `}>
            <a href='#'><FaLinkedinIn/></a>
            <a href='#'><FaFacebookF/></a>
            <a href='#'><FaTelegram/></a>
            <a href='#'><FaTwitter/></a>
        </div>
    
        <img src= {ellipse} className = 
        {`relative lg:top-32 xl:top-7 xl:left-14`}/>
    
    </div>
    
    <div className= 
    {`w-[40%] h-[466px] 
    hidden lg:flex justify-center
    relative 
    `}>
        <div className= 
        {`h-[366px] w-[320px]
        bg-myLightSky
            ml-6                
        `}>
            <img src= {woman} className = 
            {`relative bottom-10 right-4 w-[300px]`}>                    
            </img>
    
        </div>
    
        <div className= 
        {`h-[80px] w-[80px] 
        bg-myOrange 
        absolute top-[362px] lg:right-[242px] xl:right-[288px]
        2xl:right-[348px]
        `}>

        </div>
                
        <div className= 
        {`h-[40px] w-[40px] 
        bg-myLightBlue 
        absolute top-[323px] lg:right-[320px] xl:right-[366px]
        2xl:right-[425px]
        `}>

        </div>
    
        <img src= {blackA} className= 
        {`absolute top-24 xl:right-[380px]
        2xl:right-[430px]
        hidden xl:block
        `}></img>
    
        <div className= 
        {`flex justify-center items-center gap-3 
        absolute bottom-36 right-10
        lg:right-3 xl:right-10
        bg-gray-100 
        py-2 px-3 
        rounded-sm `}>
    
        <div><img src= {guy} className="rounded-full"></img></div>
    
            <div>
                <h3 className= "font-semibold">Followers Gain</h3>
                <p className= "text-[10px] text-slate-400 font-semibold ">
                    From last 7 days
                </p>
            </div>
    
            <div>
                <div className=
                {`flex items-center gap-1 
                py-2 px-2 
                bg-myLightSky 
                text-xs text-myLightGreen font-extrabold`}>
                    <BiUpArrow/>21.4%
                </div>
            </div>
    
        </div>            
    
    </div>
    
    <div className= 
        {`h-[20px] w-[20px] 
        bg-myOrange hidden lg:block 
        absolute top-[43px] lg:right-[70px] xl:right-[112px]
        2xl:right-[185px] 2xl:top-[45px]`}>

    </div>
    
        <div className= 
        {`h-[20px] w-[20px] 
        bg-black hidden lg:block
        absolute top-[63px] lg:right-[50px] xl:right-[92px]
        2xl:right-[165px] 2xl:top-[65px]`}>

    </div>
    
        <div className= 
        {`h-[30px] w-[31px] 
        bg-myLightGreen hidden lg:block
        absolute top-[35px] lg:right-[20px] xl:right-[60px]
        2xl:right-[140px]`}>

    </div>
    
</>
    
)
}  
                
    
      
