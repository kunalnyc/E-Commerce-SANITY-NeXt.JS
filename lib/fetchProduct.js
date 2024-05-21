import { client } from './../lib/client';

export async function fetchProduct(slug) {
  console.log('Fetching product with slug:', slug); // Log the slug being used
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  console.log('Fetched Product:', product); // Log the fetched product
  return product;
}
export async function fetchRelatedProducts() {
  const query = `*[_type == "product"] `; // Example query to get the latest 5 products
  const products = await client.fetch(query);
  return products;
}