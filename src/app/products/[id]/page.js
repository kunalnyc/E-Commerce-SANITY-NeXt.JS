"use client"
import React, { Suspense, useState } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import { fetchProduct } from '../../../../lib/fetchProduct';
import { Layout } from '@/app/components';
import { Product } from '@/app/components';
// importing some react icons to showcase reviews
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { fetchRelatedProducts } from '../../../../lib/fetchProduct';
// Create a component to handle the product details

function ProductDetails({ product, relatedProducts }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, name, price, details } = product;
  const [index, setIndex] = useState(0); // Define index state variable


  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            {image && image.length > 0 && (
              <img src={urlForImage(image[index])} alt={name} className="product-detail-image" />
            )}
          </div>
          <div className='small-images-container'>
            {image.map((item, i) => (
              <img
                key={i}
                src={urlForImage(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                alt={`Thumbnail ${i}`}
                onMouseEnter={() => setIndex(i)} // Update index on mouse enter
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick=''><AiOutlineMinus /></span>
              <span className='num' onClick=''>0</span>
              <span className='plus' onClick=''><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick=''>Add to cart</button>
            <button type='button' className='buy-now' onClick=''>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2 > <AiOutlineStar /> BEST-SELLERS / New Arrivals</h2>
        <div className='marquee' >
          <div className='maylike-products-container track'>
            {relatedProducts.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Page({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  const relatedProducts = await fetchRelatedProducts(); // Fetch related products separately
  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  return (

    <Suspense fallback={<div>Loading product details...</div>}>
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </Suspense>

  );
}