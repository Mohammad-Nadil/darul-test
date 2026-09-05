import React from "react";
import { IoIosMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { siteConfig } from "@/src/config/site";
import Container from "../layout/Container";

const TopBar = () => {
  return (
    <div className="hidden sm:block w-full bg-primary text-white border-b border-white/10 py-2">
      <Container className="flex justify-between items-center text-xs font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 opacity-85 hover:opacity-100 hover:text-accent transition-all duration-200 cursor-pointer"
          >
            <IoIosMail className="text-xl text-accent shrink-0" />
            <span>{siteConfig.contact.email}</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:text-accent transition-all duration-200 cursor-pointer"
          >
            <FiPhone className="text-sm text-accent shrink-0" />
            <span>
              {siteConfig.contact.phoneFormatted || siteConfig.contact.phone}
            </span>
          </a>
        </div>

        <div className="font-serif tracking-wider text-accent drop-shadow-xs select-none">
          {siteConfig.slogan}
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
