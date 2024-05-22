import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const EVENTS_QUERY = `*[_type == "event"]{_id, name, slug, date}|order(date desc)`;
export const EVENT_QUERY = `*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  ...,
  headline->,
  venue->
}`;
