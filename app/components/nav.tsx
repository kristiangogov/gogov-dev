import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import Image from "next/image";

const navItems = {
  "/about": { name: "about" },
  "/projects": { name: "projects" },
  "/blog": { name: "blog" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold flex gap-2">
            <Image
              src="/favicon-light.svg"
              alt="logo"
              width={25}
              height={25}
              priority
              className="hidden dark:block"
            />

            <Image
              src="/favicon-dark.svg"
              alt="logo"
              width={25}
              height={25}
              priority
              className="block dark:hidden"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-4 md:mt-0 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle hover:underline relative"
            >
              {name}
            </Link>
          ))}
        </div>
          <ThemeSwitch />
      </div>
    </nav>
  );
}
