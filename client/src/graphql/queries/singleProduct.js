import {gql} from "@apollo/client";

const SINGLE_PRODUCT = gql`
    query singleProduct( $productId: Int! ){
        singleProduct( productId: $productId ){ 
            id
            title
            description
            createdAt
            price
            rent
            rentPaymentPeriod
            categories {
                id
                name
            }
            user {
                id
            }
        }
    }
`;


export default SINGLE_PRODUCT;