"use client";

import React, { useRef, useEffect } from "react";
import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ProblemStatementSection from "@/components/problem-statement-section";
import TextCardSection from "@/components/text-card-section";
import GiveItATrySection from "@/components/give-it-a-try-section";
import { Icons } from "@/components/icons";
import MeetMineScaleSection from "@/components/meet-minescale-section";

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
              <MeetMineScaleSection />
              <div className="flex flex-col md:flex-row gap-5">
                <TextCardSection
                  backgroundColor="bg-darkGreen"
                  textColor=""
                  title="Seamless Integration"
                  iconColor="bg-foreground text-darkGreen"
                  Icon={Icons.flashlight}
                  description="Our intuitive API is designed to be easy to use, even for those with limited coding experience. Getting started is as simple as entering two lines of code. You can smoothly replace your current functionality with our API, ensuring that you get exactly the data you need."
                />
                <TextCardSection
                  backgroundColor="bg-lightGreen"
                  textColor="text-background"
                  descriptionColor="text-primary opacity-50"
                  title="Human-like Behavior"
                  iconColor="bg-primary text-lightGreen"
                  Icon={Icons.robot}
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
