import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({ elementRef }: HeroSectionProps) {
  return (
    <section className="container h-full flex flex-col">
      <div className="hero flex flex-col items-center justify-center gap-10 h-5/6">
        <h1 className="md:text-7xl text-6xl font-bold font-clashdisplay text-center">
          Effortless Web Scraping with a Single API
        </h1>
        <p className="text-center">
          No more blocks. No more proxy headaches. Get the data you need,
          instantly.
        </p>
        <div className="flex flex-row gap-5" ref={elementRef}>
          <Link href="/get-started">
            <Button variant="secondary" size="xlg">
              Start for Free
            </Button>
          </Link>
          {/* <Button variant="default" size="xlg">
            Learn More
          </Button> */}
        </div>
      </div>
      <p className="text-center opacity-50 text-xs">
        Minescale utilizes public proxies. Assume all data is monitored.
        Response times may vary. JavaScript not supported.
      </p>
    </section>
  );
}
