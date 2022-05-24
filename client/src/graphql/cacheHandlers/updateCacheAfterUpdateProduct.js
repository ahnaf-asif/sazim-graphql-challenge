import ALL_PRODUCTS from "../queries/allProducts";

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