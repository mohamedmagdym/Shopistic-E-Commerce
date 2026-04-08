import GetAllCategory from "@/app/_apiReqest/Category";
import Category_sweper from "./_componantes/category_sweber/Category_sweper";
import AllPostsComponantes from "./_componantes/allPosts/AllPosts";
export default async function Home() {
  const categories = await GetAllCategory();

  return (
    <>
      <Category_sweper categories={categories} />
      <h2 className="text-3xl font-bold text-center text-gray-800 my-4">
        show all products
      </h2>
      <AllPostsComponantes/>
    </>
  );
}
