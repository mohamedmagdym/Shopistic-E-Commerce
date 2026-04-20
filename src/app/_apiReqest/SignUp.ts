import axios from "axios";
import { SignUpType } from '../_types/RegisterData.type';

export async function signup(data :SignUpType) {
  try {
    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}