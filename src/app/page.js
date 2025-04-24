import {
  About,
  FAQs,
  Features,
  Footer,
  Header,
  Join,
  Mechanism,
  NavBar,
  Team,
  Testimonials,
} from "../../components";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <About />
      <Features />
      <Mechanism />
      <Team />
      <FAQs />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}
