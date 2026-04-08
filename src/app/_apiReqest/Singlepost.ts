export default async function SinglePost(id : string) {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  let {data} = await res.json()
  return data
}