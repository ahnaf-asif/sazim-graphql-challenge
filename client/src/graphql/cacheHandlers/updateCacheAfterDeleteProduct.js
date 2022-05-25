import ALL_PRODUCTS from "../queries/allProducts";

// removes product from the cache after deleting the product

export default function updateCacheAfterDeleteProduct(cache, productId){
    const {allProducts} = cache.readQuery({
        query: ALL_PRODUCTS
    });
    cache.writeQuery({
        query: ALL_PRODUCTS,
        data: {
            allProducts: allProducts.filter( product => (product.id !== productId) )
        }
    })
}