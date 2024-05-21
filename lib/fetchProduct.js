import { client } from './../lib/client';

export async function fetchProduct(slug) {
  console.log('Fetching product with slug:', slug); // Log the slug being used
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  console.log('Fetched Product:', product); // Log the fetched product
  return product;
}