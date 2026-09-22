import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SituationNavigator from "@/components/SituationNavigator";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const JSON_LD={"@context":"https://schema.org","@type":"LocalBusiness",name:"OpleverMeester",url:"https://www.oplevermeester.nl",telephone:"+31645316851",email:"info@oplevermeester.nl",areaServed:["Groningen","Friesland","Drenthe"],priceRange:"€532,40+ incl. btw"};

export default function HomePage(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(JSON_LD)}}/><Header/><main><Hero/><SituationNavigator/><Trust/><Process/><Reviews/><Pricing/><Contact/><FAQ/></main><Footer/></>}
