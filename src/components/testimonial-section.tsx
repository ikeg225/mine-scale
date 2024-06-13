import Image from "next/image";
import ethanPicture from "../images/ethan-picture.jpg";

export default function TestimonialSection() {
  return (
    <div className="sm:container md:px-0">
      <div className="bg-foreground text-primary px-10 py-10 rounded-3xl container flex flex-col sm:flex-row gap-5">
        <div className="shrink-0 flex flex-row gap-2 items-center sm:items-start">
          <Image
            src={ethanPicture}
            alt="Ethan's picture"
            width={250}
            height={250}
            className="rounded-full w-9 h-9 md:w-14 md:h-14"
          />
          <p className="font-bold opacity-50 text-sm sm:hidden">
            Ethan, founder at Notify.Careers
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            &quot;From my experience, web scraping is complex, and affordable
            solutions are rare. Minescale offers a great alternative for
            large-scale scraping tasks. We send over 500k requests daily to
            Minescale, and it&apos;s fast and inexpensive.&quot;
          </p>
          <p className="font-bold opacity-50 text-sm hidden sm:block">
            - Ethan, founder at Notify.Careers
          </p>
        </div>
      </div>
    </div>
  );
}
