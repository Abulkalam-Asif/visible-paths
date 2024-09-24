import VideoSec from "@/components/home/VideoSec";
import HeroSec from "@/components/home/hero/HeroSec";
import ServicesSec from "@/components/home/ServicesSec";
import PricingSec from "@/components/general/PricingSec";
import ContactSec from "@/components/home/contact/ContactSec";
import UserJourneySec from "@/components/home/UserJourneySec";
import TestimonialsSec from "@/components/general/TestimonialsSec";
export default function Home() {
  return (
    <>
      <HeroSec />
      <VideoSec />
      <UserJourneySec />
      <ServicesSec />
      {/* <PricingSec /> */}
      <TestimonialsSec />
      <ContactSec />
    </>
  );
}
