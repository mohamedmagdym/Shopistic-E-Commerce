"use server"
import GetAllCategory from "@/app/_apiReqest/Category";
import Category_sweper from "./_componantes/category_sweber/Category_sweper";
import AllPostsComponantes from "./_componantes/allPosts/AllPosts";
import SwiperImage from "./_componantes/swiperImage/SwiperImage";
import { GetBrands } from "./_apiReqest/Brands";
export default async function Home() {
  let categories = await GetAllCategory();
  let brands = await GetBrands();
  return (
    <div className=" ">
      <SwiperImage brands={brands} />
      <Category_sweper categories={categories} />
      <AllPostsComponantes />
    </div>
  );
}
