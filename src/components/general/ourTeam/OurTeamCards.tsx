import React from "react";
import { teamMember1Img } from "@/assets";
import OurTeamCard from "./OurTeamCard";

const ourTeamData = [
  {
    name: "Jean Paul Paulynice",
    position: "Founder, CEO",
    image: teamMember1Img,
    intro:
      "Teacher, Author, serial entrepreneur, Founder of Empowering Confident Youth",
    linkedInUrl: "https://www.linkedin.com/in/jeanpaulpaulynice",
  },
];

const OurTeamCards = () => {
  return (
    <>
      <div className="flex flex-row gap-6">
        {ourTeamData.map((member, index) => (
          <OurTeamCard key={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default OurTeamCards;
