// components/Product.jsx
import React from 'react';
import Link from 'next/link';
import { urlForImage } from '../sanity/lib/image';

const Product = ({ product: { image, name, slug, price } }) => {
    console.log(slug.current)
    return (

        <div>
            <Link href={`/product/${slug.current}`}>

                <div className="product-card">
                    <img
                        src={urlForImage(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                        alt={name}
                    />
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
            </Link>
        </div>
    );
};

export default Product;
