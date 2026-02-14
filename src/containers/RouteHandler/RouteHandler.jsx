import { Routes, Route } from "react-router-dom";
import Post from "../../pages/BlogPost";

// Auto-import all page components from subfolders
const pages = import.meta.glob("../../pages/**/*.jsx", { eager: true });

const routes = Object.entries(pages).map(([path, module]) => {
    // Extract the file name and remove the extension
    const name = path
        .split("/")
        .pop()
        .replace(/\.jsx$/, "");

    // Generate the route path based on the folder name
    const routePath =
        name.toLowerCase() === "home" ? "/" : `/${name.toLowerCase()}`;

    return (
        <Route
            key={routePath}
            path={routePath}
            element={module.default ? <module.default /> : null}
        />
    );
});

const RouteHandler = () => (
    <Routes>
        {routes}
        <Route path="/blog/:slug" element={<Post />} />
        <Route
            path="*"
            element={<div className="p-8 text-center">404 Not Found</div>}
        />
    </Routes>
);

export default RouteHandler;
