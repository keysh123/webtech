// import React from "react";
// import playStore from "../../../Images/playstore.png";
// import appStore from "../../../Images/Appstore.png";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="leftFooter">
//         <h4>DOWNLOAD OUR APP</h4>
//         <p>Download App for Android and IOS mobile phone</p>
//         <img src={playStore} alt="playstore" />
//         <img src={appStore} alt="Appstore" />
//       </div>

//       <div className="midFooter">
//         <h2>Green Global Aggrovation</h2>
//         <p>High Quality is our first priority</p>

//         <p>Copyrights 2021 &copy; Green Global Aggrovation</p>
//       </div>

//       <div className="rightFooter">
//         <h4>Follow Us</h4>
//         <a href="http://instagram.com/meabhisingh">Instagram</a>
//         <a href="http://youtube.com/6packprogramemr">Youtube</a>
//         <a href="http://instagram.com/meabhisingh">Facebook</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import playStore from "../../../Images/playstore.png";
import appStore from "../../../Images/Appstore.png";
import {BsWhatsapp} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {IoLogoGooglePlaystore} from "react-icons/io5"
import {BsApple} from "react-icons/bs"
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="leftFooter">
        <h4>Get it on</h4>
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        <div className="iconss">
        <BsApple/>
       
      </div>
      <div className="iconss">
      <IoLogoGooglePlaystore />
      </div>
     
      </div>

      <div className="midFooter">
        <h2>Shopee</h2>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Shopee</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="#"><BsWhatsapp/></a>
        <a href=""><BsInstagram/></a>
        <a href="#"><FaFacebookF/></a>
      </div>

      <div className="boiling-effect"></div>
    </footer>
  );
};

export default Footer;
