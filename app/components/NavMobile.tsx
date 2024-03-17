"use client";
import {
  Home,
  ScanLine,
  Utensils,
  CarTaxiFront,
  ShoppingBasket,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function MobileNav() {
  const currentPath = usePathname();
  return (
    <nav className="bg-white border-t shadow-md p-3 fixed bottom-0 w-full text-center z-50 md:hidden lg:hidden xl:hidden">
      <div className="flex justify-around font-semibold relative">
        <Link
          href="/"
          className={`flex flex-col items-center ${
            currentPath === "/"
              ? "text-blue-500 scale-105"
              : "text-gray-700 hover:text-blue-500 hover:scale-105 transition-all duration-300"
          }`}
        >
          <Home />
          หน้าแรก
        </Link>
        <Link
          href="/shopping"
          className={`flex flex-col items-center ${
            currentPath === "/shopping"
              ? "text-blue-500 scale-105"
              : "text-gray-700 hover:text-blue-500 hover:scale-105 transition-all duration-300"
          }`}
        >
          <ShoppingBasket />
          สั่งสินค้า
        </Link>
        <Link
          href="#"
          className={`flex flex-col items-center ${
            currentPath === "#"
              ? "text-blue-500 scale-105"
              : "text-gray-700 hover:text-blue-500 hover:scale-105 transition-all duration-300"
          }`}
        >
          <ScanLine className="text-blue-500" size={40} />
        </Link>
        <Link
          href="/food"
          className={`flex flex-col items-center ${
            currentPath === "/food"
              ? "text-blue-500 scale-105"
              : "text-gray-700 hover:text-blue-500 hover:scale-105 transition-all duration-300"
          }`}
        >
          <Utensils />
          สั่งอาหาร
        </Link>
        <Link
          href="/rider"
          className={`flex flex-col items-center ${
            currentPath === "/rider"
              ? "text-blue-500 scale-105"
              : "text-gray-700 hover:text-blue-500 hover:scale-105 transition-all duration-300"
          }`}
        >
          <CarTaxiFront />
          เรียกรถ
        </Link>
      </div>
    </nav>
  );
}
