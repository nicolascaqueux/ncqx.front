import { useSearchParams } from "react-router-dom";

const useFiltersVariables = () => {
    const [searchParams] = useSearchParams();

    // Extract active filters from URL
    const activeFilters = {};
    for (const [key, value] of searchParams.entries()) {
        if (value === "true") {
            activeFilters[key] = true;
        }
    }

    // Convert to format your GraphQL server expects
    return Object.keys(activeFilters).length
        ? {
              filters: {
                  categories: {
                      name: {
                          in: Object.keys(activeFilters),
                      },
                  },
              },
          }
        : {};
};

export default useFiltersVariables;
