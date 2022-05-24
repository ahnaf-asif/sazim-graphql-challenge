import {gql} from "@apollo/client";

const ALL_PRODUCTS = gql`
    query{
        allProducts{
            id 
            title 
            description
            price
            rent
            rentPaymentPeriod 
            views
            status
            createdAt 
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

export default ALL_PRODUCTS;