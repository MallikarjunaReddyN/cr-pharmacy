import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import crlogo from "../assets/images/cr-logo.jpeg"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {

      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60  text-gray-900" : "text-black"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7 flex justify-between">
          <AnchorLink href="#home"><img src={crlogo} alt="" className="md:w-[50px] h-[50px] object-cover" /></AnchorLink>
          <p className="text-[#00a69c] text-3xl font-bold mt-2 md:block hidden">CR Pharmacy</p>
        </div>
        <div className="flex items-center mr-3 md:mr-10 mt-2">
          <a href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bcb8d7c1f4e21eb:0x30af8f0ae7e5054a?entry=s&sa=X&ved=2ahUKEwiD9MH3t5KEAxUngFYBHT5tDf8Q4kB6BAgREAA&hl=en-GB" rel="noreferrer" target="_blank" className="hidden md:block mr-3">
            <div className="min-w-[2rem] font-bold min-h-[3rem] flex items-center justify-center text-white bg-[#00a69c] px-5 rounded-lg">
              <ion-icon name="location"></ion-icon><span className="md:block hidden">&nbsp; Location</span>
            </div>
          </a>
          <a href="https://wa.me/9676907047" rel="noreferrer" target="_blank">
            <div className="min-w-[2rem] font-bold min-h-[3rem] flex items-center justify-center text-white bg-[#00a69c] px-5 rounded-lg">
              <ion-icon name="logo-whatsapp"></ion-icon><span>&nbsp; 9676907047</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
