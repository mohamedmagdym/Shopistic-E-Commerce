"use client";
import React, { useEffect, useState } from "react";
import ShowItemCardApi from "../_apiReqest/ShowItemInCardAction";
import { CartItem } from "./../_types/Product.type";
import Link from "next/link";
import DeleteItemCard from "../_apiReqest/DeleteItemCard";
import toast from "react-hot-toast";
import UpdateCountCart from "../_apiReqest/UpateItemCountCart";
import ClearCart from "../_apiReqest/ClearCart";
import Swal from "sweetalert2";

export default function Cart() {
  const [products, setproducts] = useState<CartItem[]>([]);
  const [loadingPage, setLoadingPage] = useState(true);

  const [loadingDeleteId, setLoadingDeleteId] = useState<string | null>(null);
  const [loadingUpdateId, setLoadingUpdateId] = useState<string | null>(null);
  const [loadingClear, setLoadingClear] = useState(false);

  async function HandleApi() {
    setLoadingPage(true);

    try {
      let { data } = await ShowItemCardApi();
      setproducts(data.data.products);
    } catch (error) {
      toast.error("Failed to load cart");
    } finally {
      setLoadingPage(false);
    }
  }

  async function HandleDelete(id: string) {
    setLoadingDeleteId(id);

    try {
      let { data } = await DeleteItemCard(id);
      setproducts(data.data.products);

      if (data.status === "success") {
        toast.success("item deleted");
      }
    } catch (error) {
      toast.error("error occurred");
    } finally {
      setLoadingDeleteId(null);
    }
  }

  async function HandleUpdate(id: string, count: number) {
    if (count < 1) return;

    setLoadingUpdateId(id);

    try {
      let { data } = await UpdateCountCart(id, count);
      setproducts(data.data.products);

      if (data.status === "success") {
        toast.success("updated");
      }
    } catch (error) {
      toast.error("error occurred");
    } finally {
      setLoadingUpdateId(null);
    }
  }

  async function HandleClear() {
    if (products.length === 0) return;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "All cart items will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, clear it",
    });

    if (!result.isConfirmed) return;

    setLoadingClear(true);

    try {
      let { data } = await ClearCart();

      setproducts([]);

      if (data.status === "success") {
        toast.success("Cart cleared");
      }
    } catch (error) {
      toast.error("error occurred");
    } finally {
      setLoadingClear(false);
    }
  }

  useEffect(() => {
    HandleApi();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="w-[92%] mx-auto flex flex-col gap-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review your items before checkout
            </p>

            {!loadingPage && (
              <span className="inline-block mt-3 text-xs bg-white border px-3 py-1 rounded-full text-gray-600">
                {products.length} items
              </span>
            )}
          </div>

          <button
            disabled={loadingClear || products.length === 0}
            onClick={HandleClear}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-600 transition disabled:opacity-50"
          >
            {loadingClear ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "🗑 Clear Cart"
            )}
          </button>
        </div>

        {/* LOADING STATE (FIRST LOAD) */}
        {loadingPage ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-500">
            <span className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></span>
            <p className="mt-4 text-sm">Loading your cart...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* EMPTY STATE */}
            {products.length === 0 ? (
              <div className="text-center text-2xl text-slate-500 font-bold my-20 underline lg:col-span-2">
                Your cart is empty 🛒
              </div>
            ) : (
              <div className="lg:col-span-2 space-y-4">
                {products.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex gap-4 items-center"
                  >
                    <Link href={`/products/${item.product._id}`}>
                      <div className="w-20 h-20 rounded-xl overflow-hidden border">
                        <img
                          src={item.product.imageCover}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#0F172A] line-clamp-2">
                        {item.product.title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Price: {item.price} EGP
                      </p>

                      <div className="flex items-center mt-2 border rounded-lg w-fit overflow-hidden">
                        <button
                          disabled={loadingUpdateId === item.product._id}
                          onClick={() =>
                            HandleUpdate(item.product._id, item.count - 1)
                          }
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        >
                          −
                        </button>

                        <span className="w-8 h-8 flex items-center justify-center text-sm">
                          {loadingUpdateId === item.product._id ? (
                            <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                          ) : (
                            item.count
                          )}
                        </span>

                        <button
                          disabled={loadingUpdateId === item.product._id}
                          onClick={() =>
                            HandleUpdate(item.product._id, item.count + 1)
                          }
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      disabled={loadingDeleteId === item.product._id}
                      onClick={() => HandleDelete(item.product._id)}
                      className="text-red-500 hover:text-red-700 text-sm disabled:opacity-50"
                    >
                      {loadingDeleteId === item.product._id ? (
                        <span className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        "Remove"
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* SUMMARY */}
            <div className="bg-white rounded-2xl shadow-sm p-5 h-fit sticky top-24">
              <h2 className="text-lg font-bold text-[#0F172A] mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span>
                  {products
                    .reduce((acc, item) => acc + item.price * item.count, 0)
                    .toLocaleString()}{" "}
                  EGP
                </span>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[#0F172A]">
                  {products
                    .reduce((acc, item) => acc + item.price * item.count, 0)
                    .toLocaleString()}{" "}
                  EGP
                </span>
              </div>

              <button className="w-full mt-5 bg-[#2563EB] text-white py-2.5 rounded-xl hover:bg-blue-700 transition">
                Proceed to Checkout →
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}