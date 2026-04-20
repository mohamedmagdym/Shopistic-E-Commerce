import GetMyToken from "@/utilities/GetMyToken";
import axios from "axios";

export default async function ShowWishlist() {
  let token = await GetMyToken();
  let res = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: { token },
  });
    return res
    
}
