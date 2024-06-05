"use client";

import React from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import Link from "next/link";

export default function DocumentationPage() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-foreground text-primary">
      <SiteHeader />
      <div className="py-10 container md:px-14">
        <div className="md:container flex flex-col gap-10">
          <div className="font-roobert text-center">
            <h1 className="text-6xl font-semibold">The Docs</h1>
            <p>How to use Minescale</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">1. Getting started</h2>
            <p>
              To use Minescale, you'll need an API key. This key helps us track
              usage and monitor abuse. Simply enter your email into{" "}
              <Link href="/get-started" className="underline">
                this form
              </Link>
              , and we'll send the key to your inbox. If you forget your API key
              or need to change it, re-enter your email in the form to receive a
              new one. For any issues obtaining an API key, please contact us at
              info@minescale.net.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">
              2. What Minescale can be used for
            </h2>
            <p>
              Minescale is an ideal starter tool for your scraping needs,
              offering simple GET and POST requests with advanced proxy
              management and browser fingerprinting. It's perfect if you:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Don't want to deal with the headaches of proxies and fingerprint
                management
              </li>
              <li>Want to test a new idea without the hassle of setup</li>
              <li>Frequently call APIs at a large scale</li>
              <li>
                Find alternative tools/solutions too expensive and don't need
                their extra functionality
              </li>
              <li>
                Need to scrape websites that don't require JavaScript or solving
                captchas
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">3. Minescale limitations</h2>
            <p>
              Minescale uses public proxies scraped from the web, allowing us to
              offer this service for free but with certain limitations. These
              proxies cannot be fully trusted, so your data may be monitored;
              avoid sending private or personal information. Since these proxies
              are publicly available and often abused, response times may
              sometimes be slow. However, our proxy pool is continuously updated
              with fresh proxies, minimizing speed issues.
            </p>
            <p>
              Additionally, Minescale doesn't load JavaScript, solve captchas,
              or support browser interactions. If the data you need requires any
              of these functionalities, Minescale won't be able to access it.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">4. Example usage</h2>
            <p>
              To use Minescale, make a POST request to our API at{" "}
              <span className="underline">https://api.minescale.net</span>.
              Include your API key and a list of URLs you'd like to scrape. It's
              recommended to batch multiple URLs in a single API call to reduce
              response time since each request has a startup delay as we
              allocate a new crawler.
            </p>
            <p>
              Not all requests will be successfully fetched. In such cases, the
              unsuccessful request URLs will not be included in the response.
            </p>
            <p>
              Here's an example using Minescale in Python with the requests
              library:
            </p>
            <pre className="language-python">
              <code>
                {`import json
import requests
response = requests.post("https://api.minescale.net", json={
    "apiKey": "your_api_key_here", 
    "requests": [
        {"url": "https://example.com"}, 
        {
            "url": "https://example.com/jobs",
            "method": "POST",
            "payload": json.dumps({"limit": 20, "offset": 0}),
            "headers": {"Content-Type": "application/json", "Another header": "header content"}
        }
    ]
})

print(response.json())`}
              </code>
            </pre>
            <p>
              In this example, we send a batch request containing one GET
              request and one POST request. For the GET request, only the URL is
              required. For the POST request, the URL and method are required.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">5. Parameters and types</h2>
            <p>GET Requests:</p>
            <ul className="list-disc list-inside">
              <li>url: (string) The URL to scrape.</li>
            </ul>
            <p>POST Requests (4 supported parameters):</p>
            <pre className="language-json">
              <code>
                {`{
    "url": "string", // The URL to scrape.
    "method": "string", // Must be set to "POST" for POST requests.
    "payload": "string", // The body of the POST request.
    "headers": {"string": "string"} // Custom headers to send. Autogenerated headers are also included.
}`}
              </code>
            </pre>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">
              6. Troubleshooting and support
            </h2>
            <p>
              If you encounter any issues with accessing data, we recommend
              first testing your requests with Postman to ensure they work
              correctly. If you still experience problems, please reach out to
              us at info@minescale.net.
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
