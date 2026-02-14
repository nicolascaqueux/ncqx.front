import CatalogContentEmpty from "./CatalogContent/CatalogContentEmpty";
import CatalogContentError from "./CatalogContent/CatalogContentError";
import CatalogContentLoading from "./CatalogContent/CatalogContentLoading";
import useCatalog from "./useCatalog";

const Catalog = ({ dataKey, query, render }) => {
    const { data, error, loading } = useCatalog({ query });

    if (loading) return <CatalogContentLoading />;
    if (error) return <CatalogContentError />;

    if (!data || !data?.[dataKey] || !data?.[dataKey]?.length)
        return <CatalogContentEmpty />;

    return render(data?.[dataKey]);
};

export default Catalog;
