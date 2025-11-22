"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import { faqCategories } from "./faqData";
import * as Icons from "lucide-react";

// =====================================
// SAFE ICON MAP (NO TS ERRORS)
// =====================================
const IconMap = {
  PawPrint: Icons.PawPrint,
  Dog: Icons.Dog,
  Stethoscope: Icons.Stethoscope,
  GraduationCap: Icons.GraduationCap,
  HelpCircle: Icons.HelpCircle,
} as const;

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    items: category.items.filter((faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <>
      {/* ===================================================== */}
      {/*  ANIMATED PAW BACKGROUND (GLOBAL)                    */}
      {/* ===================================================== */}
      <div className="paw-animated-bg">
        <div className="paw-rain-layer"></div>
        <div className="paw-parallax-layer"></div>
        <div className="paw-sparkles-layer"></div>
      </div>

      {/* ===================================================== */}
      {/*  FAQ CONTENT                                          */}
      {/* ===================================================== */}
      <div className="relative max-w-4xl mx-auto py-12 px-5 pb-24 z-10">
        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold text-center text-[#C47A3C] mb-10">
          FAQs
        </h1>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search questions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full mb-6 p-3 rounded-xl bg-[#2a1a11]/40 
            text-white border border-[#b87333]
            placeholder-gray-400 focus:outline-none
          "
        />

        {/* CATEGORY FILTERS */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === "All"
                ? "bg-[#C47A3C] text-white border-[#C47A3C]"
                : "border-[#b87333] text-gray-300"
            }`}
          >
            All
          </button>

          {faqCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border ${
                selectedCategory === category.title
                  ? "bg-[#C47A3C] text-white border-[#C47A3C]"
                  : "border-[#b87333] text-gray-300"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        {filteredCategories.map((category) => {
          if (selectedCategory !== "All" && selectedCategory !== category.title)
            return null;

          const Icon = IconMap[category.icon] ?? Icons.HelpCircle;

          return (
            <div key={category.title} className="mb-10">
              {/* CATEGORY TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <Icon size={26} className="text-[#C47A3C]" />
                <h2 className="text-2xl font-semibold text-white">
                  {category.title}
                </h2>
              </div>

              {/* FAQ ITEMS */}
              <div className="space-y-4">
                {category.items.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <BackToTopButton />
      <BottomNav />
    </>
  );
}

/* ============================================================
   FAQ CARD COMPONENT
   ============================================================ */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <div
      className={`
        faq-animate ${visible ? "visible" : ""}
        border border-[#b87333] rounded-xl p-5 
        bg-[#2a1a11]/30 backdrop-blur-md 
        transition-all hover:shadow-lg hover:shadow-[#b87333]/30 faq-item
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className="text-[#C47A3C] text-2xl">{open ? "−" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

/* ============================================================
   BACK-TO-TOP BUTTON
   ============================================================ */
function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      🐾
    </div>
  );
}
