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
              To use Minescale, you&apos;ll need an API key. This key helps us
              track usage and monitor abuse. Simply enter your email into{" "}
              <Link href="/get-started" className="underline">
                this form
              </Link>
              , and we&apos;ll send the key to your inbox. If you forget your
              API key or need to change it, re-enter your email in the form to
              receive a new one. For any issues obtaining an API key, please
              contact us at info@minescale.net.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">
              2. What Minescale can be used for
            </h2>
            <p>
              Minescale is an ideal tool for your scraping needs, offering
              simple GET and POST requests with advanced proxy management and
              browser fingerprinting. It&apos;s perfect if you:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Don&apos;t want to deal with the headaches of proxies and
                fingerprint management
              </li>
              <li>Want to test a new idea without the hassle of setup</li>
              <li>Frequently call APIs at a large scale</li>
              <li>Find alternative tools/solutions too expensive</li>
              <li>
                Need to scrape websites that don&apos;t require JavaScript or
                solving captchas
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">3. Minescale limitations</h2>
            <p>
              Minescale does not load JavaScript, solve captchas, or support
              browser interactions. If the data you need requires any of these
              functionalities, Minescale will not be able to access it. If
              you&apos;d like to see any of these features implemented, please
              reach out to us at info@minescale.net.
            </p>
            <p>
              To keep this service free to use, we limit users to 3,600 requests
              per hour (1 request per second).
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">4. Example usage</h2>
            <p>
              To use Minescale, make a POST request to our API at{" "}
              <span className="underline">https://api.minescale.net</span>.
              Include your API key and a list of URLs you&apos;d like to scrape.
              It&apos;s recommended to batch multiple URLs in a single API call
              to reduce response time since we handle requests asynchronously.
            </p>
            <p>
              Not all requests will be successfully fetched. In such cases, the
              unsuccessful request URLs will contain an errored status code and
              an error message.
            </p>
            <p>
              Here&apos;s an example using Minescale in Python with the requests
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
            "headers": {"Content-Type": "application/json"}
        }
    ]
})

print(response.json())

# [{'url': 'https://example.com',
#   'method': 'GET',
#   'headers': {},
#   'statusCode': 200,
#   'content': 'Some Text'},
#  {'url': 'https://example.com/jobs',
#   'method': 'POST',
#   'payload': '{"limit": 20, "offset": 0}',
#   'headers': {'Content-Type': 'application/json'},
#   'statusCode': 403,
#   'content': 'Some Error Message'}]`}
              </code>
            </pre>
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
