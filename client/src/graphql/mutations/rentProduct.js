import { gql } from "@apollo/client";

const RENT_PRODUCT = gql`
    mutation rentProduct(
        $from: String!,
        $to: String!,
        $productId: Int!,
        $userId: Int!
    ){
        rentProduct(
            productId: $productId
            userId: $userId
            from: $from
            to: $to
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

export default RENT_PRODUCT;