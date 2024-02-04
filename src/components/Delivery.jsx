import AnchorLink from "react-anchor-link-smooth-scroll";
import delivery from "../assets/images/delivery-agent.svg";
const Delivery = () => {
    return (
        <section
            id="delivery"
            className="flex md:flex-row flex-col mt-[100px] mb-[100px]"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={delivery} alt="" className="md:w-[50%] h-[50%]" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center mt-[100px]">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-[#00a69c] md:text-6xl text-4xl">
                            Medicine at Your Door, <br />Free Delivery Every Time &nbsp;<span><ion-icon name="bicycle-outline"></ion-icon></span>
                            <br />
                        </span>
                    </h1>
                    <h4 className="md:text-xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
                        Medicine to You, Anytime, Anywhere
                    </h4>
                    <AnchorLink href="#contact"><button className="btn-primary mt-8">9676907047</button></AnchorLink>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
