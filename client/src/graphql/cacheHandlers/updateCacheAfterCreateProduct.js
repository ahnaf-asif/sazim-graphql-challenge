import ALL_PRODUCTS from "../queries/allProducts";

// updates the apollo cache after creating a product
// just adds the product in front of allProducts array

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