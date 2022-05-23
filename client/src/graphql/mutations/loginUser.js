import { gql } from "@apollo/client";

const LOGIN_USER = gql`
    mutation loginUser(
        $email: String!,
        $password: String!,
    ){
        loginUser(
            email: $email
            password: $password
        ){ 
            id 
            firstName
            lastName
            email 
            phone 
        }
    }
        
`;

export default LOGIN_USER;