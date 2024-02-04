import AnchorLink from "react-anchor-link-smooth-scroll";
import tablets from "../assets/images/tablets-with-hands-2.jpeg";
import discount from "../assets/images/cr-discount.jpeg";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex md:flex-row flex-col md:mt-[170px]"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={tablets} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-[#00a69c] md:text-6xl text-4xl">
              Protect your health <br /> and take care of <br />your health &nbsp;<span><ion-icon name="pulse-outline"></ion-icon></span>
              <br />
            </span>
          </h1>
          <h4 className="md:text-xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
          Medicines may cure, but only pharmacists can care.
          </h4>
          <AnchorLink href="#"><button className="btn-primary mt-8">Location</button></AnchorLink>
        </div>
      </div>
      <div className="absolute shadow-xl bottom-[-55px] md:bottom-10 md:left-[400px]">
      <img src={discount} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Home;
