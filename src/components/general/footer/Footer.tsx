import { logoWhiteShortImg } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLinksList from "./FooterLinksList";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocialLink from "./FooterSocialLink";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLanguageSelect from "./FooterLanguageSelect";

const footerLinksData = {
  company: {
    heading: "Company",
    links: [
      {
        label: "about",
        href: "/about-us",
      },
      {
        label: "solutions",
        href: "/solutions",
      },
      {
        label: "blogs",
        href: "/blogs",
      },
      {
        label: "our team",
        href: "/our-team",
      },
    ],
  },
  sales: {
    heading: "Sales",
    links: [
      {
        label: "contact us",
        href: "/contact-us",
      },
      {
        label: "request a demo",
        href: "/request-demo",
      },
      // {
      //   label: "pricing",
      //   href: "/pricing",
      // },
    ],
  },
};

const Footer = () => {
  return (
    <>
      <footer className="relative z-0 bg-black bg-footer-img bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-footer-img before:bg-no-repeat before:bg-center before:bg-cover after:absolute after:inset-0 after:bg-black/80">
        <div className="relative z-[1] max-w-8xl mx-auto grid grid-cols-2 gap-x-4 gap-y-12 justify-center py-12 px-4 md:px-8 lg:py-16 lg:grid-cols-5 xl:grid-cols-4 xl:px-12 xl:py-20">
          <div className="self-center col-span-2 md:col-span-1">
            <Image
              src={logoWhiteShortImg}
              width={500}
              height={500}
              className="h-20 w-auto sm:h-28 xl:h-32"
              priority
              alt="Logo"
            />
          </div>
          <FooterLinksList linksData={footerLinksData.company} />
          <FooterLinksList linksData={footerLinksData.sales} />
          <FooterNewsletter />
        </div>
        <hr className="relative z-[1] w-full border-t-2 border-t-white mb-6" />
        <div className="text-white relative z-[1] max-w-8xl mx-auto grid grid-cols-1 gap-4 pb-6 px-4 md:px-8 lg:grid-cols-2 xl:px-12">
          <div className="flex items-center justify-between lg:justify-start lg:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <FooterSocialLink
                href="https://www.instagram.com/visiblepaths4/?hl=en"
                icon={
                  <FaInstagram className="w-3 h-auto text-black xs:w-4 sm:w-5" />
                }
              />
              <FooterSocialLink
                href="https://x.com/VisiblePaths?t=mgtZZOUliUgiPFK2TCw09g&s=07"
                icon={
                  <FaXTwitter className="w-3 h-auto text-black xs:w-4 sm:w-5" />
                }
              />
              <FooterSocialLink
                href="https://www.facebook.com/VisiblePaths"
                icon={
                  <FaFacebookF className="w-3 h-auto text-black xs:w-4 sm:w-5" />
                }
              />
              <FooterSocialLink
                href="https://www.linkedin.com/company/visiblepaths"
                icon={
                  <FaLinkedinIn className="w-3 h-auto text-black xs:w-4 sm:w-5" />
                }
              />
              <FooterSocialLink
                href="https://www.youtube.com/@VisiblePaths"
                icon={
                  <FaYoutube className="w-3 h-auto text-black xs:w-4 sm:w-5" />
                }
              />
            </div>
            <FooterLanguageSelect />
          </div>
          <div className="flex flex-col gap-y-2 gap-x-2 items-center justify-center text-sm xs:text-base sm:flex-row lg:justify-end xl:text-lg xl:gap-x-3">
            <span>&copy; 2024 VisiblePaths, Inc.</span>
            <span>All rights reserved.</span>
            <div className="flex flex-row gap-2">
              <Link href="/terms-of-service" className="hover:underline">
                Terms
              </Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
