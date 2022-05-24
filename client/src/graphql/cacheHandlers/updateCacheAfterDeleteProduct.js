import ALL_PRODUCTS from "../queries/allProducts";

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