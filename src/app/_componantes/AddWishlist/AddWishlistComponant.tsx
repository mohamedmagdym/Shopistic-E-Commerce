"use client";
import WishlistAdd from "@/app/_apiReqest/WishlistAdd";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function AddWishlistComponant({ id }: Props) {
  const [isWished, setIsWished] = useState(false);
  const [loading, setLoading] = useState(false);

  async function HandlyWish() {
    
    if (loading) return;
    setLoading(true);

    try {
      let res = await WishlistAdd(id);

      if (res.data.status === "success") {
        setIsWished(true);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={HandlyWish}
      disabled={loading}
      className="transition-transform duration-150 active:scale-125 cursor-pointer"
    >
      <FaHeart
        className={`text-xl transition-colors duration-300 ${
          isWished ? "text-red-500" : "text-white stroke-red-500"
        } ${loading ? "opacity-50" : "opacity-100"}`}
        style={
          !isWished
            ? {
                color: "transparent",
                stroke: "#ef4444",
                strokeWidth: 40,
                paintOrder: "stroke",
              }
            : {}
        }
      />
    </button>
  );
}
