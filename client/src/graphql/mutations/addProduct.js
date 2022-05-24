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
            title
            description
            price
            rent
            views 
            status
            rentPaymentPeriod
            createdAt
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

export default ADD_PRODUCT;