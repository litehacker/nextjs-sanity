import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const EVENTS_QUERY = groq`*[_type == "event"]{_id, name, slug, date}|order(date desc)`;
export const EVENT_QUERY = groq`*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  ...,
  headline->,
  venue->
}`;

export const PAGE_QUERY = groq`*[_type == "page"]{
  pageBuilder[]{
    // "hero" in an "object" from which we can "pick" fields
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
    // "callToAction" is a "reference"
    // We can resolve "itself" with the @ operator
    _type == "callToAction" => @-> {
      _type,
      title,
      link
    },
    _type == "textWithIllustration" => {
      _type,
      heading,
      tagline,
      excerpt,
      image
    },
    _type == "gallery" => {
      _type,
      images
    },
    _type == "form" => {
      _type,
      formFields[]{
        _type,
        ...,
        options[]{
          _type,
          ...,
          options[]{
            _type,
            ...
          }
        }
      }
    },
    _type == "video" => {
      _type,
      videoUrl
    },
  },
}`;
