import Image from "next/image";

import "../css/latest.css"

const Latest = ()=>{
  return(
    <>

    <h1 id="trending">Trending Mobile</h1>
     <div className="mainWrapper">


      <div className="image">
        <Image src="/images/iphone.jpg"  width={400} height={400} alt="iphone"/>

      </div>
      <div className="content">

        <h3>
        iPhone 16 Pro 128 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium
        </h3>

        <h4>Price :₹1,12,900</h4>

        <h1 id="features">About This Item </h1>

        <ul id="ul">
          <li>STUNNING TITANIUM DESIGN — iPhone 16 Pro has a strong and light titanium design with a larger 15.93 cm (6.3″) Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.</li> 

          <li>PHOTOGRAPHIC STYLES — The latest-generation Photographic Styles give you greater creative flexibility, so you can make every photo even more you. And thanks to advances in the image pipeline, you can now reverse any style, any time.</li> 
        </ul>

      </div>
     </div>

  


    </>
  )
}

export default Latest 