"use client";
import { useState } from "react";
export default function FAQ({ isDark }) {
  const [selectedIndex, setIndex] = useState(0);
  const faqs = [
    {
      id: 0,
      title: "First question should go here, lorem ipsum dis?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      id: 1,
      title: "Second question should go here, lorem ipsum dis?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      id: 2,
      title: "Third question should go here, lorem ipsum dis?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      id: 3,
      title: "Fourth question should go here, lorem ipsum dis?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
  ];

  const handleClick = (i) => {
    if (selectedIndex === i) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  };
  return (
    <div className="max-w-4xl z-10 mx-auto mb-[130px]">
      <div
        className={`${
          isDark ? "text-white heading-title" : "text-faq"
        } font-semibold text-4xl mb-8 text-center`}
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </div>
      <div className="px-6 mb-10 space-y-4" data-aos="flip-right" data-aos-duration="2000">
        {faqs.map((faq, i) => (
          <div className="relative" key={i}>
            <button
              onClick={() => handleClick(i)}
              className={`flex justify-between items-center w-full rounded-full ${
                isDark
                  ? "bg-faq hover:bg-[#1F202B]"
                  : "bg-faq_light hover:bg-[#14141D1F]"
              } relative h-11 sm:h-16 cursor-pointer transition-all duration-500`}
              key={i}
            >
              <div
                className={`absolute  ${
                  isDark
                    ? "bg-faq hover:bg-[#1F202B]"
                    : "bg-faq_light hover:bg-[#14141D1F]"
                } inset-0 rounded-full z-10 pt-1 sm:pt-0 transition-all duration-300`}
                style={{ border: "1px solid rgba(255, 255, 255, 0.42)" }}
              >
                <div className="px-4 sm:px-8 h-full flex items-center justify-between -mt-0.5 sm:mt-0">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <img
                      src={`/images/icon_help${isDark ? "" : "_l"}.png`}
                      className="w-3 sm:w-auto"
                    />
                    <div
                      className="text-xs font-normal sm:text-lg sm:font-medium whitespace-nowrap "
                      style={{
                        color: isDark
                          ? "rgba(255, 255, 255, 0.8)"
                          : "rgba(20, 20, 29, 0.80)",
                      }}
                    >
                      {faq.title}
                    </div>
                  </div>
                  <img
                    src={`/images/chevron_bottom${isDark ? "" : "_l"}.png`}
                    className="w-2 sm:w-auto"
                  />
                </div>
              </div>
            </button>
            <div
              className={
                "-mt-8 sm:-mt-12 w-full overflow-hidden" +
                " " +
                (selectedIndex === i
                  ? "max-h-24 sm:max-h-40"
                  : "max-h-10 sm:max-h-14")
              }
              style={{ transition: "all 0.3s ease-in" }}
            >
              <div className="w-full pt-12 pb-4 pl-4 pr-4 sm:pl-9 sm:pr-12 sm:pt-20">
                <img
                  src={`/images/faq_rec${isDark ? "" : "_l"}.png`}
                  className={
                    "absolute inset-0 w-full -z-1 mt-4" +
                    " " +
                    (selectedIndex === i
                      ? "h-28 sm:h-40"
                      : "h-0 overflow-hidden")
                  }
                />
                <div
                  className={
                    "border-l pl-3 sm:pl-7 text-xs sm:text-lg font-thin"
                  }
                  style={{
                    color: isDark
                      ? "rgba(255, 255, 255, 0.57)"
                      : "rgba(20, 20, 29, 0.57)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(20, 20, 29, 0.15)",
                  }}
                >
                  {faq.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
