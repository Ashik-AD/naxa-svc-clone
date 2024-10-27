import Container from "./container";

function CallToAction() {
  return (
    <Container>
      <article className="flex flex-col gap-8 pt-16 pb-8 md:max-w-[750px] 2xl:max-w-[80%]">
        <p className="text-sm font-semibold text-orange-400">SERVICES</p>
        <h1 className="text-4xl font-normal text-slate-800 tracking-wide sm:text-[40px] xl:text-5xl 2xl:text-6xl">
          At <span className="cto__highlight"> NAXA</span>, we work on{" "}
          <span className="cto__highlight">ideas</span>; ideas that can provide
          <span className="cto__highlight"> simple solutions</span> to{" "}
          <span className="cto__highlight">complex problems</span>.
        </h1>
        <p className="font-medium leading-6 sm:leading-8 md:w-[90%] 2xl:max-w-[750px] xl:text-xl">
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </article>
    </Container>
  );
}

export default CallToAction;
