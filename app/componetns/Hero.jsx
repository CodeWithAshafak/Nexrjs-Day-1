import Image from "next/image";
import "../css/hero.css"
const  Hero = ()=>{
  return(
    <>
     <div className="HeroWrapper">
      
         <Image src="/images/m1.jpg" fill alt="herosection" />

     </div>

    </>
  )
}

export default Hero