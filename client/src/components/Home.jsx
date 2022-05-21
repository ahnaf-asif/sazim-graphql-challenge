import ProductPreview from './ProductPreview';

import '../css/product.css';

export default function Home(){
    return (
        <>
            <h1 className="text-center mt-10 mb-5 text-6xl font-bold">All Products</h1>
            <div className="flex justify-center">
                <div className="products all-products">
                    <ProductPreview />
                    <ProductPreview />
                    <ProductPreview />
                </div>
            </div>
        </>
    )
}