import { useEffect } from "react";
import Container from "./container";
import { useAppSelector } from "../hooks/useStore";
import { useAppDispatch } from "../hooks/useDispatch";
import { fetchServiceListRequest } from "../store/service-actions";

import bg1URL from "../../public/pattern_1.svg";
import bg2URL from "../../public/pattern_2.svg";
import bg3URL from "../../public/pattern_3.png";
import bg4URL from "../../public/pattern_4.svg";

type Service = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  icon: string;
  photo: string;
  service_order: number;
};

export function ServiceItem(props: Service) {
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

function BackgroundsImage() {
  return (
    <>
      <img
        src={bg1URL}
        className="absolute top-0 right-0 -z-10"
        alt="background pattern"
      />
      <img
        src={bg2URL}
        className="absolute left-0 -z-10"
        alt="background pattern"
        style={{ top: "20%" }}
      />
      <img
        src={bg3URL}
        className="absolute -z-10"
        alt="background pattern"
        style={{ top: "33%", right: "-33%" }}
      />
      <img
        src={bg4URL}
        className="absolute left-0 bottom-0 -z-10"
        alt="background pattern"
      />
    </>
  );
}

export function ServiceSection() {
  const { loading, services, error } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchServiceListRequest());
  }, []);

  return (
    <section
      className="py-24 relative z-10 min-h-screen overflow-hidden"
      style={{ background: "#f4f4f4" }}
    >
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <h3 className="text-xl text-yellow-500">Loading...</h3>
        </div>
      ) : null}
      {error ? (
        <div className="flex items-center justify-center w-full h-screen">
          <h3 className="text-xl text-red-500">{error}</h3>
        </div>
      ) : null}
      {services?.length > 0 ? (
        <>
          <Container className="flex flex-col gap-y-28 z-10">
            {services?.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </Container>
          <BackgroundsImage />
        </>
      ) : null}
    </section>
  );
}
