import SinglePost from "@/app/_apiReqest/Singlepost";
import Image from "next/image";
import React from "react";

import ProductImages from "./ProductImages";
import ParamsType from "./../../types/Params.type";
export default async function ProductDetails({ params }: ParamsType) {
  let { id } = params;
  let product = await SinglePost(id);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductImages
          imageCover={product.imageCover}
          images={product.images}
          title={product.title}
        />

        <div className="flex flex-col justify-start">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Image
                priority
                width={32}
                height={32}
                src={product.brand.image}
                alt={product.brand.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-600">
                {product.brand.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                priority
                width={32}
                height={32}
                src={product.category.image}
                alt={product.category.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-600">
                {product.category.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-700">
            <span>
              ⭐ {product.ratingsAverage} ({product.ratingsQuantity})
            </span>
            <span>Sold: {product.sold}</span>
            <span>In stock: {product.quantity}</span>
          </div>

          <div className="text-2xl font-bold text-gray-900 mb-4">
            {product.price} EGP
          </div>

          <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-3">
            <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
