import {gql} from "@apollo/client";

const SINGLE_PRODUCT = gql`
    query singleProduct( $productId: Int! ){
        singleProduct( productId: $productId ){ 
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


export default SINGLE_PRODUCT;