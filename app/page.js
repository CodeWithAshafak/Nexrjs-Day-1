import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componetns/Header";
import Hero from "./componetns/Hero";
import Latest from "./componetns/Latest";

import Aboutus from "./componetns/Aboutus";
import Product from "./componetns/Product";
import Testimonial from "./componetns/Testimonial";
import Contactus from "./componetns/Contactus";
import Latestnews from "./componetns/Latestnews";
import Resorses from "./componetns/Resorses";

export default function Home() {
  return (
   <>
   
   <Hero/>
  <Latest/>
 
  <Product/>
  

  <Testimonial/>
  <Latestnews/>
 
  <Resorses/>

  <Aboutus/>

  <Contactus/>
   
   </>
  );
}
