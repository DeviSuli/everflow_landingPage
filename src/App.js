import AboutUs from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import SolutionsCards from "./components/Solutions";
import Goals from "./components/Goals";
import ContactUs from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <SolutionsCards />
      <AboutUs />
      <Goals />
      <ContactUs />
    </div>
  );
}

export default App;
