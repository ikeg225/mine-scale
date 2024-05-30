interface ProblemStatementSectionProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

export default function ProblemStatementSection({
  elementRef,
}: ProblemStatementSectionProps) {
  return (
    <section className="hero flex flex-col items-center justify-center gap-10 bg-green py-28 px-24 rounded-3xl">
      <h1 className="text-7xl font-bold text-primary">
        <span className="text-darkGreen">Web scraping</span> doesn't have to be
        this hard.
      </h1>
      <div ref={elementRef}>
        <ul className="text-5xl font-bold text-primary">
          <li>&#x2022; Costly</li>
          <li>&#x2022; Frequent blocks</li>
          <li>&#x2022; Proxy management</li>
          <li>&#x2022; Complex browser fingerprinting</li>
        </ul>
      </div>
    </section>
  );
}
