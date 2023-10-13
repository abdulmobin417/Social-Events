import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Events = ({ aEvent }) => {
  const { ID, category, name, image, event_date, ratings, description, price } =
    aEvent;
  return (
    <div
      data-aos="fade-up"
      className="py-6 px-4 rounded-xl max-w-[350px] shadow-xl flex flex-col"
    >
      <img
        className="rounded-xl max-h-[210px] object-cover"
        src={image}
        alt=""
      />
      <h1 className="text-xl font-semibold my-2">{name}</h1>
      <h3 className="text-sm font-medium mb-2">{category}</h3>
      <div className="text-[#706F6F] mb-4">
        {description.length > 200 ? (
          <div className="">
            <div>{description.slice(0, 200)}...</div>
            <Link
              to={`/eventDetails/${ID}`}
              className="text-[#1D9BF0] font-medium"
            >
              Read More
            </Link>
          </div>
        ) : (
          description
        )}
      </div>
      <div className="mt-auto">
        <div className="text-xl font-semibold mb-2">
          <p>Price: {price}</p>
        </div>
        <div className="text-[#706F6F] flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
            </div>
            <p className="font-medium">{ratings}</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
                stroke="#9F9F9F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-medium">{event_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  aEvent: PropTypes.object,
};

export default Events;
