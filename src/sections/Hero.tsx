"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <>
      <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[500px]">
              <div className="tag">
                Версия 2.0 уже здесь
              </div>
              <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 leading-[50px] sm:leading-[80px]">
                Путь к продуктивности
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Радуйтесь достижениям с помощью приложения, предназначенного для
                отслеживания вашего прогресса, мотивации ваших усилий и
                празднования ваших успехов.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <button className="btn btn-primary">Получить бесплатно</button>
                <button className="btn btn-text gap-1">
                  <span>Узнать больше</span>
                  <ArrowIcon className="h5- w-5" />
                </button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <motion.img
                src={cogImage.src}
                alt="cog image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 3,
                  ease: 'easeInOut'
                }}
              />
              <motion.img
                src={cylinderImage.src}
                width={220}
                height={220}
                alt="cylinder Image"
                className="hidden md:block -top-8 -left-32 md:absolute"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={noodleImage.src}
                alt="noodle image"
                width={220}
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                style={{
                  rotate: 30,
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
