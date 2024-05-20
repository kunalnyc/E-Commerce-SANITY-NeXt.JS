import { client } from './../lib/client';
export async function fetchProduct(slug) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  console.log('Fetched Product:', product); // Add this line to log the fetched product
  return product;
}
