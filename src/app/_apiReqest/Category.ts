import React from "react";

export default async function GetAllCategory() {
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
  let { data } = await res.json();
  return data
}
