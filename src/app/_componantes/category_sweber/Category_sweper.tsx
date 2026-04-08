"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Category from "./../../types/Category";

export default function Category_sweper({ categories }: { categories: Category[] }) {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Shop By Category
      </h2>
      

      <Swiper
        modules={[Autoplay]}
        className="w-[90%] mx-auto"
        spaceBetween={15}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320:  { slidesPerView: 2 },
          640:  { slidesPerView: 3 },
          768:  { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat._id}>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-green-400 transition-all duration-300 shadow-md">
                <Image
                  priority
                  src={cat.image}
                  alt={cat.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-green-500 transition-colors duration-300">
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}