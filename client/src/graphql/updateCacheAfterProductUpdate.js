import ALL_PRODUCTS from "./queries/allProducts";
import USER_PRODUCTS from "./queries/userProducts";

export default function updateCacheAfterProductUpdate(cache, userId, productId, data){
    let res = cache.readQuery({
        query: ALL_PRODUCTS
    });
    if(res){
        res.allProducts.forEach(product => {
            if(product.id === productId){
                product = data.updateProduct;
            }
        });
        cache.writeQuery({
            query: ALL_PRODUCTS,
            data: {
                allProducts: res.allProducts
            }
        });
    }
    res = cache.readQuery({
        query: USER_PRODUCTS,
        variables: {
            userId: parseInt(userId)
        }
    });
    if(res){
        res.userProducts.forEach(product => {
            if(product.id === productId){
                product = data.updateProduct;
            }
        });
        cache.writeQuery({
            query: USER_PRODUCTS,
            variables: {
                userId: parseInt(userId)
            },
            data: {
                userProducts: res.userProducts
            }
        });
    }
}