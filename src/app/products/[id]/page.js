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

export default async function Page({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetails product={product} />
      </Suspense>
    </Layout>
  );
}