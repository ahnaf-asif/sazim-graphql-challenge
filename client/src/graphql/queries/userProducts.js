import {gql} from "@apollo/client";

const USER_PRODUCTS = gql`
    query userProducts( $userId: Int! ){
        userProducts( userId: $userId ){ 
            id
            title
            description
            createdAt
            price
            rent
            views 
            status
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


export default USER_PRODUCTS;