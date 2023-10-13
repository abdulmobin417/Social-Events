import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import team from "../../assets/team.jpg";
import Events from "../Event/Events";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Sponsor from "../Sponsor/Sponsor";

const Home = () => {
  const events = useLoaderData();
  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        <img
          className="h-[700px] object-cover w-full rounded-xl"
          src={banner}
          alt=""
        />
        <div className="bg-[#0000008d] h-full w-full absolute top-0 rounded-xl">
          <div className="absolute top-1/2 rounded-xl left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <p className="max-w-96 border-x-[12px] border-t-[12px] text-center text-white text-3xl font-bold p-8">
              Welcome to Social Events
            </p>
            <p className="text-white text-3xl lg:text-6xl text-center font-bold my-5">
              IF YOU CAN DREAM <br className="hidden xl:block"></br> IT, YOU CAN
              MAKE IT
            </p>
            <p></p>
            <p className="max-w-96 border-x-[12px] border-b-[12px] text-center text-white sm:text-3xl font-bold p-8">
              You can join us by{" "}
              <Link to="/" className="">
                <button className="text-white lg:text-xl font-semibold bg-[#2d97de] px-2 sm:px-6 py-3 rounded-lg hover:bg-[#4aa7e4]">
                  Book
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 flex flex-wrap gap-10 justify-center items-center mr-6">
        <div data-aos="fade-right">
          <p className="text-[#767676] mb-3">Greetings & welcome</p>
          <h2 className="text-[#444349] text-3xl mb-4 font-semibold">
            <span className="sm:border-b-4 border-[#1D9BF0] pb-4">About </span>
            The Event Organizer
          </h2>
          <p className="max-w-[580px] mt-16 leading-[20px] text-justify">
            Choose our social organizer for seamless event planning, efficient
            communication, and simplified coordination. We offer user-friendly
            features, robust organization tools, and a user-focused experience
            that ensures your events are stress-free and successful.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="bg-[#0000005d] relative w-[500px] h-[300px] rounded-xl shadow-2xl"
        >
          <img
            data-aos="fade-left"
            className="rounded-xl absolute h-full w-full left-6 bottom-6 object-cover"
            src={team}
            alt=""
          />
        </div>
      </div>
      <div className="my-20 flex flex-col items-center">
        <h1 className="text-4xl font-semibold border-b-4 border-[#1D9BF0] text-center w-[227px] pb-3 mb-12">
          Recent Events
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.slice(0, 6).map((aEvent) => (
            <Events key={aEvent.ID} aEvent={aEvent} />
          ))}
        </div>
      </div>
      <div className="my-20">
        <Services />
      </div>
      <div className="my-20">
        <Team />
      </div>
      <div className="my-20">
        <Sponsor />
      </div>
    </div>
  );
};

export default Home;
