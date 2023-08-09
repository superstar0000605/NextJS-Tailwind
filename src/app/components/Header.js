"use client";
import React, { useEffect } from "react";
import Switch from "react-switch";

import AOS from "aos";

export default function Header({ toggleDarkMode, darkSide, isDark, setNav }) {
  const navs = ["Showcase", "Features", "Comparison", "Reviews", "Pricing"];

  return (
    <div className="relative flex items-center justify-center w-full mb-20">
      <div
        className="absolute z-30 hidden cursor-pointer xl:flex right-5"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Switch
          onChange={toggleDarkMode}
          checked={darkSide}
          offColor={"#e2e2e7"}
          onColor={"#23232e"}
          offHandleColor="#5686fb"
          onHandleColor="#5686fb"
          height={20}
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
        />
      </div>
      {isDark ? (
        <img
          src="/images/circle3.png"
          className="absolute top-0 z-0 hidden xl:flex"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      ) : (
        <img
          src="/images/circle3_l.png"
          className="absolute top-0 z-0 hidden xl:flex"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      )}
      <div
        className="w-full max-w-main px-9 xl:px-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="relative flex items-center justify-between w-full py-4 border-b-0 xl:border-b"
          style={{
            borderBottomColor: isDark ? "rgba(255, 255, 255, 0.27)" : "#ddd",
          }}
        >
          {isDark ? (
            <img
              src="/images/bar.png"
              className="inset-0 hidden w-full h-full xl:absolute"
            />
          ) : (
            <img
              src="/images/bar_l.png"
              className="inset-0 z-10 hidden w-full h-full xl:absolute"
              style={{ background: "#eff2f9" }}
            />
          )}
          <div
            className="flex flex-1"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <img
              src={`/images/logo${isDark ? "" : "_l"}.svg`}
              className="object-contain h-10"
            />
          </div>
          <div
            className="items-center hidden xl:flex space-x-7"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {navs.map((nav, i) => (
              <a
                onClick={() => setNav(nav?.toLowerCase())}
                key={i}
                className={`text-sm font-semibold ${
                  isDark ? "text-white" : "text-text_light"
                } cursor-pointer group`}
              >
                {nav}
                <div
                  className={`h-0.5 ${
                    isDark ? "bg-white" : "bg-text_light"
                  } group-hover:opacity-100 opacity-0 transition-all duration-300`}
                />
              </a>
            ))}
          </div>
          <div
            className="flex items-center justify-end flex-1 space-x-7"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <a className="items-center hidden space-x-2 cursor-pointer md:flex hover:opacity-80">
              <p className="font-semibold transition-all duration-300 text-secondary whitespace-nowrap hover:underline">
                Sign In
              </p>
              {isDark ? (
                <img src="/images/chevron-right.png" />
              ) : (
                <img src="/images/chevron-right-l.png" />
              )}
            </a>
            <button
              className={`rounded-full hidden md:flex group items-center space-x-2 px-4 py-1.5 border group border-secondary bg-secondary transition-all duration-300 ${
                isDark ? "hover:bg-primary" : "hover:bg-white"
              }`}
            >
              <p
                className={`font-semibold text-white ${
                  isDark ? "group-hover:text-white" : "group-hover:text-black"
                } text-white whitespace-nowrap`}
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
            <div className="flex xl:hidden">
              <Switch
                onChange={toggleDarkMode}
                checked={darkSide}
                offColor={"#e2e2e7"}
                onColor={"#23232e"}
                offHandleColor="#5686fb"
                onHandleColor="#5686fb"
                height={20}
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
              />
            </div>
            {/* {isDark ? (
              <img
                src="/images/icon_menu.png"
                className="flex cursor-pointer xl:hidden"
              />
            ) : (
              <img
                src="/images/icon_menu_l.png"
                className="flex cursor-pointer xl:hidden"
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
