import { gql } from "@apollo/client";

const REGISTER_USER = gql`
    mutation registerUser(
        $firstName: String!,
        $lastName: String!,
        $address: String!,
        $email: String!,
        $password: String!,
        $phone: String!,
    ){
        registerUser(
            firstName: $firstName
            lastName: $lastName
            address: $address
            email: $email
            password: $password
            phone: $phone
        ){
            id 
            firstName 
            lastName 
            email 
            phone
        }
    }
`;

export default REGISTER_USER;