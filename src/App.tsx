import { TiArrowRight, TiArrowUp } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../public/logo.png";
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

import iconAbout from "../public/icons/about.svg";
import iconTeam from "../public/icons/team.svg";
import iconWorkwithus from "../public/icons/workwithus.png";
import iconAchievement from "../public/icons/achievement.svg";
import iconEvent from "../public/icons/events.svg";
import iconMedia from "../public/icons/media.svg";
import iconPublication from "../public/icons/publications.svg";
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

const navList = [
  { label: "Service", path: "/service" },
  {
    label: "Portfolio",
    subNav: [
      { label: "General", path: "/portfolio/keyhighlight" },
      { label: "International", path: "/showcase/all" },
    ],
  },
  {
    label: "Company",
    subNav: [
      {
        label: "About us",
        path: "/about",
        icon: iconAbout,
      },
      {
        label: "Team",
        path: "/team",
        icon: iconTeam,
      },
      {
        label: "Work with us",
        path: "/workwithus",
        icon: iconWorkwithus,
      },
      {
        label: "Awards & Achievements",
        path: "/awards-and-achievement",
        icon: iconAchievement,
      },
    ],
  },
  { label: "GeoAI", path: "/geoai" },
  {
    label: "Events & Media",
    subNav: [
      { label: "Events", path: "/events/all", icon: iconEvent },
      { label: "Media", path: "/medias/all", icon: iconMedia },
      {
        label: "Publications",
        path: "/publications/all",
        icon: iconPublication,
      },
    ],
  },
  { label: "Blogs", path: "/blogs/all" },
];

function Navbar() {
  // -Let's talk ()
  let drawerRef = useRef<HTMLDivElement>(null);
  function handleOpenSidebarDrawer() {
    console.log("hello");
    if (drawerRef?.current) {
      drawerRef.current.classList.toggle("drawer-active");
    }
  }
  return (
    <nav className="navbar">
      <Container className="flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo of Naxa pvt.ltd" className="max-w-28" />
        </a>
        <div
          className="nav_list_wrapper fixed -right-40 w-0 max-w-72 h-screen top-0 p-6 pt-16 bg-yellow-500 lg:relative lg:right-auto lg:max-w-full lg:w-auto lg:h-auto lg:bg-transparent lg:p-0 z-20"
          ref={drawerRef}
        >
          <ul className="flex flex-col lg:flex-row justify-center">
            {navList.map((nav, idx) => (
              <NavItem key={idx} {...nav} />
            ))}
          </ul>
          <button
            className="nav_btn_close lg:hidden"
            onClick={handleOpenSidebarDrawer}
          >
            <div className={`bar bar_first`}></div>
            <div className={`bar bar_last`}></div>
          </button>
          <div className="overlay fixed w-screen h-screen bg-yellow-300 top-0 right-0 -z-10 lg:hide"></div>
        </div>
        <a href={"/contact/imbusiness"}>
          <button className="group flex items-center justify-center h-8 bg-yellow-300 px-6 text-xs text-blue-600 font-semibold sm:text-sm sm:w-36 lg:h-10 hover:bg-orange-400">
            Let's Talk
            <i className="flex invisible -ml-6 text-2xl transition-m duration-200 opacity-0 group-hover:ml-1 group-hover:opacity-100 group-hover:visible">
              <TiArrowRight />
            </i>
          </button>
        </a>
        <button
          className="text-yellow-500 lg:hidden"
          onClick={handleOpenSidebarDrawer}
        >
          <CgMenuRightAlt size={32} />
        </button>
      </Container>
    </nav>
  );
}

type NavItem = {
  label: string;
  path?: string;
  icon?: string;
  subNav?: NavItem[];
};

function NavItem(props: NavItem) {
  if (props?.subNav) {
    return (
      <li className="nav__item group relative" tabIndex={0}>
        <span className="flex items-center gap-4 justify-between text-sm font-medium xl:text-base py-2 px-4 text-nowrap cursor-pointer">
          <span>{props.label}</span>
          <i className="group-hover:-rotate-180 flex transition-transform duration-200">
            <FaAngleDown />
          </i>
        </span>
        <div
          className="child__nav__wrapper absolute left-0 top-100 pt-2 transition-opacity duration-300 opacity-0 pointer-events-none z-10 shadow-lg w-max"
          tabIndex={0}
        >
          <ul className="subnav relative bg-white rounded-lg overflow-hidden">
            {props.subNav.map((nav, idx) => (
              <NavItem key={idx} {...nav} />
            ))}
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav__item cursor-pointer">
      <a
        href={props.path}
        className="relative flex gap-4 items-center px-4 py-2 text-sm font-medium text-nowrap xl:text-base"
      >
        {props.icon && (
          <img src={props.icon} className="w-6" alt={props.label} />
        )}
        {props.label}
      </a>
    </li>
  );
}

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
