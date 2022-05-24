import {gql} from "@apollo/client";

const ALL_PRODUCTS = gql`
    query{
        allProducts{
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

export default ALL_PRODUCTS;