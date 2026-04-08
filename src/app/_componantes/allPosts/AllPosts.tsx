import AllPosts from "@/app/_apiReqest/Allposts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from './../../types/Product.type';

export default async function AllPostsComponantes() {
  let data = await AllPosts();

  return (
    <>
      <div className="p-4">
        <div
          className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5"
        >
          {data.map((product : Product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}

              <Link href={`/products/${product.id}`}>
                <div className="relative overflow-hidden">
                  <Image
                    priority
                    width={500}
                    height={500}
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Badge */}
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                    New
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>

                {/* Brand */}
                <p className="text-xs text-gray-500 mt-1">
                  {product.brand?.name}
                </p>

                {/* Price + Rating */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-gray-800">
                    {product.price} EGP
                  </span>

                  <span className="text-sm text-yellow-500 font-medium">
                    ⭐ {product.ratingsAverage}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
