"use client";

import { addToCart } from "@/app/_apiReqest/ApiReqestAddToCart";
import React from "react";
import toast from "react-hot-toast";

export default function BtnAddCartItem({ id }: { id: string }) {
  async function handleAdd() {
    const data = await addToCart(id);

    if (data?.error) {
      toast.error(data.error);
      return;
    }

    if (data.status === "success") {
      toast.success(data.message);
    } else {
      console.log(data);
      
      toast.error("cant add this item now");
    }
  }

  return (
    <button
      onClick={handleAdd}
      className="w-full mt-4 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
    >
      Add to Cart
    </button>
  );
}