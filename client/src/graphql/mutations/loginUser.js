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
            address 
            email 
            phone 
            password
        }
    }
        
`;

export default LOGIN_USER;