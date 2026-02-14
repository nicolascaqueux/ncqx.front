import Field from "../Field/Field";

const BlogFilters = () => (
    <Filters>
        <div className="flex gap-8">
            <Field type="checkbox" label="Photography" />
            <Field type="checkbox" label="Technology" />
            <Field type="checkbox" label="Lifestyle" />
        </div>
    </Filters>
);

export default BlogFilters;
