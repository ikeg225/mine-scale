import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({ elementRef }: HeroSectionProps) {
  return (
    <section className="container hero flex flex-col items-center justify-center h-full gap-10">
      <h1 className="text-7xl font-bold font-clashdisplay text-center">
        Effortless Web Scraping with a Single API
      </h1>
      <p>
        No more blocks. No more proxy headaches. Get the data you need,
        instantly.
      </p>
      <div className="flex flex-row gap-5" ref={elementRef}>
        <Button variant="secondary" size="xlg">
          Start for Free
        </Button>
        <Button variant="default" size="xlg">
          Learn More
        </Button>
      </div>
    </section>
  );
}
