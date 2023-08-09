export default function Comparison ({isDark}) {
  const items = [
      {
          title: 'ATM Withdrawals',
          description: 'Meet the new standard for digital cards. Nexus lets you hold funds, pay bills, earn yield, and manage cash flow.'
      },
      {
          title: 'Monthly Statements',
          description: 'Meet the new standard for digital cards. Nexus lets you hold funds, pay bills, earn yield, and manage cash flow.'
      },
      {
          title: 'Apple & Google Pay',
          description: 'Meet the new standard for digital cards. Nexus lets you hold funds, pay bills, earn yield, and manage cash flow.'
      }
  ]
  return <div className="w-full">
      <img src={`/images/border${isDark ? '': '_l'}.png`} className="w-full mb-2"/>
      <div className="mt-12 grid grid-cols-1 pb-[100px] md:grid-cols-3 gap-y-10 md:gap-y-0 gap-x-5 px-5 md:px-0">
          {items?.map((item, i) => <div className="flex flex-col justify-center items-centerw-" key={i}>
              <div className="flex items-center justify-center space-x-3" data-aos="fade-down" data-aos-duration={`${500+1000*i}`}>
                  <img src={`/images/icon_check${isDark ? '': '_l'}.png`} className="w-4 sm:w-5"/>
                  <div className={`${isDark ? 'text-white': 'text-text_light'} sm:text-lg text-base font-semibold`}>{item.title}</div>
              </div>
              <div 
                  className={`${isDark ? 'text-text_primary': 'text-text_secondary_light'} text-center sm:leading-8 leading-6 mt-4 sm:text-base text-xs`}
                  data-aos="fade-up" data-aos-duration={`${1000+1000*i}`}
              >
                  {item.description}
              </div>
          </div>)}
      </div>
  </div>
}
