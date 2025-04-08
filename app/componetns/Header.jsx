import Link from "next/link"
import "../css/header.css"
const  Header = ()=>{
  return(
    <>
     <div className="navWrapper">

      <h1 >Mobi <span>World</span> </h1>
      <Link  href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/offer">Offers</Link>
      <Link href="/cashback">Flat Cashback</Link>
      <Link href="/login">Log in </Link>
      <Link href="/register">Register</Link>
    
      </div>
    
    
    </>
  )
}

export default Header