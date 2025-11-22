"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, HelpCircle, BookOpen } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-[#FFB477]" : "text-gray-300";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a110b]/80 backdrop-blur-md border-t border-[#b87333]/40 py-3 flex justify-around z-[9999]">
      <Link href="/" className="flex flex-col items-center gap-1">
        <Home size={22} className={isActive("/")} />
        <span className={`text-xs ${isActive("/")}`}>Home</span>
      </Link>

      <Link href="/faq" className="flex flex-col items-center gap-1">
        <HelpCircle size={22} className={isActive("/faq")} />
        <span className={`text-xs ${isActive("/faq")}`}>FAQ</span>
      </Link>

      <Link href="/blog" className="flex flex-col items-center gap-1">
        <BookOpen size={22} className={isActive("/blog")} />
        <span className={`text-xs ${isActive("/blog")}`}>Blog</span>
      </Link>
    </nav>
  );
}
