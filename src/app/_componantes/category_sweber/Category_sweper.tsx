"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Category from "../../_types/Category";

export default function Category_sweper({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="py-16 px-10 dark:bg-gray-950">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          Browse all departments
        </span>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-2">
          Shop by Category
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Find products that match your style
        </p>
      </div>

      {/* Swiper */}
      <div className="relative px-10">
        <Swiper
          modules={[Autoplay, Navigation]}
          className="w-full"
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            prevEl: ".cat-prev",
            nextEl: ".cat-next",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat._id}>
              <div className="flex flex-col items-center gap-3 group cursor-pointer py-3">

                {/* Ring + Image */}
                <div className="relative w-[88px] h-[88px]">
                  {/* Gradient ring on hover */}
                  <div className="absolute inset-[-3px] rounded-full bg-gray-200 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300 group-hover:scale-105" />
                  {/* White inner border */}
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-white border-[3px] border-white dark:border-gray-950 z-10">
                    <Image
                      priority
                      src={cat.image}
                      alt={cat.name}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {cat.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav Buttons */}
        <button className="cat-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 dark:hover:text-white transition-all shadow-sm">
          ←
        </button>
        <button className="cat-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 dark:hover:text-white transition-all shadow-sm">
          →
        </button>
      </div>
    </section>
  );
}