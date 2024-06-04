import FeatureItem from "@/components/feature-item";

export default function MeetMineScaleSection() {
  return (
    <div className="container md:px-0">
      <div className="bg-primary md:py-20 md:px-16 py-20 rounded-3xl container flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="md:w-2/3">
          <h1 className="md:text-6xl text-5xl font-bold mt-3">
            Meet Minescale
          </h1>
          <p className="mt-5">
            Minescale simplifies web scraping with a single, easy-to-use API. No
            more dealing with blocks or unreliable proxies—we handle automatic
            proxy rotation, filter out bad proxies, and mimic human browsing
            behavior to keep your scraping undetected. Start extracting data
            effortlessly and for free, focusing on what matters while we take
            care of the complexities.
          </p>
        </div>
        <div className="shrink-0 md:w-1/3 h-full flex flex-col gap-2">
          <FeatureItem text="Public proxy scraping" />
          <FeatureItem text="Proxy rotation and quality control" />
          <FeatureItem text="Request header and browser fingerprint management" />
          <FeatureItem text="Single API supporting GET and POST requests" />
          <FeatureItem text="Completely free" />
        </div>
      </div>
    </div>
  );
}
