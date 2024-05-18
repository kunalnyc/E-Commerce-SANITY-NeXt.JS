import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { urlForImage } from '../sanity/lib/image'
const Product = ({ product: {
    image, name, slug, price
} }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className='product-card'>
                    <img src={urlForImage(image && image[0])} width={250} height={250} className='product-image' />
                    <p className='product-name'>{name}</p>
                    <p className='product-name'>${price}</p>
                </div>

                /</Link>
        </div>
    )
}

export default Product
