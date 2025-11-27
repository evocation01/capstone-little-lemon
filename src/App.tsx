import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main/index"; // Ensure this points to your Main index
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}
