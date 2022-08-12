import { gql, useQuery } from '@apollo/client'

const GET_CHARCTER = gql`
query GetCharacter($id: ID!){
    character(id:$id){
        name
        id
        image
        episode {
            name
            episode
        }
    }
}
`
export const useCharacterr = (id) => {
    const { data, error, loading } = useQuery(GET_CHARCTER, {
        variables: {
            id
        }
    })
    return {
        data,
        error,
        loading
    }
}