import Link from "next/link";
import React from "react";

type FooterLinkItemProps = {
  label: string;
  href: string;
};

const FooterLinkItem = ({ label, href }: FooterLinkItemProps) => {
  return (
    <>
      <li className="group">
        <Link href={href} className="capitalize group-hover:underline">
          {label}
        </Link>
      </li>
    </>
  );
};

export default FooterLinkItem;
