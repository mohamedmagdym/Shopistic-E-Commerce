import GetMyToken from "@/utilities/GetMyToken";
import axios from "axios";

export default async function WishlistAdd(id: string) {
  let token = await GetMyToken();
  let res = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    { productId: id },
    { headers: { token } },
  );
  console.log(res);
  return res;
}
