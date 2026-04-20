import axios from "axios";
import { LoginType } from '../_types/LoginData.type';

export async function Login(data :LoginType) {
  try {
    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}