import Link from "next/link";
import React from "react";

type FooterSocialLinkProps = {
  icon: JSX.Element;
  href: string;
};

const FooterSocialLink = ({ icon, href }: FooterSocialLinkProps) => {
  return (
    <>
      <Link href={href} target="_blank" className="bg-white rounded-full p-1.5 sm:p-2">
        {icon}
      </Link>
    </>
  );
};

export default FooterSocialLink;
