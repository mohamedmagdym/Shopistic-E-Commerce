"use server";

import AllPosts from "@/app/_apiReqest/Allposts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../../_types/Product.type";
import BtnAddCartItem from "./../BtnCartActions/BtnAddCartItem";
import AddWishlistComponant from "../AddWishlist/AddWishlistComponant";

export default async function AllPostsComponantes() {
  let data = await AllPosts();
 
  
  return (
    <div className="p-12">

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
          All Products
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Discover products you'll love
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group"
          >

            {/* Image Section */}
            <Link href={`/products/${product._id}`} className="block relative overflow-hidden">
              <Image
                priority
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badge */}
              {product.price > 1000 && (
                <span className="absolute top-2.5 left-2.5 bg-amber-400 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full pointer-events-none">
                  Hot Deal
                </span>
              )}
            </Link>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 gap-3">

              {/* Brand */}
              <p className="text-[11px] font-semibold text-blue-500 uppercase tracking-widest">
                {product.brand?.name}
              </p>

              {/* Title */}
              <Link href={`/products/${product._id}`}>
                <h3 className="text-sm font-semibold text-[#0F172A] line-clamp-2 leading-snug min-h-[38px] hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
              </Link>

              {/* Price + Rating + Wishlist */}
              <div className="flex items-center justify-between mt-auto">

                {/* Price */}
                <span className="text-base font-bold text-[#0F172A]">
                  {product.price}
                  <span className="text-xs font-normal text-gray-400 ml-1">EGP</span>
                </span>

                {/* Rating + Wishlist */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                    ⭐ {product.ratingsAverage}
                  </span>
                  <AddWishlistComponant id={product._id} />
                </div>

              </div>

              {/* Button */}
              <BtnAddCartItem id={product._id} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}