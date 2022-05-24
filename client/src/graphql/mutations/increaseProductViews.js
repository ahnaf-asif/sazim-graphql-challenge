import { gql } from "@apollo/client";

const INCREASE_PRODUCT_VIEWS = gql`
    mutation increaseProductViews(
        $productId: Int!
    ){
        increaseProductViews(
            productId: $productId
        ){ 
            id 
            title
            description
            price
            rent
            views
            status
            rentPaymentPeriod
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

export default INCREASE_PRODUCT_VIEWS;