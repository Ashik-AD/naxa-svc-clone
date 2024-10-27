import { useEffect, useState } from "react";
import Container from "./container";

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


export function ServiceSection() {
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

