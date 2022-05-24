import { gql } from "@apollo/client";

const INCREASE_PRODUCT_VIEWS = gql`
    mutation increaseProductViews(
        $productId: Int!
    ){
        increaseProductViews(
            productId: $productId
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

export default INCREASE_PRODUCT_VIEWS;