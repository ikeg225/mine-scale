import Link from "next/link";
import { Icons } from "@/components/icons";

export default function GetStartedSection() {
  return (
    <Link href="/get-started" className="hover-arrow">
      <div className="container md:px-0">
        <div className="md:py-20 md:px-16 py-20 container rounded-3xl flex flex-col md:flex-row gap-20 bg-primary-foreground md:h-[30rem]">
          <div className="text-primary md:self-end md:w-2/3">
            <h1 className="md:text-6xl text-5xl font-bold">Get Started</h1>
            <p className="opacity-50 mt-3">
              Sign up today to receive your free API key and start scraping data
              effortlessly.
            </p>
          </div>
          <div className="md:w-1/3 h-full">
            <div className="p-3 rounded-full w-fit bg-yellow text-primary mr-auto md:ml-auto arrow-icon">
              <Icons.arrow className="h-14 w-14" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
