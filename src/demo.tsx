import { Component } from "@/components/ui/rainbow-matrix-shader";
import { useState } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-black/90 border border-white/10 rounded-xl shadow-2xl p-6 text-white animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function DemoOne() {
  const [activeModal, setActiveModal] = useState<"about" | "projects" | null>(null);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black text-white font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Component />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 pointer-events-auto">
        <img src="/logo.png" alt="Akili Labs Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full pointer-events-none pb-12 pl-6 md:pb-24 md:pl-16">
        <div className="pointer-events-auto text-left space-y-6 md:space-y-8">
          {/* Company Name */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white select-none mb-2">
              akili labs
            </h1>
            <p className="text-base md:text-xl text-gray-300 font-light tracking-wide max-w-md">
              Software studio driven by purpose and creativity.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 md:gap-4 justify-start items-center">
            <button
              onClick={() => setActiveModal("about")}
              className="px-6 py-2 md:px-8 md:py-3 bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium tracking-wide cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => setActiveModal("projects")}
              className="px-6 py-2 md:px-8 md:py-3 bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium tracking-wide cursor-pointer"
            >
              Projects
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={activeModal === "about"}
        onClose={() => setActiveModal(null)}
        title="About Akili Labs"
      >
        <div className="space-y-6">
          <p>
            Founded in early 2025 by two brothers with Kenyan-Asian roots, Akili Labs is a software studio driven by purpose and creativity.
          </p>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="text-white font-semibold mb-1">The Meaning of "Akili"</h3>
            <p className="text-sm text-gray-400">
              Swahili for <span className="text-white italic">mind</span> or <span className="text-white italic">intelligence</span>. It reflects our vision to build thoughtful, impactful tools for the modern world.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Our Focus</h3>
            <ul className="grid grid-cols-3 gap-3">
              {["AI", "Education", "Spirituality"].map((item) => (
                <li key={item} className="bg-white/5 py-2 px-1 rounded border border-white/5 text-center text-sm text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-400 border-l-2 border-white/20 pl-4 italic">
            "We believe technology should be both meaningful and accessible."
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "projects"}
        onClose={() => setActiveModal(null)}
        title="Our Projects"
      >
        <div className="flex items-start gap-4">
          <img src="/asmaulhusna_icon.png" alt="Asma Ul Husna" className="w-16 h-16 rounded-xl shadow-lg" />
          <div>
            <h3 className="font-bold text-lg text-white">Asma Ul Husna - Esmaül Hüsna</h3>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              App that enables users to explore the 99 Names of Allah through detailed meanings, Quranic references, and authentic audio recitations, with support for multiple languages.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500 italic">More projects coming soon...</p>
        </div>
      </Modal>
    </div>
  );
}
