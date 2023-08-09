export default function Intro({ isDark }) {
  return (
    <div className="relative w-full mb-40" id="showcase">
      <img
        src="/images/intro_bg.png"
        className="absolute left-0 right-0 hidden lg:flex bottom-24"
      />
      <img
        src="/images/intro_bar2.png"
        className="absolute left-0 right-0 flex w-full -bottom-14 lg:hidden"
      />
      <div
        className="relative flex flex-col items-center justify-center -mt-4 lg:mt-4" 
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className="flex items-center px-4 py-1 space-x-1 rounded-full"
          style={{
            background: isDark
              ? "rgba(255, 255, 255, 0.17)"
              : "rgba(0, 0, 0, 0.06)",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {isDark ? (
            <img src="/images/icon_check.png" className="object-contain w-4" />
          ) : (
            <img
              src="/images/icon_check_l.png"
              className="object-contain w-4"
            />
          )}
          <div
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            No LLC Required
          </div>
        </div>
        <div
          className={
            "text-4xl lg:text-6xl font-semibold " +
            (isDark ? "text-white heading-title" : "text-text_light") +
            " bg-text mt-5 max-w-2xl w-full text-center sm:px-20 px-4"
          }
        >
          Digital cards that make payments easy
        </div>
        <div
          className={
            (isDark ? "text-text_secondary" : "text-text_secondary_light") +
            " mt-5 text-xs lg:text-lg text-center max-w-lg w-full leading-6 sm:leading-8 xl:leading-11 px-10 lg:px-0"
          }
        >
          Meet the new standard for digital cards. Nexus lets you hold funds,
          pay bills, earn yield, and manage cash flow.
        </div>
        <div
          className="flex items-center justify-center mt-6 mb-1.5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <button
            className={`rounded-full flex items-center space-x-2 px-4 lg:px-7 py-1.5 lg:py-3 border group border-secondary bg-secondary transition-all duration-300 ${
              isDark ? "hover:bg-primary" : "hover:bg-white"
            }`}
          >
            <p
              className={`font-semibold text-white ${
                isDark ? "group-hover:text-white" : "group-hover:text-black"
              } text-white text-sm lg:text-lg whitespace-nowrap`}
            >
              Get Started
            </p>
            <div className={`w-2.5 ${!isDark && "group-hover:hidden"}`}>
              <img src="/images/chevron-right-white.png" className="" />
            </div>
            {!isDark && (
              <div className="w-2.5 hidden group-hover:flex">
                <img src="/images/chevron-right.svg" className=" w-2.5" />
              </div>
            )}
          </button>
        </div>
        <div
          className="relative mt-12 flex justify-center items-center w-[110vw] lg:w-full px-0"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* {isDark ? <img src="/images/container.png" className="h-80 lg:h-auto object-stretch"/> : <img src="/images/container_l.png" className="h-80 lg:h-auto object-stretch"/>}
                <div className="absolute left-0 right-0 flex flex-col w-full">
                    <img src="/images/intro_bar.png" className="mb-11"/>
                    <img src="/images/intro_bar.png" className="mt-11"/>
                </div>
                <img src="/images/intro_card.png" className="absolute z-10 -mt-28 -ml-28 w-96 lg:w-auto"/>
                <img src="/images/intro_card2.png" className="absolute -mr-32 w-72 lg:w-auto"/> */}
          <img src="/images/snippet.png" />
        </div>
      </div>
    </div>
  );
}
