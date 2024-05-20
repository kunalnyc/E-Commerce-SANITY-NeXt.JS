import React from 'react';
import { urlForImage } from '../../../../sanity/lib/image';



const ProductDetails = ({ product }) => {



  return (

    <div className='product-detail-container'>
      <div>
        Hey
        <div className='image-container'>

          {/* <img src={urlForImage(product.image)} /> */}

        </div>
      </div>
      <div className='product-details-desc'>
        {/* <h1>{name}</h1>
                    <p>{details}</p>
                    <p className='price'>${price}</p> */}
      </div>
    </div>

  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails;
