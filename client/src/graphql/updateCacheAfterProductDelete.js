import ALL_PRODUCTS from "./queries/allProducts";
import USER_PRODUCTS from "./queries/userProducts";

export default function updateCacheAfterProductDelete(cache, userId, productId){
    let res = cache.readQuery({
        query: ALL_PRODUCTS
    });
    if(res){
        cache.writeQuery({
            query: ALL_PRODUCTS,
            data: {
                allProducts: res.allProducts.filter(product => product.id !== parseInt(productId))
            }
        });
    }
    // updating user products
    res = cache.readQuery({
        query: USER_PRODUCTS,
        variables: {
            userId: parseInt(userId)
        }
    });
    if(res){
        cache.writeQuery({
            query: USER_PRODUCTS,
            variables: {
                userId: parseInt(userId)
            },
            data: {
                userProducts: res.userProducts.filter(product => product.id !== parseInt(productId))
            }
        });
    }
}