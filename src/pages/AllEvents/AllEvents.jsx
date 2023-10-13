import { useLoaderData } from "react-router-dom";
import Event from '../Event/Events'

const AllEvents = () => {
  const events = useLoaderData();
  // console.log(events);
  return (
    <div className="container mx-auto mb-20 px-4">
      <div className="text-center my-10 flex flex-col items-center">
        <h1 className="text-3xl font-medium max-w-[400px] border-b-4 border-[#1D9BF0] pb-4">
          You can see our successfully completed event
        </h1>
        <p className="my-6 text-[#5d5858]">
          {`Weddings are a joyous celebration of the union of two people in love,
          involving a ceremony, vow exchange, and a reception with family and
          friends. Birthday parties are events held to celebrate a person's
          birthday, catering to all ages and interests. Anniversaries
          commemorate milestones in a couple's journey, such as a wedding
          anniversary or a significant event in their relationship. Engagement
          parties are pre-wedding celebrations where friends and family come
          together to announce and celebrate a couple's engagement. Retirement
          parties honor someone retiring from their career, expressing
          appreciation for their contributions and achievements. Baby showers
          are gatherings held before the birth of a baby to celebrate and
          support expectant parents, offering gifts, advice, and good wishes.
          These social events serve as important milestones in people's lives,
          bringing together loved ones to create cherished memories and
          celebrate significant moments. Each event has its own unique
          traditions and customs, making them special and memorable occasions.`}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center">
        {events.map((event) => (
          <Event key={event.ID} aEvent={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;