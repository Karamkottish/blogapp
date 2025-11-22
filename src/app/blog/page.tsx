"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import MediumIcon from "@/components/MediumIcon";
import ThreadsOutline from "@/components/ThreadsOutline";

export default function BlogPage() {
  return (
    <>
      {/* PAW BACKGROUND */}
      <div className="paw-animated-bg">
        <div className="paw-rain-layer"></div>
        <div className="paw-parallax-layer"></div>
        <div className="paw-sparkles-layer"></div>
      </div>

      <div className="relative max-w-5xl mx-auto py-12 px-5 pb-32 z-10">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-center text-[#C47A3C] mb-8">
          Blogs
        </h1>

        {/* SOCIAL MEDIA BAR */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-[#C47A3C]">

          <a href="https://www.facebook.com/profile.php?id=61580543411211" target="_blank">
            <Facebook size={30} className="hover:scale-110 transition" />
          </a>

          <a href="https://x.com/pawspalconnect" target="_blank">
            <Twitter size={30} className="hover:scale-110 transition" />
          </a>

          <a href="https://www.instagram.com/pawspalconnect/" target="_blank">
            <Instagram size={30} className="hover:scale-110 transition" />
          </a>

          <a href="https://www.youtube.com/@pawspalconnect" target="_blank">
            <Youtube size={30} className="hover:scale-110 transition" />
          </a>

          <a href="https://www.linkedin.com/groups/15158025/" target="_blank">
            <Linkedin size={30} className="hover:scale-110 transition" />
          </a>

          <a href="https://www.threads.com/@pawspalconnect" target="_blank">
            <ThreadsOutline size={32} />
          </a>

          <a href="https://t.me/+q5s-aIdErvQyMWQ9" target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 240 240"
              fill="#C47A3C"
              className="hover:scale-110 transition"
            >
              <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.4 79.9l-19.8 93.7c-1.5 6.8-5.5 8.5-11.1 5.3l-30.7-22.6-14.8 14.3c-1.6 1.6-3 3-6.1 3l2.2-31.1 56.6-51c2.5-2.2-.6-3.4-3.8-1.2l-69.9 44-30.1-9.4c-6.5-2-6.7-6.5 1.4-9.6l117.3-45.2c5.4-2 10.2 1.3 8.5 9.1z"/>
            </svg>
          </a>

        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BLOG 1 */}
          <BlogCard
            title="First-Time Dog Owner? The Guide You Wish You Read Earlier"
            description="A beginner-friendly roadmap covering routines, behaviour, training, bonding, feeding, mistakes, and emergency care — everything new dog parents MUST know."
            image="/blog1.png"
            mediumLink="https://medium.com/@pawspalconnect/first-time-dog-owner-the-complete-guide-you-wish-you-read-earlier-f67eca01d45d"
            keywords={[
              "first time dog owner",
              "puppy care india",
              "dog training tips",
              "dog behaviour guide",
              "new dog parent checklist",
            ]}
          />

          {/* BLOG 2 */}
          <BlogCard
            title="How to Keep Your Dog Healthy at Home — The Smart Way"
            description="A modern pet wellness guide showing how Paws Pal Connect keeps dogs healthy, active, and mentally stimulated at home using expert insights and personalized routines."
            image="/blog2.png"
            mediumLink="https://medium.com/@pawspalconnect/how-to-keep-your-dog-healthy-smart-ways-with-paws-pal-connect-44e46f9a21b8"
            keywords={[
              "dog health at home",
              "smart pet care",
              "PawsPalConnect wellness",
              "indoor dog activities",
              "ai pet care india",
            ]}
          />

          {/* BLOG 3 — NEW */}
          <BlogCard
            title="Top 5 Pet Service Providers in Bangalore — Why Paws Pal Connect Leads the Pack"
            description="A powerful comparison of Bangalore’s leading pet service brands — grooming, vets, daycare, clinics — and why Paws Pal Connect stands out as India’s only verified, expert-backed pet ecosystem."
            image="/blog3.png"
            mediumLink="https://medium.com/@pawspalconnect/top-5-pet-service-providers-in-bangalore-why-paws-pal-connect-leads-the-pack-66632fb215eb"
            keywords={[
              "bangalore pet services",
              "best groomers bangalore",
              "verified pet professionals india",
              "paws pal connect reviews",
              "pet care bangalore",
            ]}
          />

          {/* BLOG 4 (placeholder) */}
          <BlogCard
            title="Understanding Your Dog's Behavior"
            description="Learn what your dog is trying to communicate through body language."
            image="/blog4.jpg"
            mediumLink="https://medium.com/@pawspalconnect"
          />

        </div>

      </div>

      <BottomNav />
    </>
  );
}


/* BLOG CARD COMPONENT */
function BlogCard({
  title,
  description,
  image,
  mediumLink,
  keywords = [],
}: {
  title: string;
  description: string;
  image: string;
  mediumLink: string;
  keywords?: string[];
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div
      className={`
        faq-animate ${visible ? "visible" : ""}
        bg-[#2a1a11]/40 backdrop-blur-md rounded-xl overflow-hidden
        border border-[#b87333]
        hover:shadow-lg hover:shadow-[#c47a3c]/30 transition-all
      `}
    >
      {/* IMAGE */}
      <div className="h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* BODY */}
      <div className="p-5">
        <h3 className="text-2xl text-[#FFB477] font-bold mb-2">{title}</h3>

        <p className="text-gray-300 mb-4">{description}</p>

        {/* MEDIUM ICON IN CIRCLE */}
        <a href={mediumLink} target="_blank" className="flex items-center">
          <div
            className="
              w-10 h-10 rounded-full border border-[#C47A3C]
              flex items-center justify-center
              hover:bg-[#C47A3C]/20 transition
            "
          >
            <MediumIcon size={20} />
          </div>
        </a>

        {/* SEO KEYWORDS (hidden) */}
        <div className="hidden">
          {keywords.map((k, i) => (
            <span key={i}>{k}, </span>
          ))}
        </div>
      </div>
    </div>
  );
}
