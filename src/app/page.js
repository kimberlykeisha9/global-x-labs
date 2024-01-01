"use-client";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Services from "./components/services";
import Solutions from "./components/solutions";
import Team from "./components/team";

export default function Home() {
  return (
    <div>
      <Introduction />
      <br />
      <br />
      <About />
      <br />
      <br />
      <Solutions />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <Footer />
    </div>
  );
}
