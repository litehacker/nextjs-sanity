import { SanityDocument } from "next-sanity";
// import Posts from "@/components/Posts";

import { sanityFetch } from "@/sanity/lib/fetch";
import { EVENTS_QUERY, PAGE_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";
import { Events } from "../components/Events";
import {
  EVENTS_QUERYResult,
  PAGE_QUERYResult,
  POSTS_QUERYResult,
} from "@/types/sanity";

// force dynamic

export default async function Page() {
  const postsPromise = sanityFetch<POSTS_QUERYResult[]>({
    query: POSTS_QUERY,
  });
  const eventsPromise = sanityFetch<EVENTS_QUERYResult[]>({
    query: EVENTS_QUERY,
  });
  const pageDataPromise = sanityFetch<PAGE_QUERYResult[]>({
    query: PAGE_QUERY,
  });
  const [events, posts, pageData] = await Promise.all([
    eventsPromise,
    postsPromise,
    pageDataPromise,
  ]);
  return (
    <>
      <Posts posts={posts} />
      <Events events={events} />
    </>
  );
}
