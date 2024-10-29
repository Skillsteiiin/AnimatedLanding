"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div className=" md:py-12  py-8 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div className="flex gap-14 flex-none pr-14" animate={{
              translateX: '-50%',
            }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              <Image
                src={acmeLogo}
                className="logo-ticker-image"
                alt="acme logo"
              />
              <Image
                src={quantumLogo}
                className="logo-ticker-image"
                alt="quantum logo"
              />
              <Image
                src={echoLogo}
                className="logo-ticker-image"
                alt="echoLogo logo"
              />
              <Image
                src={celestialLogo}
                className="logo-ticker-image"
                alt="celestialLogo logo"
              />
              <Image
                src={pulseLogo}
                className="logo-ticker-image"
                alt="pulseLogo logo"
              />
              <Image
                src={apexLogo}
                className="logo-ticker-image"
                alt="apexLogo logo"
              />

              {/* Второй набор логотипов */}
              <Image
                src={acmeLogo}
                className="logo-ticker-image"
                alt="acme logo"
              />
              <Image
                src={quantumLogo}
                className="logo-ticker-image"
                alt="quantum logo"
              />
              <Image
                src={echoLogo}
                className="logo-ticker-image"
                alt="echoLogo logo"
              />
              <Image
                src={celestialLogo}
                className="logo-ticker-image"
                alt="celestialLogo logo"
              />
              <Image
                src={pulseLogo}
                className="logo-ticker-image"
                alt="pulseLogo logo"
              />
              <Image
                src={apexLogo}
                className="logo-ticker-image"
                alt="apexLogo logo"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
