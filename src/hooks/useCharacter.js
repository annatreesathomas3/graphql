import { useQuery, gql } from '@apollo/client'

const GET_CHARCTERS = gql`

    query{
        characters{
            results{
                id
                name
                image
            }
        }
    }
`

export const useCharacter = () => {
    const { error, data, loading } = useQuery(GET_CHARCTERS);

  return {
    error,
    loading,
    data
  };
}
