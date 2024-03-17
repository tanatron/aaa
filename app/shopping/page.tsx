import React from "react";
import Swipers from "../components/Swiper";
import image1 from "@/public/image1.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.png";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";
import image7 from "@/public/image7.png";
import Image from "next/image";
import ShoppingNav from "../components/ShoppingNav";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";

export const data = [
  { id: 1, name: "product 1", price: 100, image: image1 },
  { id: 2, name: "product 2", price: 200, image: image3 },
  { id: 3, name: "product 3", price: 300, image: image4 },
  { id: 4, name: "product 4", price: 400, image: image5 },
  { id: 5, name: "product 5", price: 500, image: image6 },
  { id: 6, name: "product 6", price: 600, image: image7 },
  { id: 7, name: "product 7", price: 700, image: image1 },
  { id: 8, name: "product 8", price: 800, image: image3 },
  { id: 9, name: "product 9", price: 900, image: image4 },
  { id: 10, name: "product 10", price: 1000, image: image5 },
  { id: 11, name: "product 11", price: 1100, image: image6 },
  { id: 12, name: "product 12", price: 1200, image: image7 },
  { id: 13, name: "product 13", price: 1300, image: image1 },
  { id: 14, name: "product 14", price: 1400, image: image3 },
];

export default function page() {
  return (
    <>
      <ShoppingNav />
      <div className="mt-16">
        <Swipers />
        <Card className="m-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              เรียงตาม :
              <Select>
                <SelectTrigger className="w-[180px]">
                  <ListFilter />
                  <SelectValue placeholder="เกี่ยวข้อง" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="desc">ราคาจากต่ำไปสูง</SelectItem>
                    <SelectItem value="as?">ราคาจากสูงไปต่ำ</SelectItem>
                    <SelectItem value="new">ใหม่ล่าสุด</SelectItem>
                    <SelectItem value="pop">ที่นิยม</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardTitle>
          </CardHeader>
        </Card>

        <div className="container mx-auto p-3">
          <div className="grid grid-cols-2 gap-2 mt-2 mb-20">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col">
                <Image
                  className="rounded-lg"
                  src={item.image ? item.image : ""}
                  alt="Picture of the product"
                  width={500}
                  height={500}
                />
                <div className="mt-2 ml-2">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-gray-600 text-xs">Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
