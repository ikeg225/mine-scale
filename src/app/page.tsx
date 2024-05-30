"use client";

import React, { useRef, useEffect } from "react";
import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ProblemStatementSection from "@/components/problem-statement-section";
import TextCardSection from "@/components/text-card-section";
import GiveItATrySection from "@/components/give-it-a-try-section";

export default function Home() {
  const elementRefGreen = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGreenIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.remove("bg-background");
          document.body.classList.add("bg-green");
        }
      });
    };

    const handleHeroIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add("bg-background");
          document.body.classList.remove("bg-green");
        }
      });
    };

    const observerGreen = new IntersectionObserver(handleGreenIntersection, {
      threshold: 1,
    });

    const observerHero = new IntersectionObserver(handleHeroIntersection, {
      threshold: 1,
    });

    if (elementRefGreen.current) {
      observerGreen.observe(elementRefGreen.current);
    }

    if (heroRef.current) {
      observerHero.observe(heroRef.current);
    }

    return () => {
      if (elementRefGreen.current) {
        observerGreen.unobserve(elementRefGreen.current);
      }
      if (heroRef.current) {
        observerHero.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <main className="h-screen">
      <SiteHeader />
      <div className="h-full">
        <HeroSection elementRef={heroRef} />
        <div className="max-w-screen-lg relative mx-auto">
          <div className="flex flex-col gap-10">
            <ProblemStatementSection elementRef={elementRefGreen} />
            <div className="flex flex-col gap-5">
              <TextCardSection
                backgroundColor="bg-primary"
                textColor=""
                title="Meet MineScale"
                description="MineScale simplifies web scraping with a single, easy-to-use API. No more dealing with blocks or unreliable proxies—we handle automatic proxy rotation, filter out bad proxies, and mimic human browsing behavior to keep your scraping undetected. Start extracting data effortlessly and for free, focusing on what matters while we take care of the complexities."
              />
              <div className="flex flex-row gap-5">
                <TextCardSection
                  backgroundColor="bg-darkGreen w-1/2"
                  textColor=""
                  title="Seamless Integration"
                  description="With MineScale, effortlessly scrape data worry-free. Our API seamlessly discovers high anonymity public proxies, rotates them, and filters out non-responsive or subpar proxies, ensuring uninterrupted access. Our intuitive API is tailored for ease of use, catering even to those with limited coding experience."
                />
                <TextCardSection
                  backgroundColor="bg-lightGreen w-1/2"
                  textColor="text-background"
                  descriptionColor="text-primary opacity-50"
                  title="Human-like Behavior"
                  description="MineScale mimics browser headers and TLS fingerprinting, ensuring your scraping is undetectable, minimizing blocks for more efficient data collection."
                />
              </div>
              <GiveItATrySection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
