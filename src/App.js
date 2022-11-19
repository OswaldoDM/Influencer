import { CallToAction } from "./components/CallToAction";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar";
import { Services1 } from "./components/Services1";
import { Services2 } from "./components/Services2";
import { Sponsors } from "./components/Sponsors";
import { Testimonials } from "./components/Testimonials";


function App() {


return (

<>

<NavBar />

<Hero />
<Sponsors />
<Features />
<Services1 />
<Services2 />
<Testimonials />
<FAQ />
<CallToAction />
<CTA />
<Footer />


</>
  );
}

export default App;
