"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  imageCover: string;
  images: string[];
  title: string;
};

export default function ProductImages({ imageCover, images, title }: Props) {
  const [mainImage, setMainImage] = useState(imageCover);

  return (
    <div>
      {/* الصورة الكبيرة */}
      <Image
        priority
        width={600}
        height={600}
        src={mainImage}
        alt={title}
        className="w-full h-[450px] object-cover rounded-2xl shadow-md mb-4 transition-all duration-300"
      />

      {/* الصور الصغيرة */}
      <div className="flex gap-3">
        {[imageCover, ...images].map((img, idx) => (
          <Image
            priority
            width={100}
            height={100}
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition border-2 ${
              mainImage === img ? "border-black" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}