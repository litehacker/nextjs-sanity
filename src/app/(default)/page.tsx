import { SanityDocument } from "next-sanity";
// import Posts from "@/components/Posts";

import { sanityFetch } from "@/sanity/lib/fetch";
import { EVENTS_QUERY, PAGE_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";
import { Events } from "../components/Events";

// force dynamic

export default async function Page() {
  const postsPromise = sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  });
  const eventsPromise = sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });
  const pageDataPromise = sanityFetch<SanityDocument[]>({ query: PAGE_QUERY });
  const [events, posts, pageData] = await Promise.all([
    eventsPromise,
    postsPromise,
    pageDataPromise,
  ]);
  console.log(JSON.stringify(pageData));
  return (
    <>
      <Posts posts={posts} />
      <Events events={events} />
    </>
  );
}
