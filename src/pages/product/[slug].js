// src/pages/product/[slug].js
import React from 'react';
import { urlForImage } from '../../../sanity/lib/image';
import { client } from '../../../lib/client';

const ProductDetails = ({ product, products }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, name, price, details } = product;

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            {image && image.length > 0 && (
              <img src={urlForImage(image[0])} alt={name} />
            )}
          </div>
          {/* <div className='small-images-container'>
           {image.map((item, index)=>(
            <img src={urlForImage(item)} className='' onMouseEnter=''/>
           ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
