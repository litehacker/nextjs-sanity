import type { StructureResolver } from "sanity/structure";
import { CalendarIcon, UsersIcon, PinIcon } from "@sanity/icons";
import { AsteriskIcon } from "@sanity/icons";
import { BlockquoteIcon } from "@sanity/icons";
import { UlistIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Dashboard")
    .items([
      S.listItem()
        .title("Upcoming Events")
        .schemaType("event")
        .icon(CalendarIcon)
        .child(
          S.documentList().title("Upcoming Events").filter("date > now()")
        ),
      S.listItem()
        .title("Past Events")
        .schemaType("event")
        .icon(CalendarIcon)
        .child(S.documentList().title("Past Events").filter("date < now()")),
      S.divider(),
      S.documentTypeListItem("artist").title("Artists").icon(UsersIcon),
      S.documentTypeListItem("venue").title("Venues").icon(PinIcon),
      S.documentTypeListItem("author").title("Authors").icon(AsteriskIcon),
      S.documentTypeListItem("post").title("Posts").icon(BlockquoteIcon),
      S.documentTypeListItem("category").title("Categories").icon(UlistIcon),
    ]);
