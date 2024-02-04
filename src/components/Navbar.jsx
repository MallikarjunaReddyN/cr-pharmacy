import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import crlogo from "../assets/images/cr-logo.jpeg"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const menuLinks = [
    { icon: "location", name: "Location", link: "#home" },
    { icon: "logo-whatsapp", name: "9676907047", link: "https://wa.me/9676907047" },
  ];
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
        <div
          className={`sm:mr-[-25px] md:mr-[0px] px-7 py-2`}
        >
          <ul className="flex items-center py-2">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-3 text-white">
                <a href={menu?.link} rel= "noreferrer" target="_blank">
                  <div className="min-w-[2rem] font-bold min-h-[3rem] flex items-center justify-center text-white bg-[#00a69c] px-5 rounded-lg">
                    <ion-icon name={menu.icon}></ion-icon><span className="md:block hidden">&nbsp; {menu.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
