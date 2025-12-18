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
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Component />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20 pointer-events-auto">
        <img src="/logo.png" alt="Akili Labs Logo" className="w-12 h-12 object-contain brightness-0 invert" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full pointer-events-none pb-16 pl-8 md:pb-24 md:pl-16">
        <div className="pointer-events-auto text-left space-y-8">
          {/* Company Name */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white select-none">
            akili labs
          </h1>

          {/* Buttons */}
          <div className="flex flex-row gap-4 justify-start items-center">
            <button
              onClick={() => setActiveModal("about")}
              className="px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium tracking-wide cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => setActiveModal("projects")}
              className="px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium tracking-wide cursor-pointer"
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
        <p className="mb-4">
          Founded in early 2025 by two brothers with Kenyan-Asian roots, Akili Labs is a software studio driven by purpose and creativity. “Akili”—Swahili for mind or intelligence—reflects our vision: to build thoughtful, impactful tools for the modern world.
        </p>
        <p>
          We craft digital products across diverse niches, including AI, education, and spirituality, always with the goal of empowering the everyday consumer. At Akili Labs, we believe technology should be both meaningful and accessible.
        </p>
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
      </Modal>
    </div>
  );
}
