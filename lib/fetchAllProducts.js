import { client } from "./client";
export async function fetchAllProducts() {
    const query = `*[_type == "product"]`;
    const products = await client.fetch(query);
    console.log('Fetched All Products:', products); // Log all products
    return products;
  }