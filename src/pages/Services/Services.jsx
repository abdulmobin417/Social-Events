import service1 from '../../assets/service-1.jpg'
import service2 from '../../assets/service-2.jpg'
import service3 from '../../assets/service-3.jpg'
import service4 from '../../assets/service-4.jpeg'
import service5 from '../../assets/service-5.jpg'
import service6 from '../../assets/service-6.jpeg'

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="max-w-[175px] text-3xl font-semibold text-center border-b-4 border-[#1D9BF0] pb-4">
        Our Services
      </h1>
      <p className="max-w-[900px] text-center mt-4 text-[#706F6F]">
        Our organizer offers comprehensive event planning services for weddings,
        birthdays, anniversaries, engagement parties, retirement parties, and
        baby showers. We handle everything from venue selection and decor to
        catering and entertainment, ensuring a memorable and stress-free
        celebration.
      </p>
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service1}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Weeding Parties
            </h1>
          </div>
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service2}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Birthday Parties
            </h1>
          </div>
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service3}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Anniversary Parties
            </h1>
          </div>
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service4}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Engagement Parties
            </h1>
          </div>
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service5}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Retirement Parties
            </h1>
          </div>
          <div className="w-[220px] flex flex-col items-center shadow-md border p-4 rounded-lg">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={service6}
              alt=""
            />
            <h1 className="text-[#000] text-xl font-semibold mt-3">
              Baby shower Parties
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;