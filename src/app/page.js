"use client";
import { useState, useEffect } from "react";
import CardView from "./components/CardView";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Comparison2 from "./components/Comparison2";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import Intro from "./components/Intro";
import { useRouter } from "next/navigation";
import AOS from "aos";

export default function Home() {
  const router = useRouter();
  const [colorTheme, setTheme] = useState(null);
  const [darkSide, setDarkSide] = useState(false);
  const [nav, setNav] = useState(null);
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setTheme(theme);
    setDarkSide(theme === "light");
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", colorTheme);
  }, [colorTheme]);
  const toggleDarkMode = (checked) => {
    setTheme(checked ? "light" : "dark");
    setDarkSide(checked);
  };
  const isDark = colorTheme === "light";
  console.log(isDark, "isDark");
  useEffect(() => {
    setTimeout(() => {
      const item = window.location.href?.split("#")?.[1];
      if (item) setNav(item);
    }, 1000);
  }, []);
  useEffect(() => {
    if (nav) {
      const element = document.getElementById(nav);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [nav]);
  const onSelectNav = (item) => {
    setNav(item);
    router.push("/#" + item);
    console.log(router, " router");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`flex flex-1 flex-col w-screen overflow-x-hidden h-fit ${
        !isDark ? "bg-white" : "bg-primary"
      } items-center`}
    >
      <Header
        toggleDarkMode={toggleDarkMode}
        darkSide={darkSide}
        isDark={isDark}
        setNav={onSelectNav}
      />
      <Intro isDark={isDark} />
      <div className="w-full max-w-main">
        <FeaturesGrid isDark={isDark} />
        <Comparison2 isDark={isDark} />
        <Comparison isDark={isDark} />
      </div>
      <div className="w-full">
        <Reviews isDark={isDark} />
      </div>
      <div className="flex items-center justify-center w-full">
        <CardView isDark={isDark} />
      </div>
      <div className="w-full max-w-main">
        <FAQ isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
