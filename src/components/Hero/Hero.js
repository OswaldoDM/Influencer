import { FlexBoxI } from "./FlexBoxI";
import { FlexBoxII } from "./FlexBoxII";



export function Hero() {

return (

<>

<section className= "antialiased bg-gray-100">

    <div className= 
        {`container mx-auto
        flex items-center justify-between 
        px-8 py-16 lg:px-4 xl:px-8 2xl:px-16
        relative
        `}>

        <FlexBoxI />
        <FlexBoxII />            

    </div>
        
</section>        
</>

)
}