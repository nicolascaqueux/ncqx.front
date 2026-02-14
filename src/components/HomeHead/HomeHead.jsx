const HomeHead = ({ title, description }) => (
    <div id="home-head" className="max-w-[800px] mx-auto mb-12">
        <div>
            {title && <h1 className="mb-12">{title}</h1>}
            {description && <p>{description}</p>}
        </div>
    </div>
);

export default HomeHead;
