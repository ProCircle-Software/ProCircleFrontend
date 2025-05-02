/* eslint-disable @next/next/no-img-element */
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
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745544291/EscapingCircle_olxsap.svg"
        alt="escaping circle"
        className="esc-circle"
      />
      <div className="faq-glow"></div>
      <NavBar />
      <Header />
      <About />
      <Features />
      <Mechanism />
      <Team />
      <FAQs />
      <Testimonials />
      <div className="tg test-glow-1"></div>
      <div className="tg test-glow-2"></div>
      <Join />
      <Footer />
    </div>
  );
}
