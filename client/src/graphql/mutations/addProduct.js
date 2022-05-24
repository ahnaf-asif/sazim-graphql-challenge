import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
    mutation addProduct(
        $userId: Int!,
        $title: String!,
        $description: String!,
        $price: Int!,
        $rent: Int!,
        $rentPaymentPeriod: String!,
        $categories: [Int]!
    ){
        addProduct(
            userId: $userId
            title: $title
            description: $description
            price: $price
            rent: $rent
            rentPaymentPeriod: $rentPaymentPeriod
            categories: $categories
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

export default ADD_PRODUCT;