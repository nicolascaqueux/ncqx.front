import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "../../lib/i18nContext";
import { SchemeProvider } from "../../lib/schemeContext";
import GoToContent from "../../components/GoToContent";
import Newsletter from "../../components/Newsletter";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import RouteHandler from "../RouteHandler";

const App = () => (
    <BrowserRouter>
        <SchemeProvider>
            <I18nProvider>
                <GoToContent />
                <Header />
                <Main className="min-h-[750px]">
                    <RouteHandler />
                </Main>
                <Newsletter />
                <Footer />
            </I18nProvider>
        </SchemeProvider>
    </BrowserRouter>
);

export default App;
