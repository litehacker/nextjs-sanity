import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContentType";
import category from "./schemaTypes/categoryType";
import post from "./schemaTypes/postType";
import author from "./schemaTypes/authorType";
import event from "./schemaTypes/eventType";
import { venueType as venue } from "./schemaTypes/venueType";
import { artistType as artist } from "./schemaTypes/artistType";
import { pageType as page } from "./schemaTypes/page";
import { heroType as hero } from "./schemaTypes/page/heroType";
import { textWithIllustrationType as textWithIllustration } from "./schemaTypes/page/textWithIllustraitonsType";
import { imageGalleryType as imageGallery } from "./schemaTypes/page/imageGalleryType";
import { formType as form } from "./schemaTypes/page/formType";
import { videoType as video } from "./schemaTypes/page/videType";
import { promotionType as promotion } from "./schemaTypes/page/promotionType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    event,
    venue,
    artist,
    page,
    hero,
    textWithIllustration,
    imageGallery,
    form,
    video,
    promotion,
  ],
};
