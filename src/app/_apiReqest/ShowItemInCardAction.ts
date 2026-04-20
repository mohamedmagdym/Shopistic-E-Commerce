"use server"
import GetMyToken from "@/utilities/GetMyToken";
import axios from "axios";

export default async function ShowItemCardApi() {
  let token = await GetMyToken();
  let res = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: { token },
  });
    console.log(res);
    
 return {
    data: res.data,
    token,
  };   
}
