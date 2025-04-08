

import Image from "next/image"
import "../css/testimonial.css"

const Testimonial = () => {
  return (
   <>
    <div className="TestmonialWrapeer">
    <h1 id="trending">Testimonials</h1>


   <div className="person1">
    <Image src="/images/t1.jpeg" alt="testi1" height={100} width={100} />
    
   </div>



    </div>
   
   
   </>
  )
}

export default Testimonial