import "../components/Neon.css";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center relative w-full h-[5rem] md:h-[8rem] bg-gradient-to-b from-[#14002e] to-[#000319] border-t-2 neon-border-top">
      {/* Copyright */}
      <span className="absolute bottom-2 right-1/2 translate-x-1/2 text-center text-[0.9rem] text-white opacity-80">
        © Made By Pudu
      </span>
    </footer>
  );
}
