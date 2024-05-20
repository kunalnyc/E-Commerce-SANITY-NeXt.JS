import React, { Suspense } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import { fetchProduct } from '../../../../lib/fetchProduct';
import { Layout } from '@/app/components';
// Create a component to handle the product details
function ProductDetails({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, name, price, details } = product;

  return (
    <div className='product-detail-container'>
      <div>
        <div className='image-container'>
          {image && image.length > 0 && (
            <img src={urlForImage(image[0])} alt={name} />
          )}
        </div>
      </div>
      <div className='product-details-desc'>
        <h1>{name}</h1>
        <p>{details}</p>
        <p className='price'>${price}</p>
      </div>
    </div>
  );
}

// Main page component
export default async function Page({ params }) {
  const { slug } = params;

  // Fetch the product data
  const productPromise = fetchProduct(slug);

  // Use Suspense to wait for the product data
  return (
    <Layout>
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetails product={await productPromise} />
      </Suspense>
    </Layout>
  );
}