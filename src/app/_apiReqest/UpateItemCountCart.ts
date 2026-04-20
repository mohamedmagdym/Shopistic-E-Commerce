import GetMyToken from "@/utilities/GetMyToken";
import axios from "axios";

export default async function UpdateCountCart(id: string, count: number) {
  let token = await GetMyToken();
  let res = await axios.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    { count },
    { headers: { token } },
    );
    console.log(res);
    return res
    
}
