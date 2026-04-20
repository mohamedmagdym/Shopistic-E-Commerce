import GetMyToken from "@/utilities/GetMyToken";
import axios from "axios";

export default async function ClearCart() {
  let token = await GetMyToken();
 let res  = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: { token },
  });
    console.log(res);
    return res
    
}
