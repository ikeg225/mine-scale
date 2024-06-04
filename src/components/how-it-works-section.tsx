interface HowItWorksSectionProps {
  elementRef: React.RefObject<HTMLSpanElement>;
}

export default function HowItWorksSection({
  elementRef,
}: HowItWorksSectionProps) {
  return (
    <section className="hero flex flex-col items-center justify-center gap-10 bg-lightPurple md:py-28 md:px-24 py-20 container rounded-3xl">
      <h1 className="md:text-7xl text-6xl font-bold text-primary">
        <span ref={elementRef} className="text-darkPurple">
          2 steps
        </span>{" "}
        to get started.
      </h1>
    </section>
  );
}
