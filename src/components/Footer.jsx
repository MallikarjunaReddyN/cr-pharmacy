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
         <div className="flex items-center mr-3 md:mr-10 mt-2">
          <a href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bcb8d7c1f4e21eb:0x30af8f0ae7e5054a?entry=s&sa=X&ved=2ahUKEwiD9MH3t5KEAxUngFYBHT5tDf8Q4kB6BAgREAA&hl=en-GB" rel="noreferrer" target="_blank" className="mr-3">
            <div className="min-w-[3rem] font-bold min-h-[3rem] flex items-center justify-center text-white bg-[#00a69c] px-5 rounded-lg">
              <ion-icon name="location"></ion-icon><span className="hidden md:block" >&nbsp; Location</span>
            </div>
          </a>
          <a href="https://wa.me/9676907047" rel="noreferrer" target="_blank">
            <div className="min-w-[3rem] font-bold min-h-[3rem] flex items-center justify-center text-white bg-[#00a69c] px-5 rounded-lg">
              <ion-icon name="logo-whatsapp"></ion-icon><span className="hidden md:block">&nbsp; 9676907047</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
