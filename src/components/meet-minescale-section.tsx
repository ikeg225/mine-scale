import FeatureItem from "@/components/feature-item";

export default function MeetMineScaleSection() {
  return (
    <div className="sm:container md:px-0">
      <div className="bg-primary md:py-20 md:px-16 py-20 rounded-3xl container flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="md:w-2/3">
          <h1 className="md:text-6xl text-5xl font-bold mt-3">
            Meet Minescale
          </h1>
          <p className="mt-5">
            Whether you&apos;re an indie developer or a large team, Minescale
            has you covered. Our service handles sourcing high-quality proxies,
            proxy management, session management, proxy rotation, fingerprint
            management, and much more. All these complexities of web scraping
            are simplified into a single API that integrates seamlessly with
            your existing projects. We take care of the headaches of web
            scraping, so you can focus on what matters for your project.
          </p>
        </div>
        <div className="shrink-0 md:w-1/3 h-full flex flex-col gap-2">
          <FeatureItem text="High quality proxy management" />
          <FeatureItem text="Request header and browser fingerprint management" />
          <FeatureItem text="Lightning-fast data retrieval" />
          <FeatureItem text="Single API supporting GET and POST requests" />
          <FeatureItem text="Completely free" />
        </div>
      </div>
    </div>
  );
}
