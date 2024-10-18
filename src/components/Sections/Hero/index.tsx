"use client";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg1 from "../../../../public/images/bannar/b4.jpeg"; // Example image
import DealImg2 from "../../../../public/images/bannar/b5.jpeg"; // Another example image
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import BannerHeader from "../Banner/BannerHeader";
import HeroCardRender from "./Hero-Card/HeroCardRender";
import { useTheme } from "next-themes";
import Image from "next/image";
import ElafLogo from "../../../../public/icons/Elaf-logo.svg";


const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  // Content translation
  const t = useTranslations("Hero");
  const heroContent = heroData(t);

  const local = useLocale();
  const { theme, setTheme } = useTheme();

  // Images array for the slider
  const dealImages = [DealImg1, DealImg2];

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden pb-16 pt-[110px] dark:bg-gray-dark md:pb-[20px] md:pt-[50px] xl:pb-[60px] xl:pt-[80px] 2xl:pb-[10px] 2xl:pt-[110px]`}
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className={`grid grid-cols-1 xl:grid-cols-2 lg:gap-[8rem] items-center ${local === "ar" ? "__rtl_lang" : ""}`}
              >
                <div className="CONTENT   order-2 lg:order-1">
                  {heroContent.length >= 1
                    ? heroContent.map((item) => (
                        <div className="" key={item.id}>
                          <h1
                            className={`mb-4 overflow-hidden text-3xl font-bold leading-tight text-black dark:text-white ${
                              local === "ar"
                                ? ""
                                : "text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem]"
                            }`}
                          >
                            {item.title}{" , "}
                            <span className={theme === "dark" ? "text-[#FFD500]" : "text-[#FFD500]"}>
                              <Typewriter
                                words={
                                  local === "ar"
                                    ? ["الجوهر", "الفخامه", "الاناقه"]
                                    : ["Essence", "Luxury", "Sophistication"]
                                }
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                            </span>
                          </h1>

                          <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                            {item.description}
                          </p>
                        </div>
                      ))
                    : "There is no content data"}

                    <div className="">
                      <HeroCardRender />
                    </div>
                </div>

                {/* Swiper Slider for Deal Images */}
                <div className="text-white mb-16  order-1 lg:order-2">
                <Image
                src={ElafLogo}
                alt="logo"
                width={0}
                height={0}
                className="w-full text-white"
              />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
