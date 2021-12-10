// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import authorSchema from "./authorSchema";

import videoSchema from "./videoSchema";
import userSchema from "./userSchema";
import categorySchema from "./categorySchema";
import commentSchema from "./commentSchema";
import replySchema from "./replySchema";
import articleSchema from "./articleSchema";
import youtubeSchema from "./youtubeSchema";
import contactSchema from "./contactSchema";
import socialMediaSchema from "./socialMediaSchema";
import userSnippetSchema from "./userSnippetDataSchema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    socialMediaSchema,
    authorSchema,
    userSnippetSchema,
    categorySchema,
    videoSchema,
    userSchema,
    commentSchema,
    replySchema,
    articleSchema,
    youtubeSchema,
    contactSchema,
  ]),
});
