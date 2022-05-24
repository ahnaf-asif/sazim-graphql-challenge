import ALL_PRODUCTS from "../queries/allProducts";

export default function updateCacheAfterCreateProduct(cache, data){
    const {allProducts} = cache.readQuery({
        query: ALL_PRODUCTS
    });
    cache.writeQuery({
        query: ALL_PRODUCTS,
        data: {
            allProducts: [
              data, ...allProducts
            ]
        }
    })
}