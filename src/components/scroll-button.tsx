import { useRef } from "react";
import { TiArrowUp } from "react-icons/ti";

export default function ScrollTopButton() {
  let btnRef = useRef<HTMLButtonElement>(null);

  window.onscroll = function () {
    if (btnRef.current) {
      if (window.scrollY > 400) {
        btnRef.current.style.bottom = "24px";
      } else {
        btnRef.current.style.bottom = "-60px";
      }
    }
  };

  function handleScrollTop() {
    scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Scroll top"
      className="fixed flex -bottom-16 transition-bottom duration-300 right-6 z-10 h-12 w-12 items-center justify-center rounded-3xl bg-orange-400 hover:bg-orange-300"
      ref={btnRef}
      onClick={handleScrollTop}
    >
      <i className="flex">
        <TiArrowUp size={24} />
      </i>
    </button>
  );
}
