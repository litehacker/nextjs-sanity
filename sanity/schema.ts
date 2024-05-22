import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContentType";
import category from "./schemaTypes/categoryType";
import post from "./schemaTypes/postType";
import author from "./schemaTypes/authorType";
import event from "./schemaTypes/eventType";
import { venueType as venue } from "./schemaTypes/venueType";
import { artistType as artist } from "./schemaTypes/artistType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, event, venue, artist],
};
