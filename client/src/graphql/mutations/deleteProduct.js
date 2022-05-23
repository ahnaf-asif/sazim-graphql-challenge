import { gql } from "@apollo/client";

const DELETE_PRODUCT = gql`
    mutation deleteProduct(
        $productId: Int!,
    ){
        deleteProduct(
            productId: $productId
        ){ 
            id
        }
    }
        
`;

export default DELETE_PRODUCT;