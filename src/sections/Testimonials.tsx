"use client";
import * as React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Как опытный дизайнер всегда находится в поиске инновационных инструментов, Framer.com мгновенно привлекло мое внимание.",
    imageSrc: avatar1.src,
    name: "Александра Ламкова",
    username: "@lamkovaav",
  },
  {
    text: "Производительность нашей команды резко возросла с тех пор, как мы начали использовать этот инструмент.",
    imageSrc: avatar2.src,
    name: "Сергей Кузнецов",
    username: "@sergeyk",
  },
  {
    text: "Это приложение полностью изменило то, как я управляю своими проектами и сроками их выполнения.",
    imageSrc: avatar3.src,
    name: "Алексей Фёдоров",
    username: "@morganleewhiz",
  },
  {
    text: "Я был поражен тем, как быстро мы смогли интегрировать это приложение в наш рабочий процесс.",
    imageSrc: avatar4.src,
    name: "Ольга Смирнова",
    username: "@caseyj",
  },
  {
    text: "Планирование и проведение мероприятий еще никогда не было таким простым. Это приложение помогает мне отслеживать все движущиеся части, гарантируя, что ничто не ускользнет от внимания.",
    imageSrc: avatar5.src,
    name: "Мария Морозова",
    username: "@mariamor",
  },
  {
    text: "Возможности настройки и интеграции этого приложения на высшем уровне.",
    imageSrc: avatar6.src,
    name: "Екатерина Бакальчук",
    username: "@rileysmith1",
  },
  {
    text: "Внедрение этого приложения для нашей команды упростило управление проектами и улучшило коммуникацию по всем направлениям.",
    imageSrc: avatar7.src,
    name: "Виктор Попов",
    username: "@jpatelsdesign",
  },
  {
    text: "С помощью этого приложения мы можем легко назначать задачи, отслеживать прогресс и управлять документами в одном месте.",
    imageSrc: avatar8.src,
    name: "Анастасия Воронина",
    username: "@dawsontechtips",
  },
  {
    text: "Его удобный интерфейс и надежные функции удовлетворяют наши разнообразные потребности.",
    imageSrc: avatar9.src,
    name: "Иван Васильев",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  width={40}
                  height={40}
                  src={imageSrc}
                  alt={name}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-bold tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <>
      <section className="bg-white py-24">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Рекомендации</div>
            </div>
            <h2 className="section-title mt-5">
              Что говорят наши пользователи
            </h2>
            <p className="section-description mt-5">
              Благодаря интуитивно понятному дизайну и мощным функциям наше
              приложение стало незаменимым инструментом для пользователей по
              всему миру.
            </p>
          </div>
          <div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>
    </>
  );
};
