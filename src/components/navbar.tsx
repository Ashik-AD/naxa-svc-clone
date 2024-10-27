import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";

import iconAbout from "../../public/icons/about.svg";
import iconTeam from "../../public/icons/team.svg";
import iconWorkwithus from "../../public/icons/workwithus.png";
import iconAchievement from "../../public/icons/achievement.svg";
import iconEvent from "../../public/icons/events.svg";
import iconMedia from "../../public/icons/media.svg";
import iconPublication from "../../public/icons/publications.svg";

import logo from "../../public/logo.png";
import Container from "./container";

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

export function Navbar() {
  let drawerRef = useRef<HTMLDivElement>(null);

  function handleOpenSidebarDrawer() {
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
            aria-label="Close navigation"
            className="nav_btn_close lg:hidden"
            onClick={handleOpenSidebarDrawer}
          >
            <div className={`bar bar_first`}></div>
            <div className={`bar bar_last`}></div>
          </button>
          <div className="overlay fixed w-screen h-screen bg-yellow-300 top-0 right-0 -z-10 lg:hide"></div>
        </div>
        <a href={"/contact/imbusiness"}>
          <button className="group flex items-center justify-center h-8 bg-yellow-300 px-6 text-xs text-blue-700 font-semibold sm:text-sm sm:w-36 lg:h-10 hover:bg-orange-400">
            Let's Talk
            <i className="flex invisible -ml-6 text-2xl transition-m duration-200 opacity-0 group-hover:ml-1 group-hover:opacity-100 group-hover:visible">
              <TiArrowRight />
            </i>
          </button>
        </a>
        <button
          aria-labelledby="Navigation drawer"
          title="Navigation menu"
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
          <img src={props.icon} className="w-6" alt={`${props.label} icon`} />
        )}
        {props.label}
      </a>
    </li>
  );
}
