import ALL_PRODUCTS from "./queries/allProducts";
import USER_PRODUCTS from "./queries/userProducts";

export default function updateCacheAfterProductCreate(cache,userId, data){
    let res = cache.readQuery({
        query: ALL_PRODUCTS
    });
    if(res){
        let newProducts = [data.data.addProduct, ...res.allProducts];
        cache.writeQuery({
            query: ALL_PRODUCTS,
            data: {
                allProducts: newProducts
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
        let newProducts = [data.data.addProduct, ...res.userProducts];
        cache.writeQuery({
            query: USER_PRODUCTS,
            variables: {
                userId: parseInt(userId)
            },
            data: {
                userProducts: newProducts
            }
        });
    }
}