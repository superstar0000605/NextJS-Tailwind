export default function Footer({ isDark }) {
  const items = [
    {
      id: 0,
      name: "Product",
      items: [
        { id: 0, name: "Showcase" },
        { id: 1, name: "Features" },
        { id: 2, name: "Comparison" },
        { id: 3, name: "Reviews" },
        { id: 4, name: "Pricing" },
      ],
    },
    {
      id: 1,
      name: "Company",
      items: [
        { id: 0, name: "Showcase" },
        { id: 1, name: "Features" },
        { id: 2, name: "Comparison" },
        { id: 3, name: "Reviews" },
        { id: 4, name: "Pricing" },
      ],
    },
    {
      id: 2,
      name: "Account",
      items: [
        { id: 0, name: "Showcase" },
        { id: 1, name: "Features" },
        { id: 2, name: "Comparison" },
        { id: 3, name: "Reviews" },
        { id: 4, name: "Pricing" },
      ],
    },
    {
      id: 3,
      name: "Learn",
      items: [
        { id: 0, name: "Showcase" },
        { id: 1, name: "Features" },
        { id: 2, name: "Comparison" },
        { id: 3, name: "Reviews" },
      ],
    },
  ];
  return (
    <div className="mx-6 mt-20 mb-10 text-xs lg:text-sm lg:mx-2">
      <div
        className={
          "border-t " +
          (isDark ? "bg-white" : "bg-border_light") +
          " w-full h-0.5 mb-5 lg:mb-10 mt-5"
        }
        style={{ opacity: 0.27 }}
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
      <div className="flex flex-col items-start justify-between px-4 space-x-0 lg:flex-row lg:space-x-2 lg:px-0" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex items-center justify-between flex-1 w-full lg:w-40">
          <img
            src={`/images/logo${isDark ? "" : "_l"}.svg`}
            className="object-contain h-10"
          />
          <a className="cursor-pointer lg:hidden">
            <img src={`/images/icon_menu${isDark ? "" : "_l"}.png`} />
          </a>
        </div>
        <div className="flex justify-between w-full space-x-3 lg:space-x-12 lg:w-auto mt-9 lg:mt-2">
          {items.map((item, i) => (
            <div className="flex flex-col w-auto space-y-4 lg:w-28" key={i}>
              <a
                className={`${
                  isDark ? "text-white" : "text-faq"
                } font-semibold`}
              >
                {item.name}
              </a>
              {item.items.map((subItem, i) => (
                <a
                  key={i}
                  className={`${
                    isDark ? "text-text_primary" : "text-text_secondary_light"
                  } font-medium hover:text-secondary transition duration-300 cursor-pointer`}
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="items-center justify-end flex-1 hidden lg:flex space-x-7">
          <a className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <p className="font-semibold text-secondary whitespace-nowrap hover:underline">
              Sign In
            </p>
            <img src={`/images/chevron-right${isDark ? "" : "-l"}.png`} />
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
        </div>
        <div className="flex items-center justify-between w-full mt-10 lg:hidden">
          <div
            className={`${
              isDark ? "text-text_primary" : "text-text_secondary_light"
            }`}
          >
            © Copyright Nexus 2023
          </div>
          <a
            className={`${
              isDark ? "text-text_primary" : "text-text_secondary_light"
            } cursor-pointer text-right hover:text-secondary`}
          >
            Terms and Conditions
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mt-9 lg:mt-20 lg:px-0" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex items-center flex-1 space-x-5">
          <a
            className="cursor-pointer"
            href="https://discord.gg/x4kjyFwWk3"
            target="_blank"
          >
            <img
              src={`/images/icon_discord${isDark ? "" : "_l"}.png`}
              className="object-contain w-5 lg:w-auto"
            />
          </a>
          <a className="cursor-pointer">
            <img
              src={`/images/icon_twitter${isDark ? "" : "_l"}.png`}
              className="object-contain w-5 lg:w-auto"
            />
          </a>
        </div>
        <div
          className={`${
            isDark ? "text-text_primary" : "text-text_secondary_light"
          } hidden lg:flex`}
        >
          © Copyright Nexus 2023
        </div>
        <div className="justify-end flex-1 hidden lg:flex">
          <a
            className={`${
              isDark ? "text-text_primary" : "text-text_secondary_light"
            } cursor-pointer text-right hover:text-secondary`}
          >
            Terms and Conditions
          </a>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-5 lg:hidden lg:space-x-7">
          <a className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <p className="font-semibold text-secondary whitespace-nowrap hover:underline">
              Sign In
            </p>
            <img src={`/images/chevron-right${isDark ? "" : "-l"}.png`} />
          </a>
          <button
            className={`rounded-full flex lg:hidden group items-center space-x-2 px-4 py-1.5 border group border-secondary bg-secondary transition-all duration-300 ${
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
        </div>
      </div>
    </div>
  );
}
