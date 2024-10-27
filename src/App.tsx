import { Navbar } from "./components/navbar";
import { ServiceSection } from "./components/service-section";
import ScrollTopButton from "./components/scroll-button";
import TopBanner from "./components/top-banner";
import CallToAction from "./components/call-to-action";

function App() {
  return (
    <>
      <header
        className="flex flex-col gap-3 bg-cover pb-12"
        style={{
          background: `url(../public/header_banner.jpg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundColor: "#fff",
        }}
      >
        <TopBanner />
        <Navbar />
        <CallToAction />
      </header>
      <ServiceSection />
      <ScrollTopButton />
    </>
  );
}

export default App;
