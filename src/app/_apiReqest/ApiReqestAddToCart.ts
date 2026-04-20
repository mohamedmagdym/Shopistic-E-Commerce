"use server";

import GetMyToken from "@/utilities/GetMyToken";
import { cookies } from "next/headers";

export async function addToCart(productId: string) {
  const token = await GetMyToken()
    
  if (!token) {
    return { error: "You must login first" };
  }

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({ productId }),
    }
  );

  const data = await res.json();

  return data;
}