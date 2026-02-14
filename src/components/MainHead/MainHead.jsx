import Breadcrumbs from "../Breadcrumbs";

const MainHead = ({ title }) =>
    title && (
        <>
            <div className="max-w-[800px] mx-auto pb-6 main-head">
                <Breadcrumbs />
                <h1 className="text-3xl mx-auto">{title}</h1>
            </div>
        </>
    );

export default MainHead;
