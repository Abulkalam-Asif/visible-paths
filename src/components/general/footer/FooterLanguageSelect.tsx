"use client";
import React, { useEffect } from "react";

const FooterLanguageSelect = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it,pt,ht",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        );
      }
    };

    // Check if the script is already loaded
    if (!document.querySelector("script[src*='translate.google.com']")) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Assign callback function to window
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      // If script is already loaded, initialize the widget
      googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  );
};

export default FooterLanguageSelect;
