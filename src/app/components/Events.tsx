import { SanityDocument } from "next-sanity";
import Link from "next/link";

export const Events = ({ events }: { events: SanityDocument[] }) => {
  return (
    <section>
      <h2 className="text-4xl font-bold tracking-tighter">Events</h2>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.map((event) => (
          <li className="bg-white p-4 rounded-lg" key={event._id}>
            <Link
              className="hover:underline"
              href={
                event?.slug?.current ? `/events/${event.slug.current}` : "#"
              }
            >
              <h2 className="text-xl font-semibold">{event?.name}</h2>
              <p className="text-gray-500">
                {new Date(event?.date).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
