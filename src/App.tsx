import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
import { TiArrowRight, TiArrowUp } from "react-icons/ti";
import { Navbar } from "./components/navbar";

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
      <ServiceList />
      <ScrollTopButton />
    </>
  );
}

export default App;

type Service = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  icon: string;
  photo: string;
  service_order: number;
};
function ServiceList() {
  const [list, setList] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let fetchServiceList = null;

    fetchServiceList = async () => {
      try {
        setLoading(true);
        let res = await fetch(
          "https://admin.naxa.com.np/api/services?format=json",
        );
        let data = (await res.json()) as Service[];
        let transformData = data.sort((x, y) => {
          if (x.service_order < y.service_order) {
            return -1;
          }
          return 1;
        });
        setList(transformData);
      } catch (err: any) {
        if (err?.message) {
          setError(err?.message);
          return;
        }
      } finally {
        setLoading(false);
      }
    };
    fetchServiceList();
    return () => {
      fetchServiceList = null;
    };
  }, []);

  return (
    <section
      className="py-24 relative z-10 min-h-screen overflow-hidden"
      style={{ background: "#f4f4f4" }}
    >
      <Container className="flex flex-col gap-y-28 z-10">
        {loading ? <h2>Loading...</h2> : null}
        {error ? <h2>{error}</h2> : null}
        {list?.map((service) => <ServiceItem key={service.id} {...service} />)}
      </Container>
      <BackgroundsImage />
    </section>
  );
}

function ServiceItem(props: Service) {
  return (
    <div className="service_item grid grid-cols-1 gap-y-6 items-center lg:gap-y-auto lg:grid-cols-2">
      <figure className="flex items-center">
        <img
          src={props.icon}
          alt={`${props.title} banner`}
          className="item__banner h-full w-full"
        />
      </figure>
      <article className="item__info flex flex-col items-center mx-auto md:max-w-lg lg:max-w-full lg:items-start gap-6">
        <img src={props.photo} alt={`icon`} className="max-w-12" />
        <h2 className="service__title text-2xl lg:text-3xl text-center lg:text-left font-semibold">
          {props.title}
        </h2>
        <div
          className="text-medium text-center lg:text-left text-lg leading-6"
          dangerouslySetInnerHTML={{ __html: props.description1 }}
        ></div>
        {props.description2 && (
          <div
            className="flex flex-col gap-3 leading-6 bg-[#e9ebff] text-sm 2xl:text-base p-4 rounded-lg"
            dangerouslySetInnerHTML={{ __html: props.description2 }}
          ></div>
        )}
      </article>
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`container px-4 mx-auto sm:px-8 xl:px-4 2xl:px-0 w-full sm:max-w-[46rem] md:max-w-[960px] lg:max-w-[1100px] min-[1400px]:max-w-[1300px] 2xl:max-w-[1400px] ${className || ""}`}
    >
      {children}
    </div>
  );
}

function BackgroundsImage() {
  return (
    <>
      <img
        src="../public/pattern_1.svg"
        className="absolute top-0 right-0 -z-10"
      />
      <img
        src="../public/pattern_2.svg"
        className="absolute left-0 -z-10"
        style={{ top: "20%" }}
      />
      <img
        src="../public/pattern_3.png"
        className="absolute -z-10"
        style={{ top: "33%", right: "-33%" }}
      />
      <img
        src="../public/pattern_4.svg"
        className="absolute left-0 bottom-0 -z-10"
      />
    </>
  );
}

function ScrollTopButton() {
  let btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.onscroll = function () {
      if (btnRef.current) {
        if (window.scrollY > 400) {
          btnRef.current.style.bottom = "24px";
        } else {
          btnRef.current.style.bottom = "-60px";
        }
      }
    };
  }, [btnRef.current]);

  function handleScrollTop() {
    scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="fixed flex -bottom-16 transition-bottom duration-300 right-6 z-10 h-12 w-12 items-center justify-center rounded-3xl bg-orange-400 hover:bg-orange-300"
      ref={btnRef}
      onClick={handleScrollTop}
    >
      <i className="flex">
        <TiArrowUp size={24} />
      </i>
    </button>
  );
}
