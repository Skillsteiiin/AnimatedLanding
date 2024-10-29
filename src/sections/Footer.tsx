import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
            <Image src={logo} alt="logo" height={40} className="relative" />
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
            <a href="#">О нас</a>
            <a href="#">Особенности</a>
            <a href="#">Клиенты</a>
            <a href="#">Расценка</a>
            <a href="#">Помощь</a>
            <a href="#">Деятельность</a>
          </nav>
          <div className="flex justify-center gap-6 mt-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialYoutube />
          </div>
          <p className="mt-6">© 2024 Your Company, Inc. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
};
