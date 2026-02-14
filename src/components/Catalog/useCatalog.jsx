import { useQuery } from "@apollo/client";
import useFiltersVariables from "../../hooks/useFiltersVariables";

const useCatalog = ({ query }) => {
    const variables = useFiltersVariables();

    const { loading, error, data } = useQuery(query, {
        variables,
    });

    return { data, error, loading };
};

export default useCatalog;
