import ALL_PRODUCTS from "../queries/allProducts";

// updates the existing product in cache after update in the server

export default function updateCacheAfterUpdateProduct(cache, data){
    const {allProducts} = cache.readQuery({
        query: ALL_PRODUCTS
    });
    allProducts.forEach(product=>{
        if(product.id === data.id){
            product = data;
        }
    });
    cache.writeQuery({
        query: ALL_PRODUCTS,
        data: {
            allProducts: allProducts
        }
    })
}