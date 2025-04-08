import Image from "next/image"

import "../css/product.css"


const Product = () => {

  return (
   <>
   <div className="ProductWrapper">

   

<h1 id="trending"> Pick Your Smartphone Brand</h1> 
    
        <div className="productShowcase">


       
          
          <Image className="image" src="/images/vivo.jpg" height={300} width={300} alt="vivo" />
          <Image   className="image" src="/images/apple.jpg"  height={300} width={300}  alt="apple"/>
          <Image  className="image" src="/images/nothing.jpg"  height={300} width={300} alt="nothing" />
          <Image  className="image" src="/images/oneplus.jpg"  height={300} width={300} alt="oneplus" />
        </div>
        </div>
   </>
  )
}

export default Product