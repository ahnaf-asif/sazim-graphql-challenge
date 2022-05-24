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

export default UPDATE_PRODUCT;