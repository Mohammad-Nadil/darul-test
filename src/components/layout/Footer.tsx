"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiYoutube,
  FiChevronRight,
} from "react-icons/fi";
import Container from "./Container";
import { siteConfig } from "@/src/config/site";


type FooterLinkProps = {
  href: string;
  text: string;
};

type SocialIconProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <li>
    <Link
      href={href}
      className="group flex w-fit items-center gap-1 text-sm font-sans font-light text-muted transition-colors duration-300 hover:text-primary"
    >
      <FiChevronRight className="h-3.5 w-3.5 -translate-x-1.5 text-primary opacity-50 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {text}
      </span>
    </Link>
  </li>
);

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-primary-light text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-primary hover:text-white"
  >
    {icon}
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cleanData = {
    explore: "অন্যান্য পেজ",
    contact: "যোগাযোগ",
    location: "আমাদের অবস্থান",
    rights: "সর্বস্বত্ব সংরক্ষিত।",

    links: [
      {
        href: "/about",
        text: "আমাদের সম্পর্কে",
      },
      {
        href: "/admissions",
        text: "ভর্তি তথ্য",
      },
      {
        href: "/academics",
        text: "একাডেমিকস",
      },
      {
        href: "/notices",
        text: "নোটিশ বোর্ড",
      },
      {
        href: "/results",
        text: "ফলাফল",
      },
    ],
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-primary/5 pt-10 text-foreground">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="select-none text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
              {siteConfig.name}
            </div>

            <p className="max-w-sm border-l-2 border-primary/30 pl-4 font-sans text-sm font-light leading-relaxed text-muted">
              "{siteConfig.slogan}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.facebook && (
                <SocialIcon
                  href={siteConfig.socials.facebook}
                  label="ফেসবুক"
                  icon={<FiFacebook className="h-4 w-4" />}
                />
              )}

              {siteConfig.socials.youtube && (
                <SocialIcon
                  href={siteConfig.socials.youtube}
                  label="ইউটিউব"
                  icon={<FiYoutube className="h-4 w-4" />}
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-6">
            <h4 className="relative mb-6 select-none font-sans text-xs font-bold tracking-widest text-foreground">
              {cleanData.explore}

              <span className="absolute bottom-[-6px] left-0 h-0.5 w-6 rounded-full bg-accent" />
            </h4>

            <ul className="flex flex-col gap-3.5">
              {cleanData.links.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  text={link.text}
                />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:ml-4">
            <h4 className="relative mb-6 select-none font-sans text-xs font-bold tracking-widest text-foreground">
              {cleanData.contact}

              <span className="absolute -bottom-2 left-0 h-0.5 w-6 rounded-full bg-accent" />
            </h4>

            <ul className="flex flex-col gap-4.5">
              {siteConfig.contact.address && (
                <li className="group flex items-start gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light transition-colors duration-300 group-hover:bg-primary/10">
                    <FiMapPin className="h-4 w-4 shrink-0 text-primary" />
                  </div>

                  <span className="pt-0.5 font-sans text-sm font-light leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
                    {siteConfig.contact.address}
                  </span>
                </li>
              )}

              {siteConfig.contact.phone && (
                <li className="group flex items-center gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light transition-colors duration-300 group-hover:bg-primary/10">
                    <FiPhone className="h-4 w-4 shrink-0 text-primary" />
                  </div>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="pt-0.5 font-sans text-sm font-light text-muted transition-colors duration-300 group-hover:text-foreground"
                  >
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </li>
              )}

              {siteConfig.contact.email && (
                <li className="group flex items-center gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light transition-colors duration-300 group-hover:bg-primary/10">
                    <FiMail className="h-4 w-4 shrink-0 text-primary" />
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all pt-0.5 font-sans text-sm font-light text-muted transition-colors duration-300 group-hover:text-foreground"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-col lg:col-span-3">
            <h4 className="relative mb-6 select-none font-sans text-xs font-bold tracking-widest text-foreground">
              {cleanData.location}

              <span className="absolute bottom-[-6px] left-0 h-0.5 w-6 rounded-full bg-accent" />
            </h4>

            {siteConfig.contact.googleMapsLink && (
              <div className="group relative h-36 w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-500 hover:shadow-md">
                <iframe
                  src={siteConfig.contact.googleMapsLink}
                  title="দারুল হুদা মাদরাসার অবস্থান"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-3 sm:flex-row">
          <p className="select-none text-center font-sans text-xs font-light text-muted sm:text-left">
            &copy; {currentYear} {siteConfig.name}. {cleanData.rights}
          </p>

          <div className="flex items-center gap-6 font-sans text-xs font-light text-muted">
            <Link
              href="/privacy-policy"
              className="relative transition-colors duration-300 hover:text-primary"
            >
              গোপনীয়তা নীতি

              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
            </Link>

            <Link
              href="/terms"
              className="relative transition-colors duration-300 hover:text-primary"
            >
              শর্তাবলী

              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
            </Link>

            <Link
              href="/login"
              className="relative transition-colors duration-300 hover:text-primary"
            >
              লগইন

              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}