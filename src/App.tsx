import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </main>
            <Footer />
        </div>
    );
}
