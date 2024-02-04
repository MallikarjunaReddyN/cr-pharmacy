import tablets from "../assets/images/tablets-with-hand.jpeg";
const Wecare = () => {
    return (
        <section
            id="wecare"
            className="bg-teal-500 md:mt-[-100px]"
        >
            <div className="container flex justify-between flex-1 pb-10 md:flex-row flex-col">
                <div className="md:text-left text-center mt-10 md:mt-[210px] md:ml-[100px]">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-white md:text-5xl text-3xl">
                            We Care About Your Health <br /> And Wellbeing
                        </span>
                    </h1>
                    <h4 className="md:text-xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500 mb-10">
                        The more you care, The Strong you can be.
                    </h4>
                </div>
                <div className="flex-1 flex items-center justify-center h-full md:mt-10">
                    <img src={tablets} alt="" className="md:w-11/12 h-full object-cover" />
                </div>
            </div>

        </section>
    )
}

export default Wecare;