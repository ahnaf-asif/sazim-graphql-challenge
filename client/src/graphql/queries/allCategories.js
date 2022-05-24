import {gql} from "@apollo/client";

const ALL_CATEGORIES = gql`
    query{
        allCategories{
            id 
            name
        }
    }
`;

export default ALL_CATEGORIES;