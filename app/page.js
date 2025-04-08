import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componetns/Header";
import Hero from "./componetns/Hero";
import Latest from "./componetns/Latest";

import Aboutus from "./componetns/Aboutus";
import Product from "./componetns/Product";
import Testimonial from "./componetns/Testimonial";

export default function Home() {
  return (
   <>
   
   <Hero/>
  <Latest/>
 
  <Product/>

  <Testimonial/>

  <Aboutus/>
   
   </>
  );
}
