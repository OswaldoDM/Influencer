import { FlexBoxI } from "./FlexBoxI";
import { FlexBoxII } from "./FlexBoxII";



export function Hero() {

return (

<>

<section className= "antialiased bg-gray-100">

    <div className= 
        {`container mx-auto
        flex items-center justify-between 
        px-8 pt-4 pb-8 sm:pt-3 sm:pb-8 md:py-16 lg:px-8 xl:px-8 2xl:px-16
        relative
        `}>

        <FlexBoxI />
        <FlexBoxII />            

    </div>
        
</section>        
</>

)
}