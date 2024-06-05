import TextBubble from "@/components/text-bubble";

interface ProblemStatementSectionProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

export default function ProblemStatementSection({
  elementRef,
}: ProblemStatementSectionProps) {
  return (
    <section className="hero flex flex-col items-center justify-center gap-10 bg-green md:py-28 md:px-24 py-20 container rounded-3xl">
      <h1 className="md:text-7xl text-6xl font-bold text-primary">
        <span className="text-darkGreen">Web scraping</span> doesn&apos;t have
        to be this hard.
      </h1>
      <div ref={elementRef} className="flex flex-row gap-2 flex-wrap">
        <TextBubble text="Expensive" />
        <TextBubble text="Frequent blocks" />
        <TextBubble text="Proxy management" />
        <TextBubble text="TLS & HTTP/2 fingerprinting" />
        <TextBubble text="Browser Headers" />
        <TextBubble text="Cookie Headers" />
        <TextBubble text="User Agent" />
        <TextBubble text="Canvas fingerprinting" />
      </div>
    </section>
  );
}
