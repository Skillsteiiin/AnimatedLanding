import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="hidden md:block text-white/60">
            Оптимизируйте свой рабочий процесс и повысьте производительность
          </p>
          <div className="inline-flex gap-1 items-center">
            <p>Начать бесплатно</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="Logo" height={40} width={40} />
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-6 md:ml-3 text-black/60 items-center justify-between">
                <a href="#">О нас</a>
                <a href="#">Особенности</a>
                <a href="#">Покупатели</a>
                <a href="#">Обновления</a>
                <a href="#">Помощь</a>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-center justify-center tracking-tight">
                  Попробовать бесплатно
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
