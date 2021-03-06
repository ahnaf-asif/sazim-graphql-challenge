import { gql } from "@apollo/client";

const BUY_PRODUCT = gql`
    mutation buyProduct(
        $productId: Int!,
        $userId: Int!
    ){
        buyProduct(
            productId: $productId
            userId: $userId
        ){ 
            id 
            description
            title 
            price
            rent
            rentPaymentPeriod
            status
            views
            createdAt
            user {
                id 
            }
            categories{
                id 
                name 
            }
            purchaseHistory{
                user{
                    id
                }
            }
            rentHistories{
                from 
                to
                user{
                    id
                }
            }
        }
    }
        
`;

export default BUY_PRODUCT;