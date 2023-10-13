import { Link, useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const events = useLoaderData();
  let { id } = useParams();
  const data = events.find((event) => event.ID === id);
  const { image, name, description, event_date, category, price } = data;

  console.log(data, id);
  return (
    <div className="container mx-auto px-8">
      <div className="mb-6">
        <img className="w-full object-cover rounded-lg" src={image} alt="" />
      </div>
      <div className="block sm:flex justify-between items-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-xl font-bold">Price: {price}</p>
      </div>
      <p className="mb-1 text-sm font-medium">Category: {category}</p>
      <p className="text-sm font-bold mb-6">Date: {event_date}</p>
      <p className="mb-4">{description}</p>
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-3xl font-semibold border-b-4 border-[#1D9BF0] pb-2 mb-3">
          Provided Feature
        </h1>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-medium">Client Management:</p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>Create and manage client profiles.</li>
                <li>
                  Store contact information, preferences, and important dates.
                </li>
                <li>Track client communication and history.</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">
              Task and Checklist Management:
            </p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>
                  Create to-do lists and checklists for different stages of
                  planning.
                </li>
                <li>Set deadlines and reminders for tasks.</li>
                <li>Track client communication and history.</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Venue and Guest Management:</p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>Manage venue bookings and availability.</li>
                <li>Create seating charts and floor plans.</li>
                <li>RSVP tracking and guest list management.</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Event Design and Styling:</p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>Store design inspiration and mood boards.</li>
                <li>Manage decor and styling elements.</li>
                <li>Coordinate color schemes and themes.</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Expense Tracking::</p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>Record all expenses related to the wedding.</li>
                <li>Categorize and analyze spending.</li>
                <li>Generate financial reports and summaries.</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium">Security and Data Privacy:</p>
            <ul className="list-disc">
              <div className="ml-6">
                <li>
                  Ensure the security and privacy of client and vendor
                  information.
                </li>
                <li>Implement authentication and authorization controls.</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="mt-4 mb-12 bg-[#1D9BF0] px-4 py-2 text-[#FFF] font-medium rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default EventDetails;
