import { gql } from "@apollo/client";

const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $productId: Int!,
        $title: String!,
        $description: String!,
        $price: Int!,
        $rent: Int!,
        $rentPaymentPeriod: String!,
        $categories: [Int]!
    ){
        updateProduct(
            productId: $productId
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

export default UPDATE_PRODUCT;