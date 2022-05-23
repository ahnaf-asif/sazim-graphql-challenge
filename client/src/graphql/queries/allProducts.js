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
            createdAt 
            categories {
              id 
              name
            }
        }
    }
`;

export default ALL_PRODUCTS;