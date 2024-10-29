"use client"
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion"

const pricingTiers = [
  {
    title: "Бесплатно",
    monthlyPrice: 0,
    buttonText: "Начните бесплатно",
    popular: false,
    inverse: false,
    features: [
      "До 5 участников в проекте",
      "Неограниченное количество задач и проектов",
      "Объем хранилища 2GB",
      "Интеграции",
      "Базовая поддержка",
    ],
  },
  {
    title: "Про",
    monthlyPrice: 869,
    buttonText: "Зарегистрируйтесь сейчас",
    popular: true,
    inverse: true,
    features: [
      "До 50 участников в проекте",
      "Неограниченное количество задач и проектов",
      "Объем хранилища 50GB",
      "Интеграции",
      "Приоритетная поддержка",
      "Расширенная поддержка",
      "Поддержка экспорта",
    ],
  },
  {
    title: "Бизнес",
    monthlyPrice: 1836,
    buttonText: "Зарегистрируйтесь сейчас",
    popular: false,
    inverse: false,
    features: [
      "До 100 участников в проекте",
      "Неограниченное количество задач и проектов",
      "Объем хранилища 200GB",
      "Интеграции",
      "Специальный менеджер по работе с клиентами",
      "Настраиваемые поля",
      "Расширенная аналитика",
      "Экспортные возможности",
      "Доступ к API",
      "Расширенные функции безопасности",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Расценка</h2>
            <p className="section-description mt-5">
              Бесплатно навсегда. Обновите приложение, чтобы выполнять
              неограниченное количество задач, повысить безопасность и получить
              эксклюзивные функции.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
              }) => (
                <div
                  className={twMerge(
                    "card",
                    inverse === true && "border-black bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse === true && "text-white"
                      )}
                    >
                      {title}
                    </h3>
                    {popular === true && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                        animate = {{
                          backgroundPositionX: "100%",
                        }}
                        transition = {{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-bold">
                          Самый популярный
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ₽{monthlyPrice}
                    </span>
                    <span className="tracking-tight font-bold text-black/50">
                      /в месяц
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <li className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
