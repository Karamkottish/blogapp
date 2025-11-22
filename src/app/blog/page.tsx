"use client";

import { useState } from "react";
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

type BlogType = "medium" | "facebook";
type FilterType = "all" | BlogType;

interface BlogItem {
  title: string;
  description: string;
  image: string;
  link: string;
  type: BlogType;
  keywords?: string[]; 
}

export default function BlogPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const blogs: BlogItem[] = [
    {
      title: "First-Time Dog Owner? The Guide You Wish You Read Earlier",
      description:
        "A beginner-friendly roadmap covering routines, behaviour, training, bonding, feeding, mistakes, and emergency care.",
      image: "/blog1.png",
      link:
        "https://medium.com/@pawspalconnect/first-time-dog-owner-the-complete-guide-you-wish-you-read-earlier-f67eca01d45d",
      type: "medium",
    },
    {
      title: "How to Keep Your Dog Healthy at Home — The Smart Way",
      description:
        "How Paws Pal Connect keeps dogs healthy, active, and mentally stimulated using expert-backed routines.",
      image: "/blog2.png",
      link:
        "https://medium.com/@pawspalconnect/how-to-keep-your-dog-healthy-smart-ways-with-paws-pal-connect-44e46f9a21b8",
      type: "medium",
    },
    {
      title:
        "Top 5 Pet Service Providers in Bangalore — Why Paws Pal Connect Leads the Pack",
      description:
        "A comparison of Bangalore’s top pet services — vets, groomers, daycare — and why PPC leads India’s pet ecosystem.",
      image: "/blog3.png",
      link:
        "https://medium.com/@pawspalconnect/top-5-pet-service-providers-in-bangalore-why-paws-pal-connect-leads-the-pack-66632fb215eb",
      type: "medium",
    },
    {
      title:
        "Pet Parenting Tips & Guide for First-Time Dog Owners (2025 Edition)",
      description:
        "A complete pet parenting guide — training, feeding, behaviour signals, emergencies, grooming, socialization.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*igm_FRQ3ZR9yH6kwxyzw4g.png",
      link:
        "https://medium.com/@pawspalconnect/pet-parenting-tips-guide-for-first-time-dog-owners-2025-edition-88c91a05516e",
      type: "medium",
    },
    {
      title:
        "What Is the Best Dog Breed for First-Time Owners? (2025 Ultimate Guide)",
      description:
        "Beginner-friendly breeds — Labs, Goldens, Beagles, Indies, Shih Tzus — temperament & lifestyle fit.",
      image: "/blog5.png",
      link:
        "https://medium.com/@pawspalconnect/what-is-the-best-dog-breed-for-first-time-owners-2025-ultimate-guide-fc4e600c9f5b",
      type: "medium",
    },
    {
      title: "Dog Breed Selector Quiz — Find Your Perfect Match",
      description:
        "A 12-question dog breed quiz to match your lifestyle with the ideal beginner-friendly dog breed.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KntQGyPRV1CUkpKpf6uyew.png",
      link:
        "https://medium.com/@pawspalconnect/dog-breed-selector-quiz-find-the-perfect-dog-for-first-time-owners-xyz",
      type: "medium",
    },

    /* FACEBOOK BLOGS BELOW */

    {
      title:
        "🚀 Bangalore Pet Care Providers — Join India’s Trusted SuperApp Marketplace!",
      description:
        "Bangalore pet professionals — join Paws Pal Connect and grow your business smartly!",
      image:
        "https://scontent.fruh4-4.fna.fbcdn.net/v/t39.30808-6/587111246_122113955121018113_8606258640544459270_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GjmyBMwBDn4Q7kNvwGXvz5_&_nc_oc=AdlackbSSDrlFfwjIWsjFu2paKLRxgwrRChHJzsJAQQ4CDbt6ZpaVMkTeFfrVD8lukuKbs1KTSh3VJ_fD-yEoyxb&_nc_zt=23&_nc_ht=scontent.fruh4-4.fna&_nc_gid=7WzGpPCVeb5TJHoQ0Rotmw&oh=00_AfjaMnHFP7bPi95c6P_g-ddjNqJT4BuFRd7GmqTpBzHJHA&oe=69277AC6",
      link: "https://www.facebook.com/share/p/1CxkRVaYVp/",
      type: "facebook",
    },

    {
      title: "Your Cat Just Booked a Pawdicure — The Future of Pet Luxury 😼💅",
      description:
        "Cats are now booking pawdicures, whisker trims and fur masks — smart pets use smart tech with PawsPalConnect.",
      image:
        "https://scontent.fruh4-2.fna.fbcdn.net/v/t39.30808-6/587033401_122113740309018113_7887496610532955199_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YjupAVjACh4Q7kNvwEwjh_K&_nc_oc=AdmmD12qL8lV3RAvH5ObecsQA6cA6a2BnW2TPjYPPxsKBcMx0Z7Lc_HBKkO-z9Un1Yj_TqhPQrdjDo37Okk0G1uU&_nc_zt=23&_nc_ht=scontent.fruh4-2.fna&_nc_gid=vIHqCVlAG_98lA1ei4NMuA&oh=00_Afhx12KtEASVhGPrBykP_HtI6mF6vu7WnH99I2cLJg7-lQ&oe=692761B0",
      link: "https://www.facebook.com/share/p/1GWAAJ5jb2/",
      type: "facebook",
    },

    /* ✅ BLOG 9 — NEW DOG PARENT */
    {
      title: "New Dog Parent? 🐾 Don’t Make These 5 Mistakes!",
      description:
        "Feeding mistakes, training delays, socialization gaps and health oversights — avoid common new parent errors.",
      image:
        "https://scontent.fruh4-3.fna.fbcdn.net/v/t39.30808-6/584457723_122113558035018113_6851610784182394189_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iT9S2A0CQmIQ7kNvwG2g2Ot&_nc_oc=Adl2uD2eZzy9Y1HzZ3X-Bb9vNuP2WoSBNR93n06P-Lfy6zBkB-4DAAWGs48eWgXB41U4YjaBBHYuwqy5ZUPpY8bx&_nc_zt=23&_nc_ht=scontent.fruh4-3.fna&_nc_gid=M4U_ox2ZH4O_Tha7o6Ak9A&oh=00_AfgmyQwxJfIbPDkjXxlD5K8NLAYl8Q26dJqBnPuDEGyilA&oe=69276978",
      link: "https://www.facebook.com/share/p/18VPHfqqU3/",
      type: "facebook",
    },

    /* ✅ BLOG 10 — NEW PET PARENT PROMISE */
    {
      title:
        "The Journey of a New Pet Parent Starts with One Promise ❤️🐾",
      description:
        "A visual guide for new pet parents about routines, nutrition, grooming, training, wellness and intentional care.",
      image:
        "https://scontent.fruh4-3.fna.fbcdn.net/v/t39.30808-6/587017994_122113526703018113_3603572927535602470_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DXNKn4gU97AQ7kNvwE32l8Q&_nc_oc=AdlhODkyiaWgpE2ilYC5BASabeEI9F_bNj77wFTP9V4-HD12YodQnkTDbAjWxev-9fdyXz36AWT4tHpvKbL1OXAH&_nc_zt=23&_nc_ht=scontent.fruh4-3.fna&_nc_gid=EPGLJ3I3Uum05v0i5GN5hQ&oh=00_AfgVkUs6rQnI7-hcnnehJNFtGVF0AQLliiE9EZmB14QHyg&oe=692759F7",
      link: "https://www.facebook.com/share/p/1C2et8DKEN/",
      type: "facebook",
    },

    /* ✅ BLOG 11 — APP COMING SOON */
    {
      title: "Get Ready, Bangalore! 🚀 Your Pet Care SuperApp is Coming Soon!",
      description:
        "A smarter, faster, easier way to care for your pets — PawsPalConnect is launching soon in Bangalore!",
      image:
        "https://scontent.fruh4-6.fna.fbcdn.net/v/t39.30808-6/586269249_122113390605018113_4563490667695460738_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cePTDAH0JLsQ7kNvwGDjbuf&_nc_oc=AdkfKI5HbbIcaN0utZgOnh1z11nZptG41nqgYJECHT1pLV9zFW3YUqHe2wGhWTNjhEufSNSDZ4lH5iVcJZTEm48i&_nc_zt=23&_nc_ht=scontent.fruh4-6.fna&_nc_gid=M4U_ox2ZH4O_Tha7o6Ak9A&oh=00_AfgcbrqVCWexPpdkEPBSLsJ6fwkvHdaqrcFJKyFa7akXkw&oe=69276065",
      link: "https://www.facebook.com/share/p/17GRQd5a7u/",
      type: "facebook",
    },
    {
  title: "Describe Your Pet in ONE Word — What’s Yours? 🐶✨",
  description:
    "A fun community post for pet parents! Share the one word that perfectly describes your pet’s personality — cute, chaotic, royal, clingy, foodie or bossy! Join the PawsPalConnect pet community.",
  image:
    "https://scontent.fruh4-3.fna.fbcdn.net/v/t39.30808-6/583051258_122113376889018113_1724582002927425678_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lX9-663K404Q7kNvwGDldyj&_nc_oc=AdmogripsReNF_I-xDewBpMe5ihqYoDlqnP0naSqRkEysiixl_vF_zIdOyrcb0QuEbn2IRaQp_5VINyZdR8yPKuZ&_nc_zt=23&_nc_ht=scontent.fruh4-3.fna&_nc_gid=jPyb8Gesls9JjQbB7Jr6DA&oh=00_AfgTM1Vbzz-Fw9O4gVLTbavDh2OG_KNYVs3OtWd4plyDfA&oe=6927828F",
  link: "https://www.facebook.com/share/p/1CxnGwBwcD/",
  type: "facebook",
  keywords: [
    "describe your pet",
    "pet personality india",
    "PawsPalConnect community",
    "pet parents india",
    "dog personality traits",
    "cat personality traits",
    "Bangalore pet community",
    "fun pet engagement post"
  ]
}

  ];

  const filteredBlogs: BlogItem[] =
    filter === "all"
      ? blogs
      : blogs.filter((b) => b.type === filter);

  return (
    <>
      {/* PAW BACKGROUND */}
      <div className="paw-animated-bg">
        <div className="paw-rain-layer"></div>
        <div className="paw-parallax-layer"></div>
        <div className="paw-sparkles-layer"></div>
      </div>

      <div className="relative max-w-5xl mx-auto py-12 px-5 pb-32 z-10">
        <h1 className="text-5xl font-bold text-center text-[#C47A3C] mb-8">
          Blogs
        </h1>

        {/* SOCIAL MEDIA BAR */}
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

  <a href="https://www.threads.net/@pawspalconnect" target="_blank">
    <ThreadsOutline size={32} />
  </a>

 <a
  href="https://chat.whatsapp.com/IXf5enpuSrM7X48YVojTDK"
  target="_blank"
  className="hover:scale-110 transition"
>
  <img
    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='%23C47A3C' viewBox='0 0 16 16'><path d='M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232'/></svg>"
    alt="WhatsApp"
    className="w-[30px] h-[30px]"
  />
</a>


<a
  href="https://t.me/pawspalconnect"
  target="_blank"
  className="hover:scale-110 transition"
>
  <img
    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='%23C47A3C' viewBox='0 0 16 16'><path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09'/></svg>"
    alt="Telegram"
    className="w-[30px] h-[30px]"
  />
</a>


</div>


        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">
          {(["all", "medium", "facebook"] as FilterType[]).map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-full border ${
                filter === btn
                  ? "bg-[#C47A3C] text-white"
                  : "text-[#C47A3C] border-[#C47A3C]"
              }`}
            >
              {btn.toUpperCase()}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.title} item={blog} />
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}

function BlogCard({ item }: { item: BlogItem }) {
  return (
    <div className="bg-[#2a1a11]/40 backdrop-blur-md rounded-xl overflow-hidden border border-[#b87333] hover:shadow-lg hover:shadow-[#c47a3c]/30 transition-all">
      <div className="h-48 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl text-[#FFB477] font-bold mb-2">{item.title}</h3>
        <p className="text-gray-300 mb-4">{item.description}</p>

        <a href={item.link} target="_blank" className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-[#C47A3C] flex items-center justify-center hover:bg-[#C47A3C]/20 transition">
            {item.type === "medium" ? (
              <MediumIcon size={20} />
            ) : (
              <Facebook size={20} />
            )}
          </div>
        </a>
      </div>
    </div>
  );
}
