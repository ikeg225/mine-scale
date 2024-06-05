"use client";

import React, { useRef, useEffect } from "react";
import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ProblemStatementSection from "@/components/problem-statement-section";
import TextCardSection from "@/components/text-card-section";
import GiveItATrySection from "@/components/give-it-a-try-section";
import { Icons } from "@/components/icons";
import MeetMineScaleSection from "@/components/meet-minescale-section";
import HowItWorksSection from "@/components/how-it-works-section";
import GetStartedSection from "@/components/get-started-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  const elementRefGreen = useRef<HTMLDivElement>(null);
  const elementRefGreen2 = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const elementRefPurple = useRef<HTMLSpanElement>(null);
  const elementRefPurple2 = useRef<HTMLParagraphElement>(null);
  const [backgroundColor, setBackgroundColor] = React.useState("bg-background");

  useEffect(() => {
    const handleGreenIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBackgroundColor("bg-green");
        }
      });
    };

    const handleHeroIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBackgroundColor("bg-background");
        }
      });
    };

    const handlePurpleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBackgroundColor("bg-lightPurple");
        }
      });
    };

    const observerGreen = new IntersectionObserver(handleGreenIntersection, {
      threshold: 1,
    });

    const observerHero = new IntersectionObserver(handleHeroIntersection, {
      threshold: 1,
    });

    const observerPurple = new IntersectionObserver(handlePurpleIntersection, {
      threshold: 0.5,
    });

    if (elementRefGreen.current) {
      observerGreen.observe(elementRefGreen.current);
    }

    if (elementRefGreen2.current) {
      observerGreen.observe(elementRefGreen2.current);
    }

    if (heroRef.current) {
      observerHero.observe(heroRef.current);
    }

    if (elementRefPurple.current) {
      observerPurple.observe(elementRefPurple.current);
    }

    if (elementRefPurple2.current) {
      observerPurple.observe(elementRefPurple2.current);
    }

    return () => {
      if (elementRefGreen.current) {
        observerGreen.unobserve(elementRefGreen.current);
      }
      if (heroRef.current) {
        observerHero.unobserve(heroRef.current);
      }
      if (elementRefPurple.current) {
        observerPurple.unobserve(elementRefPurple.current);
      }
    };
  }, []);

  return (
    <main className={`h-screen transition-colors ${backgroundColor}`}>
      <SiteHeader />
      <div className={`h-full transition-colors ${backgroundColor}`}>
        <HeroSection elementRef={heroRef} />
        <div className={`transition-colors ${backgroundColor} pb-10`}>
          <div
            className={`max-w-screen-lg relative mx-auto transition-colors ${backgroundColor}`}
          >
            <div
              className={`flex flex-col gap-10 transition-colors ${backgroundColor}`}
            >
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
                    Icon={Icons.fingerprint}
                    description="Minescale mimics browser headers and TLS fingerprinting, ensuring your scraping is undetectable, minimizing blocks for more efficient data collection."
                    elementRef={elementRefGreen2}
                  />
                </div>
                <GiveItATrySection />
              </div>
              <HowItWorksSection elementRef={elementRefPurple} />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <TextCardSection
                    backgroundColor="bg-darkPurple"
                    textColor=""
                    title="Get your API Key"
                    iconColor="bg-foreground text-darkPurple"
                    Icon={Icons.key}
                    description={`<a href="/get-started">Sign up</a> with your email, and we'll send your API key directly to your inbox. Your API key helps us track usage, prevent abuse, and understand how you use our product to continuously improve it.`}
                  />
                  <TextCardSection
                    backgroundColor="bg-grey"
                    textColor=""
                    title="Start Scraping"
                    iconColor="bg-foreground text-grey"
                    Icon={Icons.robot}
                    description={`Refer to our <a href="/documentation">documentation</a> for examples and details on API usage, including available types and parameters. Contact us at info@minescale.net for common questions, concerns, or limitations.`}
                    elementRef={elementRefPurple2}
                  />
                </div>
                <GetStartedSection />
              </div>
            </div>
          </div>
        </div>
        <div className={`transition-colors ${backgroundColor}`}>
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
