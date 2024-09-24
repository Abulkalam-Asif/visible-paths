"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type BlogShareBtnsProps = {
  title: string;
};

const BlogShareBtns = ({ title }: BlogShareBtnsProps) => {
  const pathName = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${pathName}`;

  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl,
  )}&title=${encodeURIComponent(title)}`;
  const twitterUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(
    currentUrl,
  )}&text=${encodeURIComponent(title)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl,
  )}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    currentUrl,
  )}&description=${encodeURIComponent(title)}`;

  return (
    <div className="w-full flex items-center justify-end gap-2 xs:gap-4 lg:gap-5">
      <span className="text-lg font-bold md:text-xl lg:text-1.5xl">Share:</span>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent1 p-1.5 rounded-full">
        <FaLinkedinIn size={16} className="w-4 h-auto text-white lg:w-5" />
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent1 p-1.5 rounded-full">
        <FaXTwitter size={16} className="w-4 h-auto text-white lg:w-5" />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent1 p-1.5 rounded-full">
        <FaFacebookF size={16} className="w-4 h-auto text-white lg:w-5" />
      </a>
    </div>
  );
};

export default BlogShareBtns;
