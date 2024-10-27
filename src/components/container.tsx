import { HTMLAttributes, ReactNode } from "react";

export default function Container({
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
