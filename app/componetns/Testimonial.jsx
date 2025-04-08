

import Image from "next/image"
import "../css/testimonial.css"

const Testimonial = () => {
  return (
   <>
    <div className="TestmonialWrapeer">


    <h1 id="testHeading" >Testimonials  </h1>



     <div className="personWrapper">

    
   <div className="person">
    <Image className="image"  src="/images/t1.jpeg" alt="testi1" height={300} width={300} style={{borderRadius:"50%"}} />
    <h4>Rashmi Malhotra</h4>
    <h5>Review</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sapiente hic eos, nemo asperiores voluptatem laudantium odio impedit, possimus in officia placeat fugiat! Dignissimos repellendus minus ipsa mollitia reprehenderit optio.
    </p>
   </div>


   <div className="person">
    <Image className="image"  src="/images/t2.jpeg" alt="testi1" height={300} width={300} style={{borderRadius:"50%"}}  />
    <h4>Rashmi Malhotra</h4>
    <h5>Review</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sapiente hic eos, nemo asperiores voluptatem laudantium odio impedit, possimus in officia placeat fugiat! Dignissimos repellendus minus ipsa mollitia reprehenderit optio.
    </p>
   </div>



   <div className="person">
    <Image className="image" src="/images/t3.jpeg" alt="testi3" height={300} width={300} style={{borderRadius:"50%"}}  />
    <h4>Rashmi Malhotra</h4>
    <h5>Review</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sapiente hic eos, nemo asperiores voluptatem laudantium odio impedit, possimus in officia placeat fugiat! Dignissimos repellendus minus ipsa mollitia reprehenderit optio.
    </p>
   </div>




   <div className="person">
    <Image  className="image"  src="/images/t4.jpeg" alt="testi4" height={300} width={300} style={{borderRadius:"50%"}}   />
    <h4>Rashmi Malhotra</h4>
    <h5>Review</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sapiente hic eos, nemo asperiores voluptatem laudantium odio impedit, possimus in officia placeat fugiat! Dignissimos repellendus minus ipsa mollitia reprehenderit optio.
    </p>
   </div>


   </div>

    </div>
   
   
   </>
  )
}

export default Testimonial