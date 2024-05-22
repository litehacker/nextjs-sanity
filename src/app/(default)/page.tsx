import { SanityDocument } from "next-sanity";
// import Posts from "@/components/Posts";

import { sanityFetch } from "@/sanity/lib/fetch";
import { EVENTS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";
import { Events } from "../components/Events";

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  });
  const events = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });

  return (
    <>
      <Posts posts={posts} />
      <Events events={events} />
    </>
  );
}
