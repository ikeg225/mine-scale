import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="container md:px-14 w-full md:h-16 pt-10 pb-5 md:pb-0">
      <div className="md:container flex md:flex-row flex-col h-16 items-center md:space-x-4 justify-between text-primary opacity-50">
        <p className="font-semibold">© {new Date().getFullYear()} Minescale</p>
        <div className="flex md:flex-row flex-col md:gap-10 items-center">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href="mailto:info@minescale.net">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
