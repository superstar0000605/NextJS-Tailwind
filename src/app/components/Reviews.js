"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Reviews({ isDark }) {
  const items = [null, null, null, null, null, null, null, null];
  const sliderCounter = useRef(0);
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handleNextSlider = (sliderIndex) => {
    setIndex(sliderIndex);
    swiper.slideTo(sliderIndex);
    sliderCounter.current = sliderIndex;
  };

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      if(sliderCounter.current < items.length) {
        sliderCounter.current++;
        handleNextSlider(sliderCounter.current)
      } else {
        sliderCounter.current = 0;
        handleNextSlider(sliderCounter.current);
      }
    }, 5000);

    return () => clearInterval(sliderTimer);
  }, [swiper]);

  return (
    <div
      id="reviews"
      className="relative flex flex-col items-center justify-center mt-10"
    >
      <div
        className="flex items-center px-4 py-1 space-x-1 rounded-full"
        style={{
          background: isDark
            ? "rgba(255, 255, 255, 0.17)"
            : "rgba(0, 0, 0, 0.06)",
        }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <img
          src={`/images/users${isDark ? "" : "_l"}.png`}
          className="object-contain w-4"
        />
        <div
          className={`text-sm font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Trusted By 5000+
        </div>
      </div>
      <div
        className={`text-3xl sm:text-4xl font-semibold text-center sm:px-10 ${
          isDark ? "text-white heading-title" : "text-text_light"
        } mt-4`}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Don’t just take it from us
      </div>
      <img src="/images/topo.png" className="absolute -left-20 -top-20" data-aos="zoom-out" data-aos-duration="2000" />
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        onSwiper={setSwiper}
        centeredSlides={true}
        className="w-full mt-10"
        initialSlide={index}
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="swiper-width">
            <div className="flex items-center justify-center w-full">
              <div className="relative w-[90%] sm:w-[500px]">
                <img
                  src={`/images/card${isDark ? "" : "_l"}.png`}
                  className="w-full"
                />
                <img src={`/images/google${isDark ? "" : "_l"}.png`} className="absolute right-6 top-3"/>
                <div className="absolute inset-0 w-full">
                  <div className="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6">
                    <img
                      src={`/images/quote${isDark ? "" : "_l"}.png`}
                      className="w-4 sm:w-auto"
                    />
                  </div>
                  <div
                    className={`${
                      isDark ? "text-white" : "text-text_light"
                    } px-4 sm:px-6 pt-4 sm:pt-8 leading-6 sm:leading-8 text-xs sm:text-base`}
                  >
                    We’ve been using Nexus to help us track business expenses,
                    placeholder text here, and our growth has gone 5x as a
                    result.
                  </div>
                  <div className="flex items-center px-4 pt-4 sm:px-6 sm:pt-8">
                    <img src="/images/user.png" className="w-10 sm:w-auto" />
                    <div className="pl-4">
                      <div
                        className={`text-base sm:text-xl font-bold ${
                          isDark ? "text-white" : "text-text_light"
                        }`}
                      >
                        Jasper Doe
                      </div>
                      <div
                        className="mt-1 text-xs sm:text-base"
                        style={{
                          color: isDark
                            ? "rgba(255, 255, 255, 0.51)"
                            : "rgba(6, 6, 14, 0.51)",
                        }}
                      >
                        Sr. Marketer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center space-x-2 mt-11">
        {items.map((item, i) => (
          <div
            onClick={() => handleNextSlider(i)}
            key={i}
            className={
              "h-4 rounded-full cursor-pointer " +
              (index === i ? "w-12" : "w-9")
            }
            style={{
              transition: "all 0.3s ease",
              background:
                index === i
                  ? isDark
                    ? "#2b2b38"
                    : "#5383FF"
                  : isDark
                  ? "#14141d"
                  : "#ECECED",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
