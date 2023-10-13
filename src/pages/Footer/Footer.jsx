import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#000] py-20 flex w-full">
      <div className="mx-auto text-center md:text-left grid md:grid-cols-2 xl:grid-cols-4 px-4 xl:justify-items-center gap-6">
        <div className="text-[#FFF] text-xs">
          <h3 className="text-xl font-medium mb-3">Types of Events</h3>
          <p className="mt-1">Weeding Parties</p>
          <p className="mt-1">Birthday Parties</p>
          <p className="mt-1">Anniversary Parties</p>
          <p className="mt-1">Engagement Parties</p>
          <p className="mt-1">Retirement Parties</p>
          <p className="mt-1">Baby SHower Parties</p>
        </div>
        <div className="text-[#FFF] text-xs">
          <h3 className="text-xl font-medium mb-3">Start Planning</h3>
          <p className="font-medium mb-3">Explore Resorts</p>
          <p className="mt-1">
            Walt Disney World Resort, Florida:{" "}
            <span className="font-bold">1 (321) 939-7129</span>
          </p>
          <p className="mt-1">
            Disneyland Resort, California:{" "}
            <span className="font-bold">1 (714) 520-7025</span>
          </p>
          <p className="mt-1">
            Aulani, A Disney Resort & Spa, {"Hawai'i: "}
            <span className="font-bold">1 (321) 939-4031</span>
          </p>
          <p className="mt-1">
            Hong Kong Disneyland Resort:{" "}
            <span className="font-bold">(852) 3510-6868</span>
          </p>
          <p className="mt-1">
            Disneyland Paris:{" "}
            <span className="font-bold">00 (33) 1 60-45-75-00</span>
          </p>
        </div>
        <div className="text-[#FFF] text-xs">
          <h3 className="text-xl font-medium mb-3">Creative Resources</h3>
          <p className="mt-1">Immersive Experiences</p>
          <p className="mt-1">Multimedia Production</p>
          <p className="mt-1">Content & Solutions</p>
          <p className="mt-1">Branding & Sponsorship</p>
        </div>
        <div className="text-[#FFF] text-xs">
          <h3 className="text-xl font-medium mb-3">Stay Connected</h3>
          <p className="mt-1">Blog</p>
          <p className="mt-1">News Updates</p>
          <p className="mt-1">Email Sign-Up</p>
          <div>
            <p className="text-lg font-medium">Learn More</p>
            <div className="text-xl mt-3 flex gap-2">
              <FaFacebookSquare />
              <BsGithub />
              <FaTwitterSquare />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;