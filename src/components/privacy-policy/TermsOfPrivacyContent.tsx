import React from "react";
import Li from "../general/Li";
import H3 from "../general/H3";
import TermDiv from "../general/TermDiv";

const TermsOfPrivacyContent = () => {
  return (
    <>
      <div className="md:w-2/3 md:pl-4 md:text-lg lg:text-xl xl:text-1.5xl">
        <p className="font-normal mt-2 md:mt-3 lg:mt-4">
          Welcome to VisiblePaths! Your privacy is important to us. This Privacy
          Policy Notice (“Notice”) outlines how we collect, use, disclose,
          retain, and protect your information when you visit our website or use
          our mobile application (collectively, the “Site”). By accessing and
          using our Site, you agree to the practices described in this Notice.
        </p>
        <TermDiv id="information-we-collect">
          <H3 text="1. Information We Collect" />
          <p>
            <b>Information You Provide:</b> We may collect information you
            provide directly to us, such as when you:
          </p>
          <ul className="font-semibold ml-4">
            <Li text="Create an account or register on our Site" />
            <Li text="Use our services, including car selection, financing advice, and insurance information" />
            <Li text="Communicate with us via email, chat, or other means" />
            <Li text="Participate in surveys or provide feedback" />
          </ul>
          <p>
            This information may include your name, email address, phone number,
            mailing address, financial details, and any other information you
            choose to provide.
          </p>
          <p>
            <b>Automatically Collected Information:</b> We may collect certain
            information automatically when you visit our Site, such as:
          </p>
          <ul className="ml-4 font-medium">
            <Li text="IP address" />
            <Li text="Browser type and version" />
            <Li text="Device type and operating system" />
            <Li text="Pages you view and links you click on our Site" />
            <Li text="The referring URL or web page that led you to our Site" />
          </ul>
          <p>
            <b>Information from Third Parties:</b> We may receive information
            about you from third parties, such as social media platforms,
            financial institutions, and partners. This information can help us
            improve our services and enhance your experience.
          </p>
        </TermDiv>
        <TermDiv id="how-we-use-your-information">
          <H3 text="2. How We Use Your Information" />
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="ml-4 font-medium">
            <Li text="To provide, maintain, and improve our services" />
            <Li text="To personalize your experience on our Site" />
            <Li text="To communicate with you, including responding to your inquiries and providing customer support" />
            <Li text="To process transactions and send related information, including purchase confirmations and invoices" />
            <Li text="To send you marketing communications, updates, and promotional offers" />
            <Li text="To analyze usage patterns and improve our Site and services" />
            <Li text="To detect, prevent, and address technical issues, security incidents, and fraudulent activity" />
          </ul>
        </TermDiv>
        <TermDiv id="how-we-share-your-information">
          <H3 text="3. How We Share Your Information" />
          <p>
            We do not sell your personal information. We may share your
            information in the following circumstances:
          </p>
          <ul className="ml-4">
            <Li
              text={
                <>
                  <b>With Service Providers:</b> We may share information with
                  third-party service providers who perform services on our
                  behalf, such as payment processing, data analysis, and
                  customer support.
                </>
              }
            />
            <Li
              text={
                <>
                  <b>With Partners:</b> We may share information with our
                  partners, including car dealerships, financial institutions,
                  and insurance providers, to facilitate the services you
                  request.
                </>
              }
            />
            <Li
              text={
                <>
                  <b>For Legal Reasons:</b> We may disclose information if
                  required by law or if we believe that such action is necessary
                  to comply with legal processes, protect our rights, or
                  safeguard the safety of our users.
                </>
              }
            />
          </ul>
        </TermDiv>
        <TermDiv id="your-choices">
          <H3 text="4. Your Choices" />
          <p>
            You have several choices regarding the information we collect and
            how it is used:
          </p>
          <ul className="ml-4">
            <Li
              text={
                <>
                  <b>Account Information:</b> You can access, update, or delete
                  your account information by logging into your account on our
                  Site.
                </>
              }
            />
            <Li
              text={
                <>
                  <b>Cookies and Tracking Technologies:</b> Most web browsers
                  are set to accept cookies by default. You can adjust your
                  browser settings to refuse cookies or alert you when cookies
                  are being sent.
                </>
              }
            />
            <Li
              text={
                <>
                  <b>Marketing Communications:</b> You can opt-out of receiving
                  marketing emails from us by following the unsubscribe
                  instructions included in each email or by contacting us
                  directly.
                </>
              }
            />
          </ul>
        </TermDiv>
        <TermDiv id="data-security">
          <H3 text="5. Data Security" />
          <p>
            We implement a variety of security measures to protect your personal
            information. However, no data transmission over the internet or
            electronic storage system can be guaranteed to be 100% secure.
            Therefore, while we strive to protect your personal information, we
            cannot ensure its absolute security.
          </p>
        </TermDiv>
        <TermDiv id="data-retention">
          <H3 text="6. Data Retention" />
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Notice, unless a longer
            retention period is required or permitted by law.
          </p>
        </TermDiv>
        <TermDiv id="childrens-privacy">
          <H3 text="7. Children's Privacy" />
          <p>
            Our Site is not intended for children under the age of 18. We do not
            knowingly collect personal information from children under 18. If we
            become aware that we have collected personal information from a
            child under 18, we will take steps to delete such information.
          </p>
        </TermDiv>
        <TermDiv id="change-to-this-notice">
          <H3 text="8. Changes to this Notice" />
          <p>
            We may update this Notice from time to time. If we make significant
            changes, we will notify you by posting a notice on our Site or by
            sending you an email. Your continued use of our Site after such
            changes constitutes your acceptance of the updated Notice.
          </p>
        </TermDiv>
        <TermDiv id="contact-us">
          <H3 text="9. Contact Us" />
          <p>
            If you have any questions or concerns about this Privacy Notice,
            please contact us at,
            <br />
            <span className="font-bold text-accent1">
              privacy@VisiblePaths.com
            </span>
          </p>
          <H3
            text="Last updated September 24, 2024."
            className="mt-2 text-black md:mt-3 lg:mt-4"
          />
        </TermDiv>
      </div>
    </>
  );
};

export default TermsOfPrivacyContent;
