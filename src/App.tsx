import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main/index"; // Ensure this points to your Main index
import Navbar from "./components/Navbar";

/**
 * App Component
 *
 * The root component of the application. It sets up the main layout,
 * including the Navbar, Main content (with routing), and Footer.
 * It also wraps the application in a BrowserRouter to enable client-side routing.
 */
export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}
