"use client";
import React, { useState } from "react";
import TermsContainer from "../general/TermsContainer";
import TermsSidebar from "../general/TermsSidebar";
import TermsSidebarItem from "../general/TermsSidebarItem";
import TermsOfServiceContent from "./TermsOfServiceContent";

const termsOfServiceTitles = [
  {
    text: "Arbitration Agreement & Waiver of Collective Action Rights",
    id: "arbitration-agreement",
  },
  { text: "Choice of Law", id: "choice-of-law" },
  {
    text: "Acceptance of Terms",
    id: "acceptance-of-terms",
  },
  { text: "User Conduct", id: "user-conduct" },
  { text: "Telephonic Communications", id: "telephonic-communications" },
  { text: "Privacy", id: "privacy" },
  { text: "Services", id: "services" },
  {
    text: "No Commercial Use of Services",
    id: "no-commercial-use-of-services",
  },
  {
    text: "Right to Deny Access and to Modify the Services",
    id: "right-to-deny-access",
  },
  { text: "Indemnification", id: "indemnification" },
  { text: "Disclaimer of Warranties", id: "disclaimer-of-warranties" },
  { text: "Limitation of Liability", id: "limitation-of-liability" },
  { text: "Exclusions and Limitations", id: "exclusions-and-limitations" },
  { text: "Notice", id: "notice" },
  {
    text: "Trademark and Intellectual Property",
    id: "trademark-and-intellectual-property",
  },
  {
    text: "Copyright or Intellectual Property Complaints",
    id: "copyright-or-intellectual-property-complaints",
  },
  { text: "General Information", id: "general-information" },
  {
    text: "Additional Terms for Specific Services",
    id: "additional-terms-for-specific-services",
  },
  {
    text: "Contact Us",
    id: "contact-us",
  },
];

const TermsOfServiceClientPage = () => {
  let urlHash = "";
  if (typeof window !== "undefined") {
    urlHash = window.location.hash === "" ? "" : window.location.hash.slice(1);
  }

  const [currentTerm, setCurrentTerm] = useState(urlHash);

  return (
    <>
      <TermsContainer>
        <TermsSidebar>
          <div className="flex flex-col gap-4 lg:gap-6">
            {termsOfServiceTitles.map(item => (
              <TermsSidebarItem
                key={item.id}
                text={item.text}
                scrollToId={item.id}
                currentTerm={currentTerm}
                setCurrentTerm={setCurrentTerm}
              />
            ))}
          </div>
        </TermsSidebar>
        <TermsOfServiceContent />
      </TermsContainer>
    </>
  );
};

export default TermsOfServiceClientPage;
