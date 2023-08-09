import { Tilt } from "react-tilt";

export default function CardView({ isDark }) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="relative w-full mb-24 max-w-main sm:mb-56">
      <div
        className="relative flex flex-col items-center justify-center"
        id="pricing"
      >
        <div className="" data-aos="zoom-in" data-aos-duration="2000">
          <div className="flex items-center">
            <img
              src={`/images/card-left${isDark ? "" : "_l"}.png`}
              className="w-1/2 lg:w-auto"
            />
            <img
              src={`/images/card-right${isDark ? "" : "_l"}.png`}
              className="w-1/2 lg:w-auto"
            />
          </div>
        </div>
      <div 
        className="absolute -left-96 top-28 w-[829px] h-[252px] z-30 rounded-[829px] bg-secondary/[0.1] mix-blend-screen blur-[225px] text-white hidden lg:block"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
      </div>
      <div 
        className="absolute -right-96 top-28 w-[829px] h-[252px] z-30 rounded-[829px] bg-secondary/[0.1] mix-blend-screen blur-[225px] text-white hidden lg:block"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
      </div>
        <div className="absolute left-0 right-0 z-20 top-80" data-aos="zoom-in" data-aos-duration="2000">
          <div className="flex justify-between">
            <img
              src={`/images/circle-left${isDark ? "" : "_l"}.png`}
              className="w-1/2 lg:w-32"
            />
            <img
              src={`/images/circle-right${isDark ? "" : "_l"}.png`}
              className="w-1/2 lg:w-32"
            />
          </div>
        </div>
        <div 
          className="absolute z-30 -left-10 -right-10 top-28 sm:top-32 md:top-36 lg:top-56"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <img src={`/images/linear${isDark ? "" : "_l"}.png`} />
        </div>
        <div className="relative z-30 flex flex-col items-center justify-center -mt-16 lg:-mt-28">
          <div
            className={`font-semibold text-center ${
              isDark ? "heading-title text-white" : "text-text_light"
            } text-4xl lg:text-5xl leading-11 sm:leading-70 mt-12 sm:mt-0`}
            data-aos="fade-down" 
            data-aos-duration="1000"
          >
            Nexus is the future. <br />
            Available Now.
          </div>
          <button
            className={`rounded-full flex items-center space-x-2 px-5 lg:px-8 py-2 lg:py-3 group border border-secondary bg-secondary transition-all duration-300 mt-10 ${
              isDark ? "hover:bg-primary" : "hover:bg-white"
            }`}
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.40)" }}
          >
            <p className={`font-semibold text-white whitespace-nowrap text-sm lg:text-lg ${
                  isDark ? "group-hover:text-white" : "group-hover:text-black"
                }`}>
              Get Started for free
            </p>
          </button>
          <div className="relative z-40 mt-16 px-7 sm:px-0" data-aos="zoom-out-up" data-aos-duration="2000">
            <Tilt options={defaultOptions}>
              <img src={`/images/creditcard${isDark ? "" : "_l"}.png`} />
            </Tilt>
          </div>
        </div>
      </div>
      <img
        src={`/images/linear2${isDark ? "" : "_l"}.png`}
        className="absolute bottom-0"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      />
      <img
        src={`/images/circle1.png`}
        className="absolute z-10 sm:z-0 md:-bottom-[300px] -bottom-[200px] lg:-bottom-[480px]"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      />
      <img
        src={`/images/circle2${isDark ? "" : "_l"}.png`}
        className="absolute z-20 h-40 sm:z-10 sm:h-96 -bottom-16 sm:-bottom-16 lg:-bottom-32"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      />
    </div>
  );
}
