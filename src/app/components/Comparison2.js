export default function Comparison2({ isDark }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center mb-12"
      id="comparison"
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
      <div className="absolute left-0 right-0 z-30 top-28 sm:top-32 md:top-36 lg:top-56" data-aos="zoom-in" data-aos-duration="2000">
         <img src={`/images/linear${isDark ? "" : "_l"}.png`} />
      </div>
      <div 
        className="absolute -left-96 top-28 w-[829px] h-[252px] z-30 rounded-[829px] bg-secondary/[0.1] mix-blend-screen blur-[225px] text-white hidden lg:block" 
        data-aos="zoom-in" data-aos-duration="2000">
      </div>
      <div 
        className="absolute -right-96 top-28 w-[829px] h-[252px] z-30 rounded-[829px] bg-secondary/[0.1] mix-blend-screen blur-[225px] text-white hidden lg:block"
        data-aos="zoom-in" dat-aos-duration="2000">
      </div>
      <div className="relative z-30 flex flex-col items-center justify-center -mt-24 lg:-mt-36">
        <div
          className={` font-semibold text-center mt-16 z-50 ${  
            isDark ? "text-white heading-title" : "text-text_light"
          } text-4xl lg:text-5xl`}
          style={{ lineHeight: "normal"}}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          The bank for Gen-Z
          <br />
          entrepreneurs
        </div>
        <img
          src={`/images/rec1${isDark ? "" : "_l"}.png`}
          className="absolute top-0 z-20 hidden lg:flex"
          data-aos="flip-left"
          data-aos-duration="2000"
        />
        <div className="relative z-40 flex items-center justify-center mt-28" data-aos="flip-left" data-aos-duration="2000">
          <img
            src="/images/wave.png"
            className="z-10 mt-4 w-[200vw] object-scratch sm:w-full"
          />
          {/* <div
            className={`absolute ${
              isDark ? "rec-blur" : "rec-blur-l"
            } w-4/5 sm:w-558 h-40 sm:h-56`}
          /> */}
          <div className="absolute w-[90%] sm:w-558 sm:h-56 -mt-[40px]">
            <div className="relative flex items-center justify-center">
              <img src="/images/rec-blur.png" className="z-10 w-full sm:h-full h-60" />
              <div className="absolute sm:-bottom-[140px] -bottom-[65px] flex flex-col justify-center items-center">
                <img
                  src="/images/buttons.png"
                  className="z-10 w-80 sm:w-auto"
                />
                <img
                  src="/images/circle-chart.png"
                  className="z-10 w-56 sm:w-auto -ml-[14%] -mt-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center px-6 mt-20 sm:mt-24 justfity-center" data-aos="flip-left" data-aos-duration="2000">
          <div
            className={`${
              isDark ? "text-white" : "text-text_light"
            } w-auto sm:w-558 text-center font-semibold text-base sm:text-2xl leading-7 sm:leading-10 px-8 sm:px-0`}
           
          >
            In addition to our cashback and APY benefits, our cards offer the
            same functionality as a normal bank.
          </div>
        </div>
      </div>
    </div>
  );
}
