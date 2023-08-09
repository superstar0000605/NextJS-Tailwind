export default function FeaturesGrid({ isDark }) {
  return (
    <div className="mt-5" id="features">
      <div
        className={
          "font-semibold " +
          (isDark ? "text-white heading-title" : "text-text_light") +
          " text-center text-3xl lg:text-5xl px-20 lg:px-0"
        }
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Use Nexus, Earn Rewards
      </div>
      <div 
        className="grid grid-cols-1 px-5 mt-10 lg:grid-cols-2 gap-7 mb-7 xl:px-0 x-auto"
      >
        <div
          className={
            "rounded-3xl border px-7 pb-8 h-96 lg:h-558 " +
            (isDark ? "bg-faq" : "bg-faq_light") +
            " flex flex-col justify-center"
          }
          style={{ borderColor: "rgba(255, 255, 255, 0.17)" }}
          data-aos="fade-right"
          data-aos-duration="2000"
        > 
          <div 
            className="relative flex flex-col items-center justify-center h-64 pt-4 lg:h-96"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {isDark ? (
              <img
                src="/images/bg-1.png"
                className="object-contain w-full h-full pt-4"
              />
            ) : (
              <img
                src="/images/bg-1_l.png"
                className="object-contain w-full h-full pt-4"
              />
            )}
            <div className="absolute h-full">
              <div className="flex flex-col items-center justify-between h-full py-10 lg:py-20">
                <img
                  src={
                    isDark
                      ? "/images/horizontal.png"
                      : "/images/horizontal_l.png"
                  }
                />
                <img
                  src={
                    isDark
                      ? "/images/horizontal.png"
                      : "/images/horizontal_l.png"
                  }
                />
                <img
                  src={
                    isDark
                      ? "/images/horizontal.png"
                      : "/images/horizontal_l.png"
                  }
                />
                <img
                  src={
                    isDark
                      ? "/images/horizontal.png"
                      : "/images/horizontal_l.png"
                  }
                />
              </div>
            </div>
            <div className="absolute w-full">
              <div className="flex items-center justify-between w-full px-5">
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
                <img
                  src={
                    isDark ? "/images/vertical.png" : "/images/vertical_l.png"
                  }
                  className="h-56 w-0.5"
                />
              </div>
            </div>
            <img
              src={isDark ? "/images/price.png" : "/images/price_l.png"}
              className="absolute z-10"
            />
            <div
              className={`absolute ${
                isDark ? "text-white" : "text-faq"
              } text-sm font-bold z-20`}
              style={{ marginLeft: "51%", marginTop: "-20%" }}
            >
              $
            </div>
          </div>
          <div className="flex flex-col px-7">
            <div
              className={
                "font-bold text-2xl lg:text-3xl " +
                (isDark ? "text-white" : "text-text_light") +
                " mb-5"
              }
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Earn with 2% APY
            </div>
            <div
              className={
                "text-xs lg:text-lg " +
                (isDark ? "text-text_primary" : "text-text_secondary_light")
              }
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Meet the new standard for digital cards. Nexus lets you hold
              funds, pay bills, earn yield, and manage cash flow.
            </div>
          </div>
        </div>
        <div
          className={
            "rounded-3xl border px-7 pb-8 h-96 lg:h-558 " +
            (isDark ? "bg-faq" : "bg-faq_light") +
            " flex flex-col justify-center"
          }
          style={{ borderColor: "rgba(255, 255, 255, 0.17)" }}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div 
            className="relative flex flex-col items-center justify-center h-64 pt-4 lg:h-96"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src={`/images/bg-2${isDark ? "" : "_l"}.png`} className="h-[95%]"/>
          </div>
          <div
            className={
              "font-bold text-2xl lg:text-3xl " +
              (isDark ? "text-white" : "text-text_light") +
              " mb-5"
            }
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Up to 1.75% Cashback
          </div>
          <div
            className={
              "text-xs lg:text-lg " +
              (isDark ? "text-text_primary" : "text-text_secondary_light")
            }
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Meet the new standard for digital cards. Nexus lets you hold funds,
            pay bills, earn yield, and manage cash flow.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-5 lg:grid-cols-3 gap-7 xl:px-0">
        <div
          className={
            "rounded-3xl border " +
            (isDark ? "bg-faq" : "bg-faq_light") +
            " h-72 lg:h-80 relative self-center mx-auto w-full"
          }
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            borderColor: "rgba(255, 255, 255, 0.17)",
          }}
        >
          <div
            className={
              "text-2xl lg:text-3xl font-bold " +
              (isDark ? "text-white" : "text-text_light") +
              " pt-5 lg:pt-9 text-center"
            }
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Instant Deposits
          </div>
          <div className="flex items-end justify-center flex-1 h-full pb-10 lg:pb-16">
            <img src={`/images/arrow${isDark ? "" : "_l"}.png`} />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 py-4 rounded-b-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(93, 93, 99, 0.00) 0%, rgba(93, 93, 99, 0.15) 52.51%, rgba(93, 93, 99, 0.00) 100%)",
            }}
          >
            <div
              className={
                (isDark ? "text-text_secondary" : "text-text_secondary_light") +
                " text-center"
              }
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Fund instantly with a debit card
            </div>
          </div>
        </div>
        <div
          className={
            "rounded-3xl border " +
            (isDark ? "bg-faq" : "bg-faq_light") +
            " h-72 lg:h-80 relative self-center mx-auto w-full"
          }
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{
            borderColor: "rgba(255, 255, 255, 0.17)",
          }}
        >
          <div
            className={
              "text-2xl lg:text-3xl font-bold " +
              (isDark ? "text-white" : "text-text_light") +
              " pt-5 lg:pt-9 text-center"
            }
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Track Expenses
          </div>
          <div className="relative flex items-end justify-center flex-1 h-full pb-10 lg:pb-16">
            <img src={`/images/circle_chart${isDark ? "" : "_l"}.png`} />
            <img
              src={`/images/percent${isDark ? "" : "_l"}.png`}
              className="absolute top-32"
            />
            <img
              src={`/images/percent1${isDark ? "" : "_l"}.png`}
              className="absolute -mt-2 top-40"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 py-4 rounded-b-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(93, 93, 99, 0.00) 0%, rgba(93, 93, 99, 0.15) 52.51%, rgba(93, 93, 99, 0.00) 100%)",
            }}
          >
            <div
              className={
                (isDark ? "text-text_secondary" : "text-text_secondary_light") +
                " text-center"
              }
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Fund instantly with a debit card
            </div>
          </div>
        </div>

        <div
          className={
            "rounded-3xl border " +
            (isDark ? "bg-faq" : "bg-faq_light") +
            " h-72 lg:h-80 relative self-center mx-auto w-full"
          }
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            borderColor: "rgba(255, 255, 255, 0.17)",
          }}
        >
          <div
            className={
              "text-2xl lg:text-3xl font-bold " +
              (isDark ? "text-white" : "text-text_light") +
              " pt-5 lg:pt-9 text-center"
            }
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Use 100+ Cards
          </div>
          <div className="flex items-center justify-between pt-10 overflow-hidden">
            <img src="/images/files.png"/>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 py-4 rounded-b-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(93, 93, 99, 0.00) 0%, rgba(93, 93, 99, 0.15) 52.51%, rgba(93, 93, 99, 0.00) 100%)",
            }}
          >
            <div
              className={
                (isDark ? "text-text_secondary" : "text-text_secondary_light") +
                " text-center"
              }
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Fund instantly with a debit card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
