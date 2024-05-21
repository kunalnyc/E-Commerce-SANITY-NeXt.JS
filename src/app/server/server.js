import ProductDetails from '../products/[id]/page';
import { fetchRelatedProducts, fetchProduct } from '../../../lib/fetchAllProducts';
import { Suspense } from 'react';
import { Layout } from '@/app/components';

export default async function Page({ params }) {
    const { id } = params;
    const product = await fetchProduct(id);
    const relatedProducts = await fetchRelatedProducts();
    console.log('Fetched product:', product);
    console.log('Fetched related products:', relatedProducts);
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
                <ProductDetails product={product} relatedProducts={relatedProducts} />
            </Suspense>
        </Layout>
    );
}