"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import Container from "../layout/Container";
import Button from "./Button";

import logo from "@/public/images/brand/logo.webp";

const menuItems = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "একাডেমিকস", href: "/academics" },
  { name: "ভর্তি তথ্য", href: "/admissions" },
  { name: "নোটিশ", href: "/notices" },
  { name: "ফলাফল", href: "/results" },
  { name: "যোগাযোগ", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md">
        <nav aria-label="প্রধান নেভিগেশন">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <Link
                href="/"
                className="flex shrink-0 items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                  <Image
                    src={logo}
                    alt="দারুল হুদা মাদরাসা"
                    fill
                    priority
                    sizes="(max-width: 640px) 40px, 48px"
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-serif font-bold leading-tight tracking-wide text-primary text-xl">
                    দারুল হুদা মাদরাসা
                  </span>

                  <span className="mt-0.5 text-[10px] sm:text-xs  tracking-wide  ">
                    ইসলামী ও আধুনিক শিক্ষা প্রতিষ্ঠান
                  </span>
                </div>
              </Link>

              <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative py-2  font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ))}

                <Button
                  label="ভর্তি আবেদন"
                  size="sm"
                  href="/admissions"
                  borderColor="var(--color-accent)"
                  flairColor="var(--color-accent)"
                  textColor="var(--color-primary)"
                  textHoverColor="#ffffff"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-primary transition-colors hover:bg-primary/5 lg:hidden"
                aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </Container>

          {isOpen && (
            <div className="absolute left-0 top-full w-full border-b border-border bg-background shadow-xl lg:hidden">
              <Container>
                <div className="space-y-1 px-1 py-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-3">
                    <Button
                      label="ভর্তি আবেদন"
                      size="md"
                      href="/admissions"
                      className="w-full"
                      borderColor="var(--color-accent)"
                      flairColor="var(--color-accent)"
                      textColor="#000000"
                      textHoverColor="#000000"
                    />
                  </div>
                </div>
              </Container>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}