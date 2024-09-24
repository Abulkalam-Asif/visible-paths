import React from "react";
import FooterLinkItem from "./FooterLinkItem";

type FooterLinksListProps = {
  linksData: {
    heading: string;
    links: {
      label: string;
      href: string;
    }[];
  };
};

const FooterLinksList = ({ linksData }: FooterLinksListProps) => {
  return (
    <>
      <div className="text-white">
        <h4 className="text-2xl font-bold mb-4">{linksData.heading}</h4>
        <ul className="font-medium space-y-2">
          {linksData.links.map(({ label, href }, index) => (
            <FooterLinkItem key={index} label={label} href={href} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinksList;
