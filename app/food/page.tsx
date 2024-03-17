import React from "react";
import Image from "next/image";

export const food = [
  {
    id: 1,
    name: "อาหารญี่ปุ่น",
    type: "Japanese",
    rating: "4.9/6",
    time: "0 min",
    price: "฿290",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 2,
    name: "ส้มตำไทย",
    type: "Thai",
    rating: "4.7/6",
    time: "5 นาที",
    price: "฿150",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 3,
    name: "ผัดไทย",
    type: "Thai",
    rating: "4.8/6",
    time: "10 นาที",
    price: "฿180",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 4,
    name: "ข้าวหมูแดง",
    type: "Thai",
    rating: "4.5/6",
    time: "15 นาที",
    price: "฿200",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 5,
    name: "ข้าวผัดกระเทียม",
    type: "Thai",
    rating: "4.6/6",
    time: "8 นาที",
    price: "฿170",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 6,
    name: "ผัดซีอิ๊ว",
    type: "Thai",
    rating: "4.7/6",
    time: "12 นาที",
    price: "฿190",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 7,
    name: "ก๋วยเตี๋ยวต้มยำ",
    type: "Thai",
    rating: "4.9/6",
    time: "7 นาที",
    price: "฿220",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 8,
    name: "ยำวุ้นเส้น",
    type: "Thai",
    rating: "4.8/6",
    time: "6 นาที",
    price: "฿160",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 9,
    name: "หมูทอดกระเทียม",
    type: "Thai",
    rating: "4.6/6",
    time: "20 นาที",
    price: "฿250",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 10,
    name: "แกงเขียวหวานไก่",
    type: "Thai",
    rating: "4.9/6",
    time: "25 นาที",
    price: "฿280",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
  {
    id: 11,
    name: "ข้าวมันไก่",
    type: "Thai",
    rating: "4.7/6",
    time: "18 นาที",
    price: "฿210",
    image:
      "https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225",
  },
];
export default function page() {
  return (
    <div className="container mx-auto mb-20">
      <div className="grid grid-cols-1 gap-2">
        {food.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-xl overflow-hidden border border-gray-300"
          >
            <Image
              className="w-full h-48 object-cover"
              src="https://images.deliveryhero.io/image/fd-th/LH/w7ma-listing.jpg?width=400&height=225"
              alt="Sushi Plate"
              width={400}
              height={225}
            />
            <div className="p-6">
              <div className="font-bold text-xl mb-2 text-gray-800">
                {item.name}
              </div>
              <p className="text-gray-600 text-base mb-4">{item.type}</p>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
                 {item.rating}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  {item.time}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
