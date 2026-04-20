import React from "react";
import ShowWishlist from "../_apiReqest/ShowWishlist";
import Image from "next/image";
import Link from "next/link";
import DeleteWishlistItemComponantes from "../_componantes/DeleteWishlistItem/DeleteWishlistItemComponantes";

type WishlistProduct = {
  _id: string;
  title: string;
  price: number;
  imageCover: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  brand: { name: string };
  category: { name: string };
};

export default async function page() {
  let res = await ShowWishlist();
  let products: WishlistProduct[] = res.data.data;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-[#0F172A]">My Wishlist</h1>
        <p className="text-gray-400 text-sm mt-1">
          {products.length} {products.length === 1 ? "item" : "items"} saved
        </p>
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-32">
          <p className="text-5xl mb-4">🤍</p>
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          <Link
            href="/products"
            className="mt-4 inline-block text-blue-500 hover:underline text-sm"
          >
            Browse products
          </Link>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <Link
              href={`/products/${product._id}`}
              className="block relative overflow-hidden"
            >
              <Image
                priority
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
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

              {/* Price + Rating */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-base font-bold text-[#0F172A]">
                  {product.price}
                  <span className="text-xs font-normal text-gray-400 ml-1">
                    EGP
                  </span>
                </span>
                <span className="text-xs font-medium text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                  ⭐ {product.ratingsAverage}
                  <span className="text-gray-400 ml-1">
                    ({product.ratingsQuantity})
                  </span>
                </span>
              </div>

              {/* Category */}
              <p className="text-[11px] text-gray-400">
                {product.category?.name}
              </p>

              {/* Button */}
              <Link
                href={`/products/${product._id}`}
                className="w-full text-center text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 transition-colors py-2 rounded-xl"
              >
                View Product
              </Link>
              <DeleteWishlistItemComponantes id={product._id } />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
