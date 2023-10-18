import React from "react";
import { LiaHouzz } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { members } from "./../Data/Team";

const OurTeam = () => {
  const boardMembers = members.filter((member) => member.board === true);
  const management = members.filter((member) => member.manager === true);

  const handleIndex = (index) => {
    sessionStorage.setItem("index", index);
  };

  const MemberCard = ({ members }) => {
    return members.map((member, index) => (
      <div className="h-fit">
      <div key={index} className="lg:w-[32rem] w-full bg-slate-700 relative group">
        <div className="group-hover:absolute group-hover:top-0 group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:bg-black/20 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in"></div>
        <div className="absolute h-0 w-full bg-primary bottom-[4rem] group-hover:h-16 duration-300">
          <div className="hidden group-hover:flex gap-2 justify-center items-center h-16 transition-all opacity-0 group-hover:opacity-100 duration-300 ">
            {member.twitter ? (
              <a
                href={member.twitterLink}
                className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-primary transition duration-300"
              >
                <FaTwitter />
              </a>
            ) : (
              ""
            )}
            <Link
              to={`/team-member/${member.name}`}
              onClick={() => handleIndex(index)}
              className="p-2 rounded-full border text-white border-white hover:bg-white hover:text-primary transition duration-300"
            >
              <LiaHouzz />
            </Link>
          </div>
        </div>
        <img src={member.image} className="lg:h-[40rem] object-cover w-full" />
        <div className="py-2">
          <p className="text-center text-white text-xl">{member.name}</p>
          <p className="text-center mx-auto xs text-gray-100/80">
            {member.tile}
          </p>
        </div>
      </div>
      </div>
    ));
  };

  return (
    <div className="md:px-20 px-5">
      <div className="py-40">
        <div className="flex justify-center">
          <h2 className="text-3xl text-center pb-5 border-b-2 border-b-[#e93e21] w-fit">
            Board of Directors
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-5 w-full">
          <MemberCard members={boardMembers} />
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <h2 className="text-3xl text-center pb-5 border-b-2 border-b-primary w-fit">
            Management Team
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-5 w-full mb-20">
          <MemberCard members={management} />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
