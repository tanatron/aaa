import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

export default function ShoppingNav() {
  return (
    <nav className=" bg-white border-t shadow-md p-3 fixed top-0 w-full text-center z-50 md:hidden lg:hidden xl:hidden">
      <div className="flex space-x-3">
        <Input type="text" placeholder="ค้นหาสินค้า" />
        <Button variant="ghost"><Menu/></Button>
      </div>
    </nav>
  );
}
