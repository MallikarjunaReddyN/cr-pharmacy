const Footer = () => {
  const menuLinks = [
    { icon: "location", name: "Location", link: "#home" },
    { icon: "logo-whatsapp", name: "9676907047", link: "https://wa.me/9676907047" },
  ];
  return (
    <div className="bg-teal-400">
      <div className="flex items-center justify-between lg:flex-row flex-col px-20">
        <div className="text-sm p-4 text-center text-white">
          Copyright © 2024 Chandu Reddy N. All Rights reserved.
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
    </div>
  );
};

export default Footer;
