import { useSearchParams } from "react-router-dom";
import { useI18n } from "../../lib/i18nContext";
import { filtersMap } from "../../utils/filtersMap";
import Field from "../Field";

const Filters = ({ page }) => {
    const { t } = useI18n();

    const filters = filtersMap.filter((o) => o.page === page);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        const filterObj = filters.find((f) => f.id === name);
        const queryKey = filterObj.search.replace("?", "");

        const newParams = new URLSearchParams(searchParams);
        checked ? newParams.set(queryKey, "true") : newParams.delete(queryKey);
        setSearchParams(newParams);
    };

    return (
        <div className="filters max-w-[800px] mx-auto mb-12">
            <div className="text-sm flex justify-center items-center gap-4">
                <form className="w-[100%]">
                    <fieldset className="flex">
                        <legend className="sr-only">Filter</legend>
                        <div className="bordered-b w-[100%] flex justify-center gap-8 mx-auto p-4">
                            {filters.map((filter) => (
                                <Field
                                    checked={
                                        searchParams.get(
                                            filter.search.replace("?", ""),
                                        ) === "true"
                                    }
                                    key={filter.id}
                                    id={filter.id}
                                    type={filter.type}
                                    label={t(filter.id)}
                                    handleFieldChange={handleFilterChange}
                                />
                            ))}
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Filters;
