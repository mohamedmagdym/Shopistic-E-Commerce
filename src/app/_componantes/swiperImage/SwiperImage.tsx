"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import BrandType from "../../_types/Brand.type";

export default function SwiperImage({ brands }: { brands: BrandType[] }) {
  return (
    <section className="py-16 bg-[#0f1729] dark:bg-gray-950 px-10">

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          Our partners
        </span>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-2">
          Trusted Brands
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We work with the best global brands
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mx-10 mb-8">
        <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 dark:text-gray-600 whitespace-nowrap">
          Featured partners
        </span>
        <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
      </div>

      {/* Swiper */}
      <div className="relative px-11">
        <Swiper
          modules={[Autoplay, Navigation]}
          className="w-full"
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          navigation={{ prevEl: ".brand-prev", nextEl: ".brand-next" }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand._id}>
              <div className="flex flex-col items-center gap-2.5 group cursor-pointer py-2">

                {/* Card */}
                <div className="w-full aspect-square rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center overflow-hidden relative transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-900 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.10)]">
                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    priority
                    src={brand.image}
                    alt={brand.name}
                    width={500}
                    height={500}
                    className="relative z-10 object-contain w-3/5 h-3/5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                {/* Name */}
                <p className="text-[11px] font-medium tracking-wide text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                  {brand.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav Buttons */}
        <button className="brand-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-800 dark:hover:text-white hover:border-gray-400 transition-all text-sm">
          ←
        </button>
        <button className="brand-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-800 dark:hover:text-white hover:border-gray-400 transition-all text-sm">
          →
        </button>
      </div>

      {/* Auto-scroll progress */}
      <div className="h-[1.5px] mx-11 mt-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-400 dark:bg-blue-700 rounded-full animate-autoBar" />
      </div>

    </section>
  );
}