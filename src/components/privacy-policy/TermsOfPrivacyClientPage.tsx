"use client";
import React, { useState } from "react";
import TermsContainer from "../general/TermsContainer";
import TermsSidebar from "../general/TermsSidebar";
import TermsSidebarItem from "../general/TermsSidebarItem";
import TermsOfPrivacyContent from "./TermsOfPrivacyContent";

const termsOfPrivacyTitles = [
  { text: "Information We Collect", id: "information-we-collect" },
  { text: "How We Use Your Information", id: "how-we-use-your-information" },
  {
    text: "How We Share Your Information",
    id: "how-we-share-your-information",
  },
  { text: "Your Choices", id: "your-choices" },
  { text: "Data Security", id: "data-security" },
  { text: "Data Retention", id: "data-retention" },
  { text: "Children's Privacy", id: "childrens-privacy" },
  {
    text: "Change to this Notice",
    id: "change-to-this-notice",
  },
  { text: "Contact Us", id: "contact-us" },
];

const TermsOfPrivacyClientPage = () => {
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
            {termsOfPrivacyTitles.map(item => (
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
        <TermsOfPrivacyContent />
      </TermsContainer>
    </>
  );
};

export default TermsOfPrivacyClientPage;
