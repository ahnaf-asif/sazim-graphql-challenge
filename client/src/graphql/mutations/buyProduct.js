import { gql } from "@apollo/client";

const BUY_PRODUCT = gql`
    mutation buyProduct(
        $productId: Int!,
        $buyerId: Int!,
        $sellerId: Int!
    ){
        buyProduct(
            productId: $productId
            buyerId: $buyerId
            sellerId: $sellerId
        ){ 
            id
            title
            description
            price
            rent
            views 
            status
            rentPaymentPeriod
            createdAt
            categories {
                id
                name
            }
            user{
                id
            }
        }
    }
        
`;

export default BUY_PRODUCT;