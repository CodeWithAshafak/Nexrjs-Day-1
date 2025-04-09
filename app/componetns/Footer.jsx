import Link from "next/link"
import "../css/footer.css"


const  Footer = ()=>{
  return(
    <>

    <div className="FooterWrapper">

      
     <div className="about">
      <h1>Mobile World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur eius non ut architecto maxime, quas est incidunt nostrum sequi commodi iure dolores? Quos ipsam quis laudantium veniam architecto quidem?</p>
     </div>
     <div className="service">

      
      <Link href="/return">Return</Link>
      <Link href='/latest' >Latest offers </Link>
      <Link href='/gift' >Gift Cart</Link>
      <Link href='/coming'>Coming soon</Link>
    
      <p>Refund</p>
      <p>our policies</p>
     </div>

     <div className="adderss">
          <p>Office Address :-</p>
         <p>new minal residency bhopal ,MP </p>

     </div>

    </div>
    
    
    </>
  )
}

export default Footer