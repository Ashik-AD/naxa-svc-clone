import { TiArrowRight } from "react-icons/ti";
import { Navbar } from "./components/navbar";
import { ServiceSection } from "./components/service-section";
import Container from "./components/container";
import ScrollTopButton from "./components/scroll-button";

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
        <a
          className="group flex items-center justify-center bg-yellow-400 min-h-10 py-2 px-4 text-center capitalize text-sm font-semibold text-slate-700 hover:text-blue-600 underline overflow-hidden"
          href="https://www.naxa.com.np/blog/unified-action-naxa-nepal-flying-labs-and-partners-respond-to-the-western-nepal-earthquake-2023-28"
        >
          <span>
            We have been working on several initiatives during the
            Jajarkot-Rukum Earthquake Response 2023. Check them out
          </span>
          <i className="flex invisible -ml-6 text-2xl transition-m duration-200 opacity-0 group-hover:ml-1 group-hover:opacity-100 group-hover:visible">
            <TiArrowRight size={24} />
          </i>
        </a>
        <Navbar />

        <Container>
          <article className="flex flex-col gap-8 pt-16 pb-8 md:max-w-[750px] 2xl:max-w-[80%]">
            <p className="text-sm font-semibold text-orange-400">SERVICES</p>
            <h1 className="text-4xl font-normal text-slate-800 tracking-wide sm:text-[40px] xl:text-5xl 2xl:text-6xl">
              At <span className="cto__highlight"> NAXA</span>, we work on{" "}
              <span className="cto__highlight">ideas</span>; ideas that can
              provide
              <span className="cto__highlight"> simple solutions</span> to{" "}
              <span className="cto__highlight">complex problems</span>.
            </h1>
            <p className="font-medium leading-6 sm:leading-8 md:w-[90%] 2xl:max-w-[750px] xl:text-xl">
              We work as a team to generate, explore, build and validate ideas.
              We also contextualize innovations around the world to find the
              best fitting solutions to local problems.
            </p>
          </article>
        </Container>
      </header>
      <ServiceSection />
      <ScrollTopButton />
    </>
  );
}

export default App;
