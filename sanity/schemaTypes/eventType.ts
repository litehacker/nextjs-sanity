import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";
import { DoorsOpenInput } from "./components/DoorsOpenInput";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  preview: {
    select: {
      name: "name",
      venue: "venue.name",
      artist: "headline.name",
      date: "date",
      image: "image",
    },
    prepare({ name, venue, artist, date, image }) {
      const nameFormatted = name || "Untitled event";
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "No date";

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: image || CalendarIcon,
      };
    },
  },
  groups: [
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: "eventType",
      type: "string",
      options: {
        list: ["in-person", "virtual"],
        layout: "radio",
      },
    }),
    defineField({
      name: "date",
      type: "datetime",
      group: "details",
    }),
    defineField({
      name: "doorsOpen",
      type: "number",
      description: "Number of minutes before the start time for admission",
      initialValue: 60,
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      group: "details",
      components: {
        input: DoorsOpenInput,
      },
    }),
    {
      name: "venue",
      type: "reference",
      to: [{ type: "venue" }],
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === "virtual") {
            return "Only in-person events can have a venue";
          }

          return true;
        }),
      readOnly: ({ value, document }) =>
        !value && document?.eventType === "virtual",
      group: "details",
    },
    {
      name: "headline",
      type: "reference",
      to: [{ type: "artist" }],
    },
    defineField({
      name: "image",
      type: "image",
      group: "details",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
      group: "details",
    }),
    defineField({
      name: "tickets",
      type: "url",
    }),
  ],
});
