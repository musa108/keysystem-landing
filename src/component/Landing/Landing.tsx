import Navbar from "../Header/Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import GettingStarted from "./GettingStarted";
import Hero from "./Hero";
import Offerings from "./Offerings";
import Partners from "./Partners";
import Process from "./Process";
import Representation from "./Represent";
import Services from "./Services";
import TechPartners from "./TechPartners";

const Landing = ({}) => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Services />
      <Offerings />
      <Representation />
      <ContactUs />
      <Partners />
      <Process />
      <TechPartners />
      <GettingStarted />
      <Footer/>
    </main>
  );
};
export default Landing;
