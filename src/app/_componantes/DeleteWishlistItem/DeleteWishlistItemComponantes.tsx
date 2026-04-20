"use client";
import RemoveWishlistItem from "@/app/_apiReqest/RemoveWishlistItem";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ زود ده

type Props = { id: string };

export default function DeleteWishlistItemComponantes({ id }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ زود ده

  async function handleDelete() {
    setLoading(true);
    try {
      const res = await RemoveWishlistItem(id);
      if (res.data.status === "success") {
        toast.success(res.data.message || "Removed from wishlist");
        router.refresh(); // ✅ زود ده — بيعيد جلب بيانات الـ Server Component
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to remove. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-500 border border-red-200 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors py-2 rounded-xl cursor-pointer"
    >
      {loading ? (
        <>
          <span className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin cursor-pointer" />
          Removing...
        </>
      ) : (
        <>✕ Remove</>
      )}
    </button>
  );
}
